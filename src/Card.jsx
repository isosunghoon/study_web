import './Card.css';

export default function Card({name, type, imgUrl, num = "None", filmed}) {
    function handleClick() {
        alert(name)
    }

    return (
        <div className="card" style={filmed?{background:'#aaffaa'}:{background:'#ffaaaa'}} onClick={handleClick}>
            <h1 className='cardTitle'>{name}</h1>
            <div className='cardContentContainer'>
                <img src={imgUrl} className="astroImg"/>
                <div className='cardContent'>
                    type: {type} <br/>
                    Messier number: {num} <br/>
                    {filmed ? "Filmed!" : "Not filmed!"}
                </div>
            </div>
        </div>
    )
}