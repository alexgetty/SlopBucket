# Local Development Setup

## Environment Variables

Create a `.env` file in the `site/` directory:

```bash
# PostHog Analytics
# Get your key from https://app.posthog.com → Project Settings → Project API Key
POSTHOG_KEY=phc_your_key_here
```

## GitHub Pages Deployment

Add the secret in your GitHub repo:

1. Go to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `POSTHOG_KEY`
4. Value: Your PostHog project API key

The deploy workflow will automatically inject this into the build.
