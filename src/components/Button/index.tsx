import * as S from "./styled";

export type BtnProps = {
  color?: string;
  children: any;
};

function Button({ color, children }: BtnProps) {
  return <S.Wrapper color={color}>{children}</S.Wrapper>;
}

export default Button;
