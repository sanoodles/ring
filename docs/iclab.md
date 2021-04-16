# ICLab

It's a demo corporate website with the following stack:

- React with Next.js App
- Contentful as CMS
- Styled Components with Material UI
- Typescript and Developer tools from `@valtech-ch/eslint-config`
- Deployment with Vercel

## Install

Install dependencies:

    yarn install

Create `.env.local` file with the required environment variables:

    cp apps/iclab/.env.example apps/iclab/.env.local

If you want to use the existing Contentful project, ask [@lorenzogm](https://github.com/lorenzogm) to get the credentials.

## Development

Start the development server:

    yarn nx serve iclab

Open `http://localhost:4200`
