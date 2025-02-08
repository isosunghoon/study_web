import './main.css'
import Topbar from './Topbar'
import Content from './Content'
import { useState } from 'react';

export default function App() {
  const [section, setSection] = useState('main');
  return (
    <>
      <Topbar changeSection={(e)=>{setSection(e)}}/>
      <Content section={section}/>
    </>
  )
}