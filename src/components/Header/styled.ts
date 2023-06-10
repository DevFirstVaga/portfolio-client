import styled, { DefaultTheme, css } from "styled-components";
import { HeaderProps } from ".";

type StyledProps = { theme: DefaultTheme } & HeaderProps;

export const Wrapper = styled.header<StyledProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
    nav {
      font-size: 20px;
      background-color: #505050;
      position: absolute;
      top: 70px;
      right: 20px;
      border-radius: 6px;
      width: 160px;
      padding: 10px 0;
    }
    ul {
      a {
        padding: 4px 16px;
        display: block;
        color: ${theme.colors.white};
        &:hover {
          text-decoration: underline;
          background-color: #404040;
        }
      }
    }
    span {
      font-size: 42px;
      cursor: pointer;
      svg {
        display: block;
      }
    }
    @media (min-width: 800px) {
    }
  `}
`;
