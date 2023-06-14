import styled, { css, DefaultTheme } from "styled-components";
import { Props } from '.';

type StyledProps = { theme: DefaultTheme; } & Props;

export const Wrapper = styled.div<StyledProps>`
  ${({ theme }) => css`
  img{
      border: .2rem solid ${theme.colors.white};
      border-radius: 50%;
      margin: 3rem auto 0;
      text-align: center;
      object-fit: cover;
      display: block;
      width: 10rem;
      height: 10rem;
    }

  `}
`;