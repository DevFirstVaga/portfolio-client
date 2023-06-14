import * as S from "./styled";

export type Props = {
  name: string,
  role: string,
};

function NameAndRole({ name, role }: Props) {
  return (
    <S.Wrapper>
      <h1>{name}</h1>
      <h3>{role}</h3>
    </S.Wrapper>
  );
}

export default NameAndRole;