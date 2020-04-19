import React from 'react'
import tw from 'twin.macro'
import { css } from 'styled-components/macro'
import { Theme, Button, Logo } from './../components'

const IndexPage = () => (
  <Theme>
    <div
      css={[
        tw`h-screen flex flex-col items-center justify-center`,
        // Combine regular css and Tailwind styles within backticks
        css`
          background: linear-gradient(#db00ff, #0047ff);
          * {
            ${tw`mt-6`}
          }
        `
      ]}
    >
      <div tw="flex flex-col justify-center h-full">
        <Button isPrimary>Submit</Button>
        <Button isSecondary>Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
      <Logo />
    </div>
  </Theme>
)

export default IndexPage
