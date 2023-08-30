import './../css/player-card.css';

const PlayerCard = ({playerList,playerDelete,playerUpdate})  => {

  return (
    <> 
        {
            playerList.map ((item) => (
                <div key={item.id} className='card-player'>
                <p>ID :<span>{item.id}</span></p>
                <p>NAME :<span>{item.name}</span></p>
                <p>ROLE :<span>{item.role}</span></p>
                <p>EMAİL :<span>{item.email}</span></p>
                <p>PHONE :<span>{item.phone}</span></p>
                <div className="buttons">
                    <button onClick={() => playerDelete(item.id)}>Delete</button>
                    <button onClick={() => playerUpdate(item)}>Add - Update</button>
                </div>
            </div>
            ))
        }
    </>
  
  )
}

export default PlayerCard;