import { ReactComponent as Lupa } from "../../assets/lupa.svg";
import styled from "styled-components";

const Container = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NavTitle = styled.div`
  font-size: 17px;
  font-weight: 600px;
  padding: 5px;
  border: 2px solid transparent;
  :hover {
    cursor: pointer;
    border: 2px solid gray;
    border-radius: 8px;
    transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :active {
    transform: scale(0.9);
  }
`;

const TopBar = styled.div`
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 15px;
  background: ${({ dark }) => (dark ? "white" : "#1f2a48")};
  box-shadow: ${({ dark }) => dark && "0 0 10px 2px rgba(0, 0, 0, 0.1)"};
  width: 100%;
  height: 70px;
  border-radius: 8px;
  .lupa-input {
    display: flex;
    gap: 15px;
  }
`;

const InputArea = styled.input`
  font-size: 17px;
  background: ${({ dark }) => (dark ? "white" : "#1f2a48")};

  width: 100%;
  outline: none;
  border: none;
  color: ${({ dark }) => (dark ? " #1f2a48" : "white")};
`;

const LupaIcon = styled(Lupa)`
  stroke: ${({ dark }) => (dark ? "#1f2a48" : "white")};
`;

const TopButton = styled.div`
  border-radius: 8px;
  padding: 15px;
  background-color: ${({ dark }) => (dark ? "#c9e3fa" : " #3a3ae1")};
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.9);
  }
`;

export {
  Container,
  NavTitle,
  TopButton,
  TopBar,
  LupaIcon,
  InputBox,
  InputArea,
};
