import styled, { DefaultTheme, css } from "styled-components";
import { BtnProps } from ".";

type StyledProps = { theme: DefaultTheme; } & BtnProps;

const wrapperModifiers = {
  solid: (theme: DefaultTheme, color?: string) => css`
    background-color: ${color ? color : theme.colors.primary};
    border-color: ${color ? color : theme.colors.primary};
  `,
  ghost: (theme: DefaultTheme, color?: string) => css`
    background-color: transparent;
    color: ${color ? color : theme.colors.primary};
    border-color: ${color ? color : theme.colors.primary};
    transition: 0.2s ease;
    &:hover {
      background-color: ${color ? color : theme.colors.primary};
      color: #fff;
    }
  `,
  text: (theme: DefaultTheme, color?: string) => css`
    background-color: transparent;
    border-color: transparent;
    color: ${color ? color : theme.colors.primary};
    text-decoration: underline;
  `,
  small: () => css`
    font-size: 1.4rem;
    border-radius: 1.4rem;
    padding: .8rem 1.6rem;
    gap: .4rem;
  `,
  medium: () => css`
    font-size: 1.6rem;
    border-radius: 1.6rem;
    padding: 1rem 2rem;
    gap: .6rem;
  `,
  large: () => css`
    font-size: 1.8rem;
    border-radius: 2rem;
    padding: 1.2rem 2.4rem;
    gap: .8rem;
  `,
};

export const Wrapper = styled.button<StyledProps>`
  ${({ theme, color, variant, size }) => css`
    background-color: ${theme.colors.primary};
    cursor: pointer;
    color: #fff;
    border: solid .2rem;
    font-weight: ${theme.fonts.weight.medium};
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:active {
      transform: scale(0.9);
    }
    ${!!variant && wrapperModifiers[variant](theme, color)}
    ${!!size && wrapperModifiers[size]()}
  `}
`;

export const WrapperLink = styled(Wrapper)`
  display: inline-flex;
  text-decoration: none;
`;

export const iconWrapper = styled.span`
  svg {
    display: block;
  }
`;
