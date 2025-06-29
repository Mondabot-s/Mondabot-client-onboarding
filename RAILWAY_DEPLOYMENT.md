# Railway Deployment Guide

This guide will help you deploy the Mondabot Dashboard (frontend + backend) to Railway.

## Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Airtable Credentials**: You'll need your Airtable API key and Base ID

## Deployment Steps

### 1. Create a New Railway Project

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `mondabot-dashboard` repository
5. Railway will automatically detect the Dockerfile and start building

### 2. Configure Environment Variables

In your Railway project dashboard, go to the **Variables** tab and add these environment variables:

#### Required Variables
```
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
NODE_ENV=production
```

#### Optional Variables
```
PORT=3001
FRONTEND_URL=https://your-app-name.railway.app
```

**Note**: Railway automatically sets the `PORT` variable, but you can override it if needed.

### 3. Get Your Airtable Credentials

#### Airtable API Key:
1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Click "Create new token"
3. Give it a name like "Mondabot Dashboard"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. Add access to your specific base
6. Click "Create token"
7. Copy the token (starts with `pat...`)

#### Airtable Base ID:
1. Go to your Airtable base
2. Click "Help" in the top right
3. Click "API documentation"
4. Your Base ID will be shown (starts with `app...`)

### 4. Domain Configuration

After deployment:
1. Railway will provide a URL like `https://your-app-name.railway.app`
2. Update the `FRONTEND_URL` environment variable with this URL
3. Your app will be accessible at this URL

### 5. Verify Deployment

Once deployed, test these endpoints:
- `https://your-app-name.railway.app` - Frontend application
- `https://your-app-name.railway.app/health` - Health check
- `https://your-app-name.railway.app/api/debug` - Debug information
- `https://your-app-name.railway.app/api/projects` - Airtable data

## Troubleshooting

### Build Failures
- Check the build logs in Railway dashboard
- Ensure all dependencies are properly listed in package.json files
- Verify Dockerfile syntax

### Runtime Errors
- Check the deployment logs in Railway dashboard
- Verify environment variables are set correctly
- Test Airtable connectivity using the `/api/debug` endpoint

### Frontend Not Loading
- Ensure the Next.js build completed successfully
- Check that static files are being served correctly
- Verify the catch-all route is working for client-side routing

## File Structure

The deployment includes these key files:
- `Dockerfile` - Container configuration
- `railway.json` - Railway-specific settings
- `.dockerignore` - Files to exclude from Docker build
- Modified `server/server.js` - Serves both API and static files

## Cost Estimation

Railway pricing (as of 2024):
- **Starter Plan**: $5/month for hobby projects
- **Pro Plan**: $20/month for production applications
- **Usage-based**: Pay for what you use (CPU, RAM, Network)

For a dashboard application like this, the Starter plan should be sufficient for most use cases.

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `AIRTABLE_API_KEY` | ✅ | Your Airtable personal access token | `patXXXXXXXXXXXXXX` |
| `AIRTABLE_BASE_ID` | ✅ | Your Airtable base identifier | `appXXXXXXXXXXXXXX` |
| `NODE_ENV` | ✅ | Node.js environment | `production` |
| `PORT` | ❌ | Server port (Railway sets this) | `3001` |
| `FRONTEND_URL` | ❌ | Your Railway app URL | `https://your-app.railway.app` |

## Next Steps

After successful deployment:
1. Set up custom domain (optional)
2. Configure monitoring and alerts
3. Set up automated backups if needed
4. Monitor usage and performance in Railway dashboard

## Support

If you encounter issues:
1. Check Railway documentation: [docs.railway.app](https://docs.railway.app)
2. Review application logs in Railway dashboard
3. Test locally first to isolate deployment-specific issues 