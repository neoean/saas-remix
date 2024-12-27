# SaaS Remix Template

A modern SaaS template built with Remix, perfect for AI-powered applications and SaaS tools.

![Landing Page](/public/screenshot/index.png)

## Overview

SaaS Remix is a production-ready template for building modern SaaS applications. Built with Remix, TypeScript, and Tailwind CSS, it provides a solid foundation with essential features that most SaaS applications need.

## Demo

Check out the live demo: [https://comicsai.org](https://comicsai.org)

## Screenshots

<details>
<summary>More screenshots</summary>

### Landing Page
![Landing Page](https://github.com/neoean/saas-remix/public/screenshot/index.png)

### Pricing Page
![Pricing Page](https://github.com/neoean/saas-remix/public/screenshot/pricing.png)

### Blog Page
![Blog Page](https://github.com/neoean/saas-remix/public/screenshot/blog.png)

</details>

## Features

- 🌏 Internationalization (15+ languages)
- 💳 Subscription management ready
- 🔐 Authentication system
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🚀 SEO optimized
- 💫 Smooth animations
- 📊 Analytics ready

## Tech Stack

- **Framework:** [Remix](https://remix.run)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Components:** [Headless UI](https://headlessui.dev)
- **Icons:** [Heroicons](https://heroicons.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion)
- **i18n:** [i18next](https://www.i18next.com)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/saas-remix.git
cd saas-remix
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

## Project Structure

```
saas-remix/
├── app/
│   ├── components/     # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── LanguageSelector.tsx
│   ├── routes/        # Route components
│   │   ├── ($lang)._index.tsx      # Landing page
│   │   ├── ($lang).about.tsx       # About page
│   │   ├── ($lang).blog._index.tsx # Blog list
│   │   ├── ($lang).blog.$id.tsx    # Blog detail
│   │   ├── ($lang).cases.tsx       # Case studies
│   │   ├── ($lang).price.tsx       # Pricing plans
│   │   └── ($lang).try-free.tsx    # Free trial
│   ├── i18n/          # i18n configuration
│   └── middleware/    # Middleware
├── public/
│   └── locales/      # Translation files
└── tailwind.config.ts # Tailwind configuration
```

## Template Features

- 🌐 **Internationalization**
  - Built-in support for 15+ languages
  - Easy to add new languages
  - SEO-friendly URL structure with language prefixes

- 💰 **Subscription Management**
  - Ready-to-use pricing page
  - Subscription plan components
  - Easy integration with payment providers

- 🔒 **Authentication**
  - User authentication flow
  - Protected routes
  - Role-based access control

- 📱 **Responsive Design**
  - Mobile-first approach
  - Tailwind CSS utilities
  - Smooth animations

## Customization

The template is designed to be easily customizable:

1. **Branding**: Update colors in `tailwind.config.ts`
2. **Content**: Modify translations in `public/locales`
3. **Routes**: Add or modify routes in `app/routes`
4. **Components**: Customize UI components in `app/components`

## Deployment

Build for production:

```bash
npm run build
```

Run in production mode:

```bash
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you need help with the template:

- 📧 Email: support@example.com
- 💬 Discord: [Community Server](https://discord.gg/example)
- 📚 Documentation: [docs.example.com](https://docs.example.com)
