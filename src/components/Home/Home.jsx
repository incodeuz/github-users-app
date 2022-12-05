import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  InputArea,
  InputBox,
  LupaIcon,
  NavTitle,
  TopBar,
  TopButton,
} from "./style";
import { ReactComponent as Logo } from "../../assets/icon.svg";
import { ReactComponent as Logod } from "../../assets/icon-dark.svg";
import { ThemeContext } from "../../context/darkLight";
import { useDispatch, useSelector } from "react-redux";
import { searchUser, userApi } from "../../redux/apiSlice";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const inputValue = useSelector((state) => state.inputValue);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(userApi());
  }, []);

  console.log(data, inputValue);

  const { dark, setDark } = useContext(ThemeContext);
  return (
    <Container>
      <TopBar className="flex-between">
        {dark === true ? <Logod width="110" /> : <Logo width="110" />}
        {dark === true ? (
          <NavTitle onClick={() => setDark(!dark)}>Dark 🖤</NavTitle>
        ) : (
          <NavTitle dark={dark} onClick={() => setDark(!dark)}>
            Light 🤍
          </NavTitle>
        )}
      </TopBar>
      <InputBox dark={dark} className="flex-between">
        <div className="flex lupa-input">
          <LupaIcon dark={dark} />
          <InputArea
            dark={dark}
            type="search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <TopButton dark={dark} onClick={() => dispatch(searchUser(value))}>
          Search
        </TopButton>
      </InputBox>
    </Container>
  );
};

export default Home;
