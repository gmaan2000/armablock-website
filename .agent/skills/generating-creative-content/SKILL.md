---
name: generating-creative-content
description: Orchestrates AI image and video generation for visual ad content at scale using Airtable as the review hub.
---
# Creative Content Engine

## When to use this skill
- When the user asks to "Generate X ad variations for [product name]".
- When the user asks to "Create videos for the approved images".
- When the user wants to check pipeline status or "What's pending in Airtable?".

## Setup Instructions
If this is the first time running:
1. Ensure dependencies are installed via `pip install -r .agent/skills/generating-creative-content/requirements.txt`
2. Configure `.env` with `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_NAME`, `GOOGLE_API_KEY`, and `KIE_API_KEY` (or other provider keys).
3. Ensure the Airtable base has the required fields: `Product Name`, `Prompt`, `Reference Image`, `Generated Image`, `Generated Video`, `Status` (Pending, Approved, Generated).

## Workflow

### 1. Image Generation Workflow
- [ ] **Gather inputs**: Ask the user for the product name, reference images, number of variations, and style.
- [ ] **Upload references**: Use `scripts/upload.py` to upload local reference images to a public URL (if Airtable needs them to be publicly accessible first).
- [ ] **Create Records**: Create Airtable records with the prompts and references attached.
- [ ] **Cost Estimate**: **HARD RULE**: You MUST show a cost estimate (e.g. $0.0X per image) and get explicit user confirmation before calling the generation API.
- [ ] **Generate**: Use `scripts/image_gen.py` to generate the images.
- [ ] **Update Airtable**: Update the Airtable records with the generated image URLs and set Status to `Generated`.
- [ ] **Review**: Tell the user to review the generated images in Airtable.

### 2. Video Generation Workflow
- [ ] **Check for Approved Images**: Query Airtable for records where Status is `Approved`.
- [ ] **Write Prompts**: Write video prompts for each approved image.
- [ ] **Cost Estimate**: **HARD RULE**: Show a cost estimate for the video generation and get explicit user confirmation before proceeding.
- [ ] **Generate**: Use `scripts/video_gen.py` to run image-to-video generation using the approved image as the start frame.
- [ ] **Update Airtable**: Update the records with the generated videos.
- [ ] **Review**: Tell the user to review in Airtable.

## Instructions
1. **Executing Python Scripts**: Standard executions should run using python commands. For example:
   ```bash
   python scripts/image_gen.py --record-ids rec123 rec456
   ```
   Or call them directly via a one-liner:
   ```python
   import sys; sys.path.insert(0, '.agent/skills/generating-creative-content'); from scripts.image_gen import generate_batch; generate_batch(['rec123'])
   ```
2. **Cost Awareness**: Always explicitly ask for confirmation before spending money via APIs.
3. **Single Source of Truth**: Airtable is the single source of truth for all assets and reviews.
4. **Handling Failures**: Use standard retry logic for API failures.

## Resources
- `scripts/image_gen.py` - Image generation connector
- `scripts/video_gen.py` - Video generation connector
- `scripts/upload.py` - File uploader for hosting local images
- `scripts/utils.py` - Shared utilities for polling and Airtable interaction
- `requirements.txt` - Python dependencies
