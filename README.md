# Portfolio

A blazing-fast, no-nonsense developer portfolio resume built with Astro.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (preferred) or npm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/sarthakkimtani/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

4. Open your browser and visit `http://localhost:4321`

## Customizing for Your Own Use

To make this portfolio your own, simply follow these steps:

### 1. Update Content Files

All content is stored in JSON files in the `src/content` directory:

- `about.json` - Update your personal bio
- `education.json` - Add your educational background
- `experience.json` - Add your work experience
- `hero.json` - Update your name, location, email, etc.
- `projects.json` - Add your projects with descriptions and links
- `skills.json` - List your technical skills
- `social.json` - Update your social media profiles

### 2. Replace Images

- Place your profile picture in `src/assets/` directory
- Update the import in `src/components/Hero.astro`

### 3. Deploy

Build your site for production:

```bash
pnpm build
```

Deploy it to your favorite hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sarthakkimtani/portfolio/issues).

## License

This project is licensed under the MIT License.
