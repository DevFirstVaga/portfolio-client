import * as S from "./styled";

export type TitleProps = {
  children: string;
};

function Title({ children }: TitleProps) {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  );
}

export default Title;