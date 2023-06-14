import * as S from "./styled";

export type Props = {
  text?: string,
};

export const TEXT = `Desenvolvedor Front-End especializado em usabilidade e experiência do usuário (UX). Com paixão crio interfaces elegantes e intuitivas, usando as melhores práticas de design para uma experiência uníca aos usuários!!!
Estou comprometido em desenvolver produtos que combinem funcionalidade e estética, visando sempre a satisfação dos usuários.`;

function Bio({ text }: Props) {
  return (
    <S.Wrapper>
      <p>{text}</p>
    </S.Wrapper>
  );
}

export default Bio;;