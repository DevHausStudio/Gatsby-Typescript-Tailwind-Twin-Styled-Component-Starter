import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components/macro';

interface StyledButtonProps extends HTMLButtonElement {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSmall?: boolean;
  theme?: object;
}

export const StyledButton = styled.button<StyledButtonProps>(
  ({ isPrimary, isSecondary, isSmall, theme }) => [
    // The base button styles added with the tw macro
    tw`inline-block px-8 py-2 mt-0 mb-5`,
    tw`text-lg transition-transform duration-75 transform`,
    tw`rounded hocus:scale-105 hocus:text-yellow-400 focus:outline-none`,

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

export default StyledButton;
