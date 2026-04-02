#!/usr/bin/env python3
"""
GitHub Pages Setup Script for KOLFF Dashboard
Configures GitHub Pages to serve from /docs folder
"""

import os
import json
import subprocess
import sys

def get_github_token():
    """Try to get GitHub token from environment or git config"""
    # Try environment variable first
    token = os.getenv('GITHUB_TOKEN')
    if token:
        return token

    # Try from git config
    try:
        result = subprocess.run(
            ['git', 'config', '--global', 'user.github-token'],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            return result.stdout.strip()
    except:
        pass

    return None

def setup_github_pages(token):
    """Configure GitHub Pages using the GitHub API"""
    import urllib.request
    import urllib.error

    repo_owner = "fprdiseno-jpg"
    repo_name = "kolff-dashboard"
    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/pages"

    data = {
        "source": {
            "branch": "main",
            "path": "/docs"
        },
        "public": True
    }

    headers = {
        "Accept": "application/vnd.github+json",
        "Authorization": f"Bearer {token}",
        "X-GitHub-Api-Version": "2022-11-28"
    }

    try:
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode('utf-8'),
            headers=headers,
            method='POST'
        )

        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            return True, result
    except urllib.error.HTTPError as e:
        error_data = e.read().decode('utf-8')
        return False, error_data
    except Exception as e:
        return False, str(e)

def main():
    print("=" * 60)
    print("GitHub Pages Setup for KOLFF Dashboard")
    print("=" * 60)
    print()

    # Check for token
    token = get_github_token()

    if not token:
        print("❌ No GitHub token found!")
        print()
        print("To set up GitHub Pages automatically, you need to:")
        print()
        print("Option 1: Set GITHUB_TOKEN environment variable")
        print('  export GITHUB_TOKEN="your_github_token_here"')
        print("  python3 setup_github_pages.py")
        print()
        print("Option 2: Configure git token")
        print('  git config --global user.github-token "your_github_token_here"')
        print("  python3 setup_github_pages.py")
        print()
        print("Option 3: Manual Setup (Recommended if you don't want to share token)")
        print("  1. Go to: https://github.com/fprdiseno-jpg/kolff-dashboard/settings")
        print("  2. Click 'Pages' in left menu")
        print("  3. Set Source to 'Deploy from a branch'")
        print("  4. Select branch: 'main'")
        print("  5. Select folder: '/docs'")
        print("  6. Click 'Save'")
        return 1

    print("✓ GitHub token found!")
    print()
    print("Configuring GitHub Pages...")
    print("  Repository: fprdiseno-jpg/kolff-dashboard")
    print("  Branch: main")
    print("  Path: /docs")
    print()

    success, result = setup_github_pages(token)

    if success:
        print("✅ GitHub Pages configured successfully!")
        print()
        print("Your site will be available at:")
        print("  https://fprdiseno-jpg.github.io/kolff-dashboard/")
        print()
        print("Please wait 1-2 minutes for GitHub to process the changes.")
        return 0
    else:
        print("❌ Failed to configure GitHub Pages")
        print(f"Error: {result}")
        print()
        print("This might happen if:")
        print("  - The token is invalid or expired")
        print("  - The repository doesn't exist")
        print("  - GitHub Pages is already configured")
        print()
        print("Try manual setup instead:")
        print("  https://github.com/fprdiseno-jpg/kolff-dashboard/settings/pages")
        return 1

if __name__ == "__main__":
    sys.exit(main())
