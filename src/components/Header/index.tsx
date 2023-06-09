import { BsList } from "react-icons/bs";
import * as S from "./styled";

export type HeaderProps = {
  section?: Array<string>;
  nickname?: string;
};

function Header({ section, nickname }: HeaderProps) {
  return (
    <S.Wrapper>
      <div>
        <h1>{nickname}</h1>
      </div>
      <span>
        <BsList />
      </span>
      <nav>
        <ul>
          {section?.map((e) => {
            return (
              <li>
                <a href="#">{e}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </S.Wrapper>
  );
}

export default Header;
