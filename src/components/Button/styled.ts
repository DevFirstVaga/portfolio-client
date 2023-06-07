import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;
