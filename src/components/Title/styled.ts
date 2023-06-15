import styled, { css, DefaultTheme } from "styled-components";
import { TitleProps } from ".";

type StyledProps = { theme: DefaultTheme; } & TitleProps;


export const Wrapper = styled.h3<StyledProps>`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: left;
    margin: 0 5rem;
    font-family: ${theme.fonts.display};
    font-weight: ${theme.fonts.weight.medium};
    font-size: ${theme.fonts.size.sectionTitle};
  `}
`;