import { BsList } from "react-icons/bs";
import * as S from "./styled";
import { useState, useEffect } from "react";

export type HeaderProps = {
  sections?: Array<string>;
  nickname?: string;
};

function Header({ sections, nickname }: HeaderProps) {
  const [toggle, setToggle] = useState(false);
  function toggleMenu() {
    setToggle(prevState => !prevState);
  }

  function closeMenu() {
    setTimeout(toggleMenu, 100);
  }

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= 700;
      if (isMobile)
        setToggle(false);
      else
        setToggle(true);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Wrapper>
      <div>
        <h1>{nickname}</h1>
      </div>
      <span onClick={toggleMenu}>
        <BsList />
      </span>
      {(toggle || window.innerWidth > 700) && (
        <nav>
          <ul>
            {sections?.map((link, index) => {
              return (
                <li key={index}>
                  <a onClick={closeMenu} href={`#${link}`}>{link}</a>
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
