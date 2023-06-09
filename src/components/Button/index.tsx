import * as S from "./styled";

export type BtnProps = {
  children: any;
  color?: string;
  variant?: "solid" | "ghost" | "text";
  size?: "small" | "medium" | "large";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

function Button({
  children,
  color,
  variant = "solid",
  size = "medium",
  leftIcon,
  rightIcon,
}: BtnProps) {
  return (
    <S.Wrapper color={color} variant={variant} size={size}>
      {leftIcon && <S.iconWrapper>{leftIcon}</S.iconWrapper>}
      {children}
      {rightIcon && <S.iconWrapper>{rightIcon}</S.iconWrapper>}
    </S.Wrapper>
  );
}

export default Button;
