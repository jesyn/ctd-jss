import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

// CSS-in-JS
interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

const styles = createUseStyles({
  listCard: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  card: {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "5px",
  },
  image: {
    borderRadius: "10px",
  },
});

const Character = () => {
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  const classes = styles();

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <>
      <h2>Algunos personajes de la serie</h2>
      <section className={classes.listCard}>
        {character.map((data: CharacterProps) => {
          return (
            <article key={data.id} className={classes.card}>
              <img src={data.image} alt={data.name} className={classes.image} />
              <div>
                <h3>{data.name}</h3>
                <h3>{data.gender}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Character;
