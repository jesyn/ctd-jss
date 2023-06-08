import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import styled from "styled-components";

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

// style components
interface IImage {
  gender: string;
}

const ListCard = styled.section`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;
const Card = styled.article`
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
`;

const Image = styled.img`
  border-radius: 10px;
`;

const Gender = styled.h3<IImage>`
  color: ${(props) => (props.gender === "Female" ? "pink" : "blue")};
`;

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
      <ListCard /* className={classes.listCard} */>
        {character.map((data: CharacterProps) => {
          return (
            <Card key={data.id} /* className={classes.card} */>
              <Image
                src={data.image}
                alt={data.name}
                /* className={classes.image} */
              />
              <div>
                <h3>{data.name}</h3>
                <Gender gender={data.gender}>{data.gender}</Gender>
              </div>
            </Card>
          );
        })}
      </ListCard>
    </>
  );
};

export default Character;
