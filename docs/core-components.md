# Core Components

## Why a library of Core Components

Let's conside the following 2 mental models:

1. A library of components like Material UI or AntD, there are dozens on Internet and there is no need to create and maintain a new one. They have a high level of abstraction and they can be used in many projects.
2. On your next project you end up creating your own library of components. Probably you are already using one of those already made libraries defined at 1). However, you made some decisions about content and design to create a set of components ready to use in your project.

The proposal for this library of Core Components is to make the library defined in 2) shareble across projects within the same company.

In our case, we have made a couple decisions to speead up the development process:

- Contentful is our CMS, so the components must match the content structure defined in Contentful. The content structure defined is shareable across projects with the import/export functions of Contentful.
- A default design is provided, however if the new project has different content/design requirements, new variants of the component can be added without affecting the existing variants. All the variants will be added to the library, so chances that an existing variant match the requirements of the very new project increase.
- As the Core Components is a publishable library, version control would help to use the same package across different projects without breaking them.

## Pages

Once the Core Components are defined. The next step is to build the pages combining the Core Components as building blocks.

There are 2 categories of pages defined in the CMS: Content Pages and Custom Pages.

### Content pages

The page structure is defined in the CMS by the content creator. The result is a list of components from top to bottom. Very flexible for the content creator because there is no need to involve any developer to release the page.

### Custom pages

However, content pages are very structured, which means some limitations in the UX/UI field and more complexity in the development area. Therefore, with custom pages the content creator is going to create the content in the CMS but a developer is required to build the page with a custom design and logic.

## Stack

The Core Components can be found at `libs/iclab/ui` (to be moved to `libs/shared/ui`).

- Library of React components
- Matching the components defined in Contentful
- Styled Components with Material UI
- Documented with Storybook
- Testing with jest and testing-library

## Install

Install dependencies:

    yarn install

Create `.env.local` file with the required environment variables:

    cp libs/iclab/ui/.env.example libs/iclab/ui/.env.local

If you want to use the existing Contentful project, ask [@lorenzogm](https://github.com/lorenzogm) to get the credentials.

## Development with Storybook

Start the development server:

    yarn nx storybook iclab-ui

Open `http://localhost:4400`

## Typescript

Generate the types from Contentful:

    yarn nx types iclab-ui

## Contentful

Export the content models from Contentful. Please, follow the [Contentful requirements](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) first. Then, run:

    contentful space export
