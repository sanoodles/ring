## Architecture

Ring is built as a monorepo to be able to hold several applications and libraries to encourage the reusability of the design system.

### Applications

Several applications can be built together in this monorepo:

    - iclab: A Next.js application to build a demo website.

    - iclab-e2e: End to end testing with Cypress for iclab.

    - shared-ui-e2e: End to end testing with Cypress for the library of components through Storybook.

### Libraries

In the libraries folder, we place shared libraries and libraries related to an specific application.

    - libs
      - shared
        - ui
      - iclab
        - ui
      - another-app-1
        - ui
      - another-app-2
        - ui

- `libs/shared`: folder for shared libraries accross applications

      `libs/shared/ui`: Library of React components. They match the Core Components defined in Contentful and the are built following compound components patterns to allow reusability. This is a publishable library to be shared accross project at npm.

- `libs/iclab`: folder to contain all the libraries related with the application `iclab`.

      `libs/iclab/ui`: Library of React components. The same core components defined in `libs/shared/ui` are instanciated for the `iclab` project to provide the custom styling required for the `iclab` application.
