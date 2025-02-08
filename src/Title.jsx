import './title.css'
import profilePic from './assets/penguin.png'

export default function Title() {
    return (
        <div className='title'>
            <img className='profilePic' src={profilePic}/>
            <div className='introduce'>
                Hello😋<br/>
                I am Sunghoon Kim!<br/>
                I will change the world...
            </div>
        </div>
    )
  }