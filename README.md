# Gatsby Typescript Tailwind Twin.Macro Styled-Component Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/f3a1349e-ba39-4c41-a9e9-a5714ccd4f19/deploy-status)](https://app.netlify.com/sites/gatsby-typescript-tailwind-twin-styled-component-starter/deploys)

This is a starter for [Gatsby](https://www.gatsbyjs.org/) websites using:

- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin.Macro](https://github.com/ben-rogerson/twin.macro)

## Demo

[Gatsby Typescript Tailwind Twin Styled-Component Starter](https://gatsby-typescript-tailwind-twin-styled-component-starter.netlify.app/)

## Example of Usage

1.  **Building Styled Components**

    ```typescript
    // Inject Tailwind classes to element using styled-component syntax
    const Wrapper = styled.div`
        ${tw`flex flex-col items-center justify-center h-screen`}
    `;

    // Use Tailwind classes directly on element
    const Main = tw.div`
        p-6 bg-gray-100 rounded-lg shadow-2xl
    `;

    // Use Tailwind classes directly within css prop in element mixed with css.
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        // Combine regular css and Tailwind styles within backticks
        css`
          background: #542c85;
        `
      ]}
    >
    ```

2.  **Building Styled Typescript Components with Props**

    ```typescript
    interface StyledButtonProps {
      isPrimary?: boolean;
      isSecondary?: boolean;
      isSmall?: boolean;
      theme?: any;
      children: React.ReactNode;
    }

    const StyledButton = styled.button(
      ({ isPrimary, isSecondary, isSmall, theme }: StyledButtonProps) => [
        // The base button styles added with the tw macro
        tw`inline-block px-8 py-2 mt-0 mb-5 text-lg 
                transition-transform duration-75 transform rounded hocus:scale-105 
                hocus:text-yellow-400 focus:outline-none`,

        // Use props to conditionally style your components
        isPrimary && tw`text-white bg-red-500 border-red-700`,

        // Combine regular css with Tailwind classes within backticks
        isSecondary &&
          css`
            box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
            ${tw`bg-orange-500 border-orange-700`}
          `,

        // Conditional props can be added
        isSmall ? tw`text-sm` : tw`text-lg`,

        // Your tailwind.config.js styles are added by <Theme> in pages/index.js
        css`
          color: ${theme.colors.black};
        `
      ]
    );
    ```

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, using the Redux-Toolkit Typescript Starter.

    ```shell
    gatsby new my-site-name https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter
    ```

2.  **Develop**

    Navigate into your new site’s directory and start the development environment.

    ```shell
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`

3.  **Build**

    Get an optimized production build for your site generating static HTML and JavaScript, CSS bundles.

    ```shell
    gatsby build
    ```
    
## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/DevHausStudio/Gatsby-Typescript-Tailwind-Twin-Styled-Component-Starter)
