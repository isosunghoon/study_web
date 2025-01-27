import Topbar from './Topbar'
import Card from './Card'
import './main.css';
import { astroObj } from './data'
import { useState } from 'react';
import MessierCard from './MessierCard'
import './MessierMain.css'

function Container ({children}) {
  return (
    <div id='main'>
      {children}
    </div>
  )
}

const cards = astroObj.map((data) =>
  <Card key={data.id} {...data}/>
)

export default function App() {
  const [messierNumber, setmessierNumber] = useState(0);
  
  function handleInput(e) {
    e.preventDefault()
    setmessierNumber(parseInt(document.getElementById('messierNumber').value))
  }

  return (
    <>
        <Topbar/>
        {/* <Container>
          {cards}
        </Container> */}
        <div id='messierContainer'>
          <div className='search'>
            <label htmlFor='messierNumber'>Messier Number: M</label>
             <input onInput={handleInput} type='text'  autoComplete='off' name='messierNumber' id='messierNumber' placeholder='write messier number'/>
          </div>
          {(1<=messierNumber && messierNumber<=110)&&<MessierCard num={messierNumber}/>}
        </div>
    </>
  )
}