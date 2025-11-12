# CMS Demo Instructions

## Quick Demo (No Setup Required)

1. Go to: **http://localhost:3000/admin**
2. Edit content and see live preview
3. No login needed for demo

## Full Sanity CMS Setup

1. Go to: **http://localhost:3000/studio**
2. Requires Sanity account

## What You Can Edit

### Home Page Content
- Hero section text
- Benefits list
- Sports section content
- Military section content

### Add New Content
- Create new benefits with icons
- Add team logos
- Upload images

## Quick Demo Flow

1. **Visit Studio**: http://localhost:3000/studio
2. **Click "Home Page"** in the left sidebar
3. **Edit Hero Section**:
   - Change title text
   - Update subtitle
   - Upload background image
4. **Click Publish** (green button)
5. **View Changes**: Go back to http://localhost:3000

## For Production

Run: `sanity init` to create a real Sanity project
Then update `.env.local` with your project ID

The CMS will be live at: `yourdomain.com/studio`
