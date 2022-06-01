import styled from "styled-components";
import SwitchMode from "./SwithMode";
function Header() {
  return (
    <HeaderPane>
      <span>Where is the world?</span>
      <SwitchMode />
    </HeaderPane>
  );
}

export default Header;

const HeaderPane = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6dd19c;
  padding: 0 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  z-index: 10;

  span {
    font-size: 20px;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    color: #e8faea;
  }
`;
