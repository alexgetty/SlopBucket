#!/usr/bin/env python3
"""
Slop Bucket News Scraper

Fetches top headlines from NewsAPI and prints them.
Claude handles keyword extraction and subject creation.

Usage:
  python3 trends.py scrape

Setup:
  1. Get free API key from https://newsapi.org/register
  2. Set environment variable: export NEWSAPI_KEY=your_key_here
     Or create .env file in this directory with: NEWSAPI_KEY=your_key_here
"""

import os
import sys
from pathlib import Path

import requests

SCRIPT_DIR = Path(__file__).parent
ENV_FILE = SCRIPT_DIR / ".env"


def get_api_key() -> str:
    """Get API key from environment or .env file."""
    key = os.environ.get("NEWSAPI_KEY")

    if not key and ENV_FILE.exists():
        for line in ENV_FILE.read_text().splitlines():
            if line.startswith("NEWSAPI_KEY="):
                key = line.split("=", 1)[1].strip()
                break

    if not key:
        print("Error: NEWSAPI_KEY not found.", file=sys.stderr)
        print("Get a free key at https://newsapi.org/register", file=sys.stderr)
        print("Then: export NEWSAPI_KEY=your_key_here", file=sys.stderr)
        sys.exit(1)

    return key.strip("'\"")


def fetch_headlines(api_key: str) -> list[str]:
    """Fetch top US headlines from NewsAPI."""
    url = "https://newsapi.org/v2/top-headlines"
    params = {"country": "us", "pageSize": 100, "apiKey": api_key}

    try:
        response = requests.get(url, params=params, timeout=30)
        response.raise_for_status()
        data = response.json()
        if data.get("status") != "ok":
            print(f"API error: {data.get('message', 'Unknown error')}", file=sys.stderr)
            sys.exit(1)
        return [a["title"] for a in data.get("articles", []) if a.get("title")]
    except requests.RequestException as e:
        print(f"Request error: {e}", file=sys.stderr)
        sys.exit(1)


def cmd_scrape():
    """Fetch and print headlines."""
    api_key = get_api_key()
    headlines = fetch_headlines(api_key)

    for headline in headlines:
        print(headline)


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] != "scrape":
        print("Usage: python3 trends.py scrape", file=sys.stderr)
        sys.exit(1)

    cmd_scrape()
