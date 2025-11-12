# Setup Sanity CMS

## Step 1: Create Sanity Account & Project

1. Go to https://www.sanity.io/manage
2. Click "Create project"
3. Name it: **NovoTHOR**
4. Choose: **Free plan**
5. Copy your **Project ID** (looks like: abc123xyz)

## Step 2: Update Environment Variables

Edit `.env.local` and replace with your actual project ID:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 3: Add CORS Origins

1. Go to https://www.sanity.io/manage
2. Click your project
3. Go to **API** tab
4. Under **CORS Origins**, click **Add CORS origin**
5. Add: `http://localhost:3000`
6. Check: **Allow credentials**
7. Click **Save**

## Step 4: Access Studio

1. Restart your dev server
2. Go to: http://localhost:3000/studio
3. Login with your Sanity account
4. Start editing!

## Done!

Your CMS is now live at `/studio`
