import os
import argparse
import requests
import time
from dotenv import load_dotenv

from .utils import get_airtable_table, poll_async_job

load_dotenv()

# Placeholders for Veo 3.1 / Kie.ai API endpoints
VIDEO_GENERATION_API_URL = os.getenv("VIDEO_GENERATION_API_URL", "https://api.example.com/v1/videos/generate")
VIDEO_STATUS_API_URL = os.getenv("VIDEO_STATUS_API_URL", "https://api.example.com/v1/videos/status")
API_KEY = os.getenv("GOOGLE_API_KEY") # Or KIE_API_KEY depending on provider

def start_video_generation(prompt: str, image_url: str) -> str:
    """
    Submits an image-to-video generation job.
    Returns the job_id.
    """
    if not API_KEY:
        print("WARNING: API_KEY not set. Using dummy job ID.")
        return "dummy-job-123"

    print(f"Submitting video generation job with prompt: {prompt}")
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "prompt": prompt,
        "image_url": image_url, # Veo 3.1 image-to-video starting frame
    }
    
    try:
        # response = requests.post(VIDEO_GENERATION_API_URL, headers=headers, json=payload)
        # response.raise_for_status()
        # return response.json().get("job_id")
        
        # Simulated return
        return "dummy-job-123"
    except Exception as e:
        print(f"Error starting video generation: {e}")
        raise

def check_video_status(job_id: str) -> bool:
    """
    Checks the status of the video job.
    Returns True if completed.
    """
    if job_id.startswith("dummy"):
        return True # For placeholder logic

    headers = {"Authorization": f"Bearer {API_KEY}"}
    try:
        response = requests.get(f"{VIDEO_STATUS_API_URL}/{job_id}", headers=headers)
        response.raise_for_status()
        status = response.json().get("status")
        return status == "COMPLETED"
    except Exception as e:
        print(f"Error checking status for {job_id}: {e}")
        return False

def get_video_url(job_id: str) -> str:
    """Fetches the final URL of a completed video job."""
    if job_id.startswith("dummy"):
        return "https://dummyvideo.com/video.mp4"

    headers = {"Authorization": f"Bearer {API_KEY}"}
    try:
        response = requests.get(f"{VIDEO_STATUS_API_URL}/{job_id}", headers=headers)
        response.raise_for_status()
        return response.json().get("video_url")
    except Exception as e:
        print(f"Error fetching final video URL for {job_id}: {e}")
        raise

def generate_video_batch(record_ids: list[str]):
    """Reads approved Airtable records, generates videos, and updates records."""
    table = get_airtable_table()
    
    for record_id in record_ids:
        print(f"\nProcessing video for record {record_id}...")
        try:
            record = table.get(record_id)
            fields = record.get("fields", {})
            
            # Check for approved status or just generate based on what the orchestrator passed.
            # The orchestrator should have filtered to 'Approved', but it's good to confirm.
            
            prompt = fields.get("Video Prompt", fields.get("Prompt"))
            if not prompt:
                print(f"Skipping {record_id}: No video prompt found.")
                continue
                
            start_image_url = None
            gen_images = fields.get("Generated Image", fields.get("Reference Image", []))
            
            if gen_images and isinstance(gen_images, list):
                start_image_url = gen_images[0].get("url")
                
            if not start_image_url:
                print(f"Skipping {record_id}: No start image available for Image-to-Video generation.")
                continue
                
            job_id = start_video_generation(prompt, start_image_url)
            
            # Poll using utils
            print(f"Polling video generation job: {job_id}")
            poll_async_job(
                job_fn=lambda: job_id,
                check_fn=check_video_status,
                interval=10,
                max_attempts=60
            )
            
            final_url = get_video_url(job_id)
            
            # Update Airtable
            table.update(record_id, {
                "Generated Video": [{"url": final_url}],
            })
            print(f"Successfully generated and updated video for {record_id}.")
            
        except Exception as e:
            print(f"Failed processing {record_id}: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate videos from Airtable records.")
    parser.add_argument("--record-ids", nargs="+", required=True, help="List of Airtable Record IDs")
    args = parser.parse_args()
    
    generate_video_batch(args.record_ids)
