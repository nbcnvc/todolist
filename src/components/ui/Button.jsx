import styled from "styled-components";

const NBCButton = styled.button``;

const Button = (props) => {
  const { children, clickHandler } = props;
  return <NBCButton onClick={clickHandler}>{children}</NBCButton>;
};

export default Button;
