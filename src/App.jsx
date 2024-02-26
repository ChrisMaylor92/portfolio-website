import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './index.css'
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { MiniApps } from './components/MiniApps';
import { MiniGames } from './components/MiniGames';
import { Contact } from './components/Contact';

function App() {


  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>}/> 
          <Route path="/mini_apps" element={<MiniApps/>} />
          <Route path="/mini_games" element={<MiniGames/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/*" element={<Error message="Route not found."/>} />
      </Routes>
    </>
  )
}

export default App
