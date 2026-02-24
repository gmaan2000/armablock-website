import os
import sys

def check_environment():
    """
    handshake script to verify that the environment is set up correctly.
    Checks for .env file and essential keys.
    """
    print("⚡ Phase 2: Link - Verifying Environment...")
    
    # Check if .env exists
    if not os.path.exists('.env'):
        print("❌ ERROR: .env file not found.")
        print("   Please copy .env.example to .env and add your keys.")
        sys.exit(1)
        
    # Load .env (simple manual load to avoid dependencies for this check)
    has_error = False
    with open('.env', 'r') as f:
        env_content = f.read()
    
    required_keys = [
        'OPENAI_API_KEY', 
        'ANTHROPIC_API_KEY',
        'FIRECRAWL_API_KEY',
        'N8N_API_KEY',
        'NETLIFY_AUTH_TOKEN'
    ]
    
    for key in required_keys:
        if key not in env_content:
             print(f"⚠️  WARNING: {key} is missing.")
             has_error = True
        elif f"{key}=sk-..." in env_content or f"{key}=fc-..." in env_content or f"{key}=..." in env_content:
             print(f"⚠️  WARNING: {key} appears to be default/placeholder.")
             has_error = True
    
    if has_error:
        print("⚠️  Link Verification Completed with WARNINGS.")
    else:
        print("✅ Link Verification Successful! System matches Blueprint.")

if __name__ == "__main__":
    check_environment()
