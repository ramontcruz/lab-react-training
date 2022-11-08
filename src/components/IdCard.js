import './IdCard.css'
function IdCard({lastName, firstName, gender, height, birth, picture}){
    return (
        <div className='card'>
         <img src={picture} alt="profile picture"/>
         <div>
            <p><strong>First name: </strong>{firstName}</p>
            <p><strong>Last Name: </strong>{lastName}</p>
            <p><strong>Gender: </strong>{gender}</p>
            <p><strong>Height: </strong>{height}</p>
            <p><strong>Birth: </strong>{birth}</p>
         </div>
        </div>
    )
}

export default IdCard;