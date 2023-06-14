import styled, { css, DefaultTheme } from "styled-components";
import { Props } from ".";

type StyledProps = { theme: DefaultTheme; } & Props;

export const Wrapper = styled.div<StyledProps>`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    max-width: 27.5rem;
    margin: 4rem auto 3rem;
    p {
      font-size: ${theme.fonts.primary};
      font-size: ${theme.fonts.size.text};
      text-align: center;
    }
  `}
`;