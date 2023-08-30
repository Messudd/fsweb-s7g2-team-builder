import "./../css/playerForm.css";

const Player = (props) => {
  const {
    player,
    setPlayer,
    initialData,
    setPlayerList,
    playerList,
    isUpdate,
  } = props;


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playerListUpdate(player.id);
    setPlayer(initialData);
  };

  const playerListUpdate = (val) => {
    if (playerList.length === 0) {
      setPlayerList([...playerList, player]);
    } else {
      if (playerList.filter((item) => item.id === val).length > 0) {
        alert(
          "This player is already in the list or id conflict , please check the id"
        );
      } else setPlayerList([...playerList, player]);
    }
  };

  const updateMethod = () => {
    const liste = [...playerList];
    const index = liste.map((item) => item.id).indexOf(player.id);
    liste.splice(index, 1);
    liste.splice(index, 0, player);
    setPlayerList([...liste]);
  };


  return (
    <div className="form">
      <h3>
        Player Add |<span>| Update</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="password"
            placeholder="enter an unique id"
            name="id"
            value={player.id}
            onChange={handleFormChange}
          />
        </label>
        {player.id.length < 10 && (
          <span style={{ color: "red", fontSize: "1rem" }}>min(10)</span>
        )}
        <label>
          <input
            type="text"
            name="name"
            value={player.name}
            placeholder="please enter name"
            onChange={handleFormChange}
          />
        </label>
        {player.name.length < 3 && (
          <span style={{ color: "red", fontSize: "1rem" }}>
            en az 3 karakter olmalı !
          </span>
        )}
        <label>
          <input
            type="text"
            name="role"
            value={player.role}
            placeholder="enter - role"
            onChange={handleFormChange}
          />
        </label>
        {player.role.length < 3 && (
          <span style={{ color: "red", fontSize: "1rem" }}>
            en az 3 karakter olmalı !
          </span>
        )}
        <label>
          <input
            type="email"
            name="email"
            value={player.email}
            placeholder="enter a player email"
            onChange={handleFormChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="phone"
            value={player.phone}
            placeholder="enter a player phone "
            onChange={handleFormChange}
          />
        </label>
        {player.phone.length < 11 && (
          <span style={{ color: "red", fontSize: "1rem" }}>en az 11 !</span>
        )}
        <div className="button_group">
          {isUpdate ? (
            <button type="button" onClick={updateMethod}>
              Update
            </button>
          ) : (
            <button
              disabled={
                player.id.length > 9 &&
                player.name.length > 2 &&
                player.phone.length > 10 &&
                player.role.length > 2
                  ? false
                  : true
              }
              type="submit"
            >
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Player;
