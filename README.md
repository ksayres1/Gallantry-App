# Gallantry - Discipleship War Room

A production-ready Next.js application for Gallantry's discipleship ministry, featuring the 3 Pillars: Forge the Man, Build the Brotherhood, and Advance the Kingdom.

## Features

- **Complete Multi-Page Application**: Home, Pillars, Continuum, Tour requests, Roundtable hosting, KOS Briefings, Videos, Store, About, Contact
- **Form Handling**: Tour requests, roundtable hosting inquiries, KOS reminder signups, and contact forms
- **YouTube Integration**: Embedded channel content and subscription promotion
- **Responsive Design**: Mobile-first design with dark/light theme support
- **Email Integration Ready**: Server-side form processing with email service integration
- **Store Showcase**: Featured merchandise with external store integration

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS with custom red/black theme
- **UI Components**: shadcn/ui
- **Forms**: react-hook-form + zod validation
- **Icons**: lucide-react
- **Deployment**: Vercel-ready

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
Create a `.env.local` file with:
```env
# Email Service (choose one)
RESEND_API_KEY=your_resend_key
# or
SENDGRID_API_KEY=your_sendgrid_key
# or
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Email Integration

The app uses Gmail SMTP through Squarespace for email delivery. To set up:

1. **Set up Gmail App Password**:
   - Go to your Google Account settings
   - Enable 2-factor authentication if not already enabled
   - Generate an App Password for "Mail"
   - Use this App Password (not your regular password) in SMTP_PASS

2. **Add environment variables**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=ken@overcomeworldwide.org
   SMTP_PASS=Rochestercharlottedallas1
   ```

3. **Test email functionality** by submitting any form on the site

## Content Management

All content is centralized in `/lib/content.ts` for easy updates:
- Site configuration and URLs
- Pillar descriptions and scripture references
- Continuum steps and CTAs
- Testimonials and regional information
- Featured merchandise details

## Key Pages

- **Home (/)**: Hero, pillars overview, continuum timeline, featured merch, testimonials
- **Tour (/tour)**: Request form for bringing Gallantry to your location
- **Roundtables (/roundtables)**: Inquiry form for hosting BOARD groups
- **KOS Briefings (/kos-briefings)**: Live YouTube sessions every other Thursday
- **Videos (/videos)**: YouTube channel integration and subscription promotion
- **Store (/store)**: Featured merchandise showcase with external store links

## Deployment

This app is configured for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - the app will automatically build and deploy

## Support

For questions or support, contact: ken@overcomeworldwide.org

## License

© 2025 Gallantry. All rights reserved.