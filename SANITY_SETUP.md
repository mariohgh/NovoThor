# Sanity CMS Setup Guide

## Quick Start

1. **Create Sanity Account**
   - Go to https://www.sanity.io/
   - Sign up with GitHub/Google

2. **Create New Project**
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```
   - Choose: Create new project
   - Name: NovoTHOR
   - Dataset: production
   - Skip schema templates

3. **Get Project ID**
   - Copy the project ID from the output
   - Update `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Access CMS**
   - Go to: http://localhost:3000/studio
   - Login with your Sanity account
   - Start editing content!

## Content Types Available

### Home Page
- Hero section (title, subtitle, background image)
- Benefits list
- Sports section
- Military section

### Benefits
- Title
- Icon image
- Description

### Teams/Organizations
- Name
- Logo
- Category (NFL, NBA, Military, Other)

## How to Use

1. **Edit Home Page Content**
   - Go to `/studio`
   - Click "Home Page"
   - Edit hero text, upload images
   - Publish changes

2. **Add New Benefits**
   - Click "Benefit"
   - Add title, upload icon, write description
   - Publish

3. **Add Teams**
   - Click "Team/Organization"
   - Upload logo, add name, select category
   - Publish

4. **View Changes**
   - Changes appear on the live site
   - No code deployment needed

## Deploy CMS to Production

When deploying to Vercel:
1. Add environment variables in Vercel dashboard
2. Sanity Studio will be at: `yourdomain.com/studio`
3. Share this URL with content editors
