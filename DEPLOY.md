# Deploy to Vercel

## 1. Push to GitHub

```bash
cd /Users/marioivanov/Desktop/NovoThorSite/nextjs-site
git init
git add .
git commit -m "Initial commit"
```

Create repo on GitHub, then:
```bash
git remote add origin https://github.com/yourusername/novothor-nextjs.git
git push -u origin main
```

## 2. Deploy to Vercel

1. Go to https://vercel.com
2. Click "Import Project"
3. Connect your GitHub repo
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `69z2nvbz`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
5. Click "Deploy"

## 3. Add Production CORS

Go to: https://www.sanity.io/manage/personal/project/69z2nvbz/api

Add CORS origin:
- URL: `https://your-site.vercel.app`
- Check: Allow credentials
- Save

## 4. Share CMS Access

Your team can access the CMS at:
`https://your-site.vercel.app/studio`

Add team members in Sanity:
https://www.sanity.io/manage/personal/project/69z2nvbz/members

## Done!

Site updates automatically when you push to GitHub.
Team can edit content at `/studio` anytime.
