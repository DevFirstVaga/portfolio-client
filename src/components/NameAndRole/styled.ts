import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 3.0rem;
    h1{
      font-family: ${theme.fonts.display};
      font-weight: ${theme.fonts.weight.medium};
      font-size: ${theme.fonts.size.title};
    }
    h3{
      font-family: ${theme.fonts.primary};
      font-weight: ${theme.fonts.weight.regular};
      font-size: ${theme.fonts.size.text};
    }
  `}
`;