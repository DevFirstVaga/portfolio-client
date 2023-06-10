import styled, { DefaultTheme, css, keyframes } from "styled-components";
import { HeaderProps } from ".";

type StyledProps = { theme: DefaultTheme } & HeaderProps;

const menuAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
      opacity: 0;
      transform: translateY(-10px);
      animation: ${menuAnimation} 0.3s ease-in-out forwards;
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
      font-size: 40px;
      cursor: pointer;
      svg {
        display: block;
      }
    }
    @media (min-width: 700px) {
      nav {
        position: initial;
        width: initial;
        background-color: initial;
        font-size: 18px;
        padding: 5px 0;
      }
      ul {
        display: flex;
        a {
          &:hover {
            text-decoration: none;
            background-color: transparent;
          }
          &::after {
            background-color: ${theme.colors.white};
            content: "";
            width: 0;
            height: 2px;
            display: block;
            transition: width ease 0.3s;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
      span {
        display: none;
      }
    }
  `}
`;
