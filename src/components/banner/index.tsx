import React from "react";
import { createUseStyles } from "react-jss";
import styled from "styled-components";

// CSS-in-JS

const styles = createUseStyles({
  title: {
    fontSize: "30px,",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: "10px",
    padding: "5px",
  },
});

// style components

interface IButton {
  textColor: string;
  backColor: string;
}

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

const Button = styled.button<IButton>`
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.textColor};
  border-radius: 10px;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Banner = () => {
  //const classes = styles();

  return (
    <div>
      <Title /* className={classes.title} */>Rick and Morty</Title>
      <Text /* className={classes.text} */>
        Rick and Morty es una serie animada para adultos de ciencia ficción y
        comedia estadounidense creada por Justin Roiland y Dan Harmon para el
        bloque de programación nocturna Adult Swim, transmitido en el canal
        Cartoon Network.
      </Text>
      <ButtonContainer /* className={classes.buttonContainer} */>
        <Button
          backColor={"lightblue"}
          textColor={"black"} /* className={classes.button} */
        >
          Ver el trailer
        </Button>
        <Button
          backColor={"lightgreen"}
          textColor={"red"} /* className={classes.button} */
        >
          Guardar en favoritos
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Banner;
