import * as S from "./styled";

export type BtnProps = {
  children: any;
  color?: string;
  variant?: "solid" | "ghost" | "text";
  size?: "small" | "medium" | "large";
};

function Button({
  children,
  color,
  variant = "solid",
  size = "medium",
}: BtnProps) {
  return (
    <S.Wrapper color={color} variant={variant} size={size}>
      {children}
    </S.Wrapper>
  );
}

export default Button;
