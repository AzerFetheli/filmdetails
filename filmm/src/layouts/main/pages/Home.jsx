import React from 'react'
import View from '../components/Navbar/section/View'
import Search from '../components/Search/Search'
import { useState, useEffect } from 'react';
import './Home.css'
import Cards from '../components/Cards/Cards';
import { getData } from '../../../Services/Film';


export default function Home() {
    const [data, setData] = useState([]);
    const [oldData, setoldData] = useState([])
    const [query, setQuery] = useState("");
    useEffect(() => {
      getData().then((res) => {
        setData(res);
        setoldData(res)
      });
    }, []);
    useEffect(() => {
      setData(
        oldData.filter((film) => {
          if (film.title.toLowerCase().includes(query.toLowerCase())) {
            return film;
          }
        })
      );
    }, [query]);
  
  return (
    <div>
        <View/>
        <Search setQuery={setQuery}/>
        <div className='Flex'>
        {data.map((film) => {
          return <Cards key={film.id} film={film} />;
        })}
        </div>
    </div>
  )
}
