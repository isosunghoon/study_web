import { useState } from "react"
import { messierData } from "./assets/messierData"
import './messier.css'

function MessierContent({ messierNumber }) {
  function goodName(name) {
    return !(name.startsWith('NGC'))
  }
  const data = messierData["M"+messierNumber]
  return (<>
    <h1 className='MessierTitle'>{"M"+messierNumber} {goodName(data.name)&&data.name}</h1>
    <div className='MessierContentContainer'>
      <img src={data.image} className='MessierImg'/>
      <div>
        {data.NGC && <>NGC number: {data.NGC}<br/></>}
        type: {data.type}<br/>
        RA: {data.rightAscension} <br/>
        DEC: {data.declination} <br/>
        distance: {data.distance}<br/>
        size: {data.size}<br/>
        viewing season: {data.viewingSeason}<br/>
        viewing difficulty: {data.viewingDifficulty}
      </div>
    </div>
  </>)
}

function NoMessier({messierNumber}) {
  return <div className="MessierError">M{messierNumber} is not a valid Messier object!</div>
}

export default function Messier() {
  const [messierNumber,setMessierNumber] = useState('31')
  function handleChange(e) {
    setMessierNumber(e.target.value)
  }
  function isValid(str) {
    if(!(Number.isInteger(Number(str)) && str.trim() !== "")) return false
    const num = parseInt(str)
    return 0<num && num<111
  }
  return (
    <div className="Messier">
      <div className="MessierForm">
        <label htmlFor='messierNumber'>M</label>
        <input type="text" name='messierNumber' autoComplete='off' placeholder="31" onChange={handleChange}/>
      </div>
      <div className='MessierContainer'>
        {isValid(messierNumber)?<MessierContent messierNumber={messierNumber}/>:<NoMessier messierNumber={messierNumber}/>}
      </div>
    </div>
  )
}