import LinkNext, { LinkProps as LinkNextProps } from 'next/link'
import type { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

export type LinkProps = LinkNextProps & {
  onClick?: () => void
  children: ReactNode
}

export function Link({ children, onClick, ...rest }: LinkProps): ReactElement {
  return (
    <LinkNext
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      passHref
    >
      <LinkStyled onClick={onClick}>{children}</LinkStyled>
    </LinkNext>
  )
}

export default Link

const LinkStyled = styled.a`
  cursor: pointer;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: none;
  }
`
