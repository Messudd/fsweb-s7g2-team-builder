import { useEffect, useState } from "react";
import Player from "./components/playerForm";
import PlayerCard from "./components/playerCard";
import "./App.css";


const initialData = {
  id: "",
  name: "",
  role: "",
  email: "",
  phone: "",
};

function App() {
  const [player_, setPlayer] = useState({ ...initialData });
  const [playerList, setPlayerList] = useState([]);
  const [isUpdate , setIsUpdate] = useState(false);

  const playerDelete = (Id) => {
    const edit_data = [...playerList].filter((item) => item.id !== Id );
    setPlayerList(edit_data);
  }

const playerUpdate = (value) => {
  setIsUpdate(!isUpdate);
  setPlayer({id: value.id,
  name: value.name,
  role: value.role,
  email: value.email,
  phone: value.phone,});
}


  useEffect(() => {
    console.log("player-data : ", player_);
  }, [player_]);

  useEffect(() => {
    console.log("player-List : ", playerList);
  }, [playerList]);

  return (
    <>
      <header>
        <h2>
          Player<span>Dashboard</span>
        </h2>
      </header>
      <main>
        <section className="side-form">
          <Player
            player={player_}
            setPlayer={setPlayer}
            initialData={initialData}
            setPlayerList={setPlayerList}
            playerList={playerList}
            isUpdate = {isUpdate}
          ></Player>
        </section>
        <section className="side-list">
          <PlayerCard playerList = {playerList} playerDelete={playerDelete} playerUpdate= {playerUpdate}/>
        </section>
      </main>
    </>
  );
}

export default App;
