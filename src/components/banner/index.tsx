import React from "react";
import { createUseStyles } from "react-jss";

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

const Banner = () => {
  const classes = styles();

  return (
    <div>
      <h1 className={classes.title}>Rick and Morty</h1>
      <p className={classes.text}>
        Rick and Morty es una serie animada para adultos de ciencia ficción y
        comedia estadounidense creada por Justin Roiland y Dan Harmon para el
        bloque de programación nocturna Adult Swim, transmitido en el canal
        Cartoon Network.
      </p>
      <div className={classes.buttonContainer}>
        <button className={classes.button}>Ver el trailer</button>
        <button className={classes.button}>Guardar en favoritos</button>
      </div>
    </div>
  );
};

export default Banner;
