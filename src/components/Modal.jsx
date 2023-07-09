import ReactDOM from "react-dom";
import { styled } from "styled-components";

export const BackdropContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

export const Backdrop = () => {
  return ReactDOM.createPortal(
    <BackdropContainer />,
    document.getElementById("backdrop")
  );
};

const OverlayContanier = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  position: absolute;
  width: 300px;
  height: 250px;
`

const Overlay = () => {
  return ReactDOM.createPortal(
    <OverlayContanier>
      <h6>id: fdasfsdfsd</h6>
      <p>test content</p>
    </OverlayContanier>,
    document.getElementById("overlay")
  );
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = () => {
  return (
    <ModalContainer>
      <Backdrop />
      <Overlay />
    </ModalContainer>
  );
};
