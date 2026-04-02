#!/bin/bash

echo "============================================================"
echo "GitHub Pages Setup for KOLFF Dashboard"
echo "============================================================"
echo ""

# Function to configure GitHub Pages
configure_github_pages() {
    local token="$1"
    local owner="fprdiseno-jpg"
    local repo="kolff-dashboard"

    echo "Configuring GitHub Pages..."

    curl -s -X POST \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer $token" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        -d '{"source":{"branch":"main","path":"/docs"},"public":true}' \
        "https://api.github.com/repos/$owner/$repo/pages" \
        -w "\nStatus: %{http_code}\n"
}

# Check for token in environment
if [ -n "$GITHUB_TOKEN" ]; then
    echo "[OK] GitHub token found in GITHUB_TOKEN environment variable"
    echo ""
    configure_github_pages "$GITHUB_TOKEN"
elif [ -n "$GH_TOKEN" ]; then
    echo "[OK] GitHub token found in GH_TOKEN environment variable"
    echo ""
    configure_github_pages "$GH_TOKEN"
else
    echo "[ERROR] No GitHub token found"
    echo ""
    echo "To configure GitHub Pages automatically, you need:"
    echo ""
    echo "Option 1 - Set token and run:"
    echo '  export GITHUB_TOKEN="your_github_personal_access_token"'
    echo "  bash setup.sh"
    echo ""
    echo "Option 2 - Manual setup (Recommended):"
    echo "  1. Go to: https://github.com/fprdiseno-jpg/kolff-dashboard/settings"
    echo "  2. Click 'Pages' in the left menu"
    echo "  3. Under 'Source', select 'Deploy from a branch'"
    echo "  4. Branch: select 'main'"
    echo "  5. Folder: select '/docs'"
    echo "  6. Click 'Save'"
    echo ""
    echo "After manual setup, wait 1-2 minutes, then visit:"
    echo "  https://fprdiseno-jpg.github.io/kolff-dashboard/"
    exit 1
fi

echo ""
echo "[OK] Configuration complete!"
echo ""
echo "Your site will be available at:"
echo "  https://fprdiseno-jpg.github.io/kolff-dashboard/"
echo ""
echo "Please wait 1-2 minutes for GitHub to process changes."
