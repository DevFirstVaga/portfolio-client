import { ReactNode } from "react";
import * as S from "./styled";

export type BtnProps = {
  children: ReactNode;
  color?: string;
  variant?: "solid" | "ghost" | "text";
  size?: "small" | "medium" | "large";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  href?: string;
  onclick?: () => void;
};

function Button({
  children,
  color,
  variant = "solid",
  size = "medium",
  leftIcon,
  rightIcon,
  href,
  onclick,
}: BtnProps) {
  if (href) {
    return (
      <S.WrapperLink
        color={color}
        variant={variant}
        size={size}
        as="a"
        href={href}
        target="_blank"
      >
        {leftIcon && <S.iconWrapper>{leftIcon}</S.iconWrapper>}
        {children}
        {rightIcon && <S.iconWrapper>{rightIcon}</S.iconWrapper>}
      </S.WrapperLink>
    );
  }
  return (
    <S.Wrapper color={color} variant={variant} size={size} onClick={onclick}>
      {leftIcon && <S.iconWrapper>{leftIcon}</S.iconWrapper>}
      {children}
      {rightIcon && <S.iconWrapper>{rightIcon}</S.iconWrapper>}
    </S.Wrapper>
  );
}

export default Button;
