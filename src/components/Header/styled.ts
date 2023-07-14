import styled, { DefaultTheme, css, keyframes } from "styled-components";
import { HeaderProps } from ".";

type StyledProps = { theme: DefaultTheme; } & HeaderProps;

const menuAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
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
    padding: 2rem;
    position: relative;
    max-width: 70rem;
    margin: auto;
    h1{
      font-family: ${theme.fonts.display};
      font-weight: ${theme.fonts.weight.medium};
      font-size: ${theme.fonts.size.sectionTitle};
      &:hover{
        text-shadow: 0px 0px 10px ${theme.colors.primary};
        cursor: pointer;
      }
    }
    nav {
      font-size: 2rem;
      background-color: #505050;
      position: absolute;
      top: 7rem;
      right: 2rem;
      border-radius: 1.4rem;
      width: 16rem;
      padding: 1rem 0;
      opacity: 0;
      transform: translateY(-1rem);
      animation: ${menuAnimation} 0.3s ease-in-out forwards;
    }
    ul {
      a {
        padding: .4rem 1.6rem;
        display: block;
        color: ${theme.colors.white};
        &:hover {
          text-decoration: underline;
          background-color: #404040;
        }
      }
    }
    span {
      font-size: 4rem;
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
        font-size: 1.8rem;
        padding: .5rem 0;
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
            height: .2rem;
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
