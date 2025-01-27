import { messier } from './data'
import './MessierCard.css'

function goodName(name) {
    return !(name.startsWith('NGC'))
}

export default function MessierCard({num}) {
    const data = messier["M"+num]
    return (
        <div className='MessierCard'>
            <h1 className='MessierCardTitle'>{"M"+num} {goodName(data.name)&&data.name}</h1>
            <div className='MessierCardContainer'>
                <img src={data.image} className='MessierCardImg'/>
                <div>
                    NGC number: {data.NGC}<br/>
                    type: {data.type}<br/>
                    RA: {data.rightAscension} <br/>
                    DEC: {data.declination} <br/>
                    distance: {data.distance}<br/>
                    size: {data.size}<br/>
                    viewing season: {data.viewingSeason}<br/>
                    viewing difficulty: {data.viewingDifficulty}
                </div>
            </div>
        </div>
    )
}