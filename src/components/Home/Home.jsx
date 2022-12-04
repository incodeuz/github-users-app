import React, { useContext, useEffect } from "react";
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
import { userApi } from "../../redux/apiSlice";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(userApi());
  }, [dispatch]);
  
console.log(data)

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
          <InputArea dark={dark} type="search" />
        </div>
        <TopButton dark={dark}>Search</TopButton>
      </InputBox>
    </Container>
  );
};

export default Home;
