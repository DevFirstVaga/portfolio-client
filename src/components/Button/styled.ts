import styled, { DefaultTheme, css } from "styled-components";
import { BtnProps } from ".";

type StyledProps = { theme: DefaultTheme } & BtnProps;

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
    font-size: 14px;
    border-radius: 14px;
    padding: 8px 16px;
    gap: 4px;
  `,
  medium: () => css`
    font-size: 16px;
    border-radius: 16px;
    padding: 10px 20px;
    gap: 6px;
  `,
  large: () => css`
    font-size: 18px;
    border-radius: 20px;
    padding: 12px 24px;
    gap: 8px;
  `,
};

export const Wrapper = styled.button<StyledProps>`
  ${({ theme, color, variant, size }) => css`
    background-color: ${theme.colors.primary};
    cursor: pointer;
    color: #fff;
    border: solid 2px;
    font-weight: 700;
    display: flex;
    align-items: center;
    transition: 0.2s ease;
    &:active {
      transform: scale(0.9);
    }
    ${!!variant && wrapperModifiers[variant](theme, color)}
    ${!!size && wrapperModifiers[size]()}
  `}
`;

export const iconWrapper = styled.span`
  svg {
    display: block;
  }
`;
