import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/pokemon.css';

const Pokemon = ({ url }) => {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    axios(url).then(({ data }) => {
      console.log(poke);
      setPoke(data);
    });
  }, [url]);

  return (
    Object.keys(poke).length > 0 && (
      <section className='pokemon-div'>
        <ul>
          <li>
            <span>Name:</span> {poke.name}
          </li>
          <li>
            <span>Type:</span> {poke.types.map((e) => e.type.name).join(', ')}
          </li>
        </ul>
        <img src={poke.sprites.front_default} />
      </section>
    )
  );
};

export default Pokemon;
