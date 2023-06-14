import * as S from "./styled";

export type Props = {
  imgLink?: string;
};

export const img = "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80";

function Photo({ imgLink }: Props) {
  return (
    <S.Wrapper>
      <img src={imgLink} alt="Foto de Perfil" />
    </S.Wrapper>
  );
}

export default Photo;