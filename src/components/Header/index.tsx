import { BsList } from "react-icons/bs";
import * as S from "./styled";
import { useState } from "react";

export type HeaderProps = {
  section?: Array<string>;
  nickname?: string;
};

function Header({ section, nickname }: HeaderProps) {
  const [toggle, setToggle] = useState(false);
  function toggleMenu() {
    setToggle((prevState) => !prevState);
  }

  return (
    <S.Wrapper>
      <div>
        <h1>{nickname}</h1>
      </div>
      <span onClick={toggleMenu}>
        <BsList />
      </span>
      {toggle && (
        <nav>
          <ul>
            {section?.map((link) => {
              return (
                <li>
                  <a href={`#${link}`}>{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </S.Wrapper>
  );
}

export default Header;
