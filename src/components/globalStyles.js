import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  a,
  .clickable {
    color: ${theme`colors.purple.500`};
  }
   a:hover,
   .clickable:hover {
    color: ${theme`colors.purple.400`};
  }
  body > div {
    ${tw`p-2 min-h-screen`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-10 mb-2 border-b-2 border-b-purple-500`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
