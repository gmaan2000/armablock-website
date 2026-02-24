import os
import time
import requests
from typing import Callable, Any, Dict, List
from pyairtable import Api
from dotenv import load_dotenv

load_dotenv()

AIRTABLE_API_KEY = os.getenv("AIRTABLE_API_KEY")
AIRTABLE_BASE_ID = os.getenv("AIRTABLE_BASE_ID")
AIRTABLE_TABLE_NAME = os.getenv("AIRTABLE_TABLE_NAME", "Content")

def get_airtable_table():
    """Returns the connected pyairtable Table instance."""
    if not AIRTABLE_API_KEY or not AIRTABLE_BASE_ID:
        raise ValueError("AIRTABLE_API_KEY and AIRTABLE_BASE_ID must be set in .env")
    api = Api(AIRTABLE_API_KEY)
    return api.table(AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME)

def poll_async_job(job_fn: Callable[[], Any], check_fn: Callable[[Any], bool], interval: int = 5, max_attempts: int = 60) -> Any:
    """
    Poll an async job until completion.
    
    Args:
        job_fn: Function that starts the job and returns a job identifier.
        check_fn: Function that takes the job identifier and returns True if done.
        interval: Seconds to wait between checks.
        max_attempts: Maximum number of polling attempts.
    """
    job_id = job_fn()
    print(f"Started job: {job_id}")
    
    for attempt in range(max_attempts):
        print(f"Polling attempt {attempt + 1}/{max_attempts}...")
        if check_fn(job_id):
            print("Job completed successfully!")
            return job_id
        time.sleep(interval)
        
    raise TimeoutError(f"Job {job_id} did not complete within the maximum attempts.")

def download_file(url: str, output_path: str) -> None:
    """Downloads a file from a URL to a local path."""
    print(f"Downloading {url} to {output_path}...")
    response = requests.get(url, stream=True)
    response.raise_for_status()
    with open(output_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)
    print("Download complete.")
