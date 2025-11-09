# Magnus R&S A/C Website

Professional HVAC services website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Modern, responsive design
- Light blue color scheme
- Service pages
- Contact forms
- Review carousel
- FAQ section
- Mobile-friendly navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Resend

## Customization

Update the following to match your business:

- Contact information in `components/layout/Footer.tsx` and `components/layout/TopBar.tsx`
- Business details in `app/layout.tsx` (metadata and schema)
- Services in `content/services.ts`
- Reviews in `content/reviews.ts`
- FAQs in `components/sections/FAQAccordion.tsx`

## Project Structure

```
├── app/                  # Next.js app router pages
├── components/           # React components
│   ├── layout/          # Header, footer, navigation
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── content/             # Content data (services, reviews)
└── public/              # Static assets (images, icons)
```

## License

Private - All Rights Reserved

