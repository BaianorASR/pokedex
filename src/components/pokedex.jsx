// import Api from '../helpers/api';
import React, { useState, useEffect } from 'react';
import Pokemon from './pokemon';
import axios from 'axios';
import '../styles/pokedex.css';
import Button from './button';

const Pokedex = () => {
  const [urls, setUrls] = useState([]);
  const [page, setPage] = useState(0);
  
  useEffect(async () => {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`;
    const response = await axios(baseUrl)
      .then(({ data: { results }}) => {
        return results.map((el) => el.url)
      }); 
    setUrls(response); 
  }, [page]);
 
  const handleNextPage = () => setPage(page + 20)
  const handlePrevPage = () => setPage(page - 20)

  return (
    <>
    <div className="buttons">
      {page !== 0 && <Button click={handlePrevPage} text='Prev'/> }
      <Button click={handleNextPage} text='Next'/>
    </div>
      <section className='pokedex'>
        {urls.map((url, index) => (
          <Pokemon key={index} url={url} />
        ))}
      </section>
    </>
  );
};

export default Pokedex;
