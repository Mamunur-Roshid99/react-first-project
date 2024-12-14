// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card';
import Card_Data from "./card_detalis.json"

function App() {

  return (
    <>
      <h1 className="heading">BD Store</h1>
      {
        Card_Data.map((item, index)=> <Card key={index} img={item.img} textTile={item.title} price={item.price} textDesc={item.desc} />)
      }
    </>
  );
}

export default App
