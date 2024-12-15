import { useState } from "react";

export default function App() {
  const [profils, setProfils] = useState([
    { nom: "Alice", age: 25, profession: "Développeuse" },
    { nom: "Bob", age: 30, profession: "Designer" },
  ]);

  function AjouterProfil(profil) {
    const NouveauxProf = [...profils, profil];
    setProfils(NouveauxProf);
  }

  function DeleteProfile(index) {
    const NewProfile = profils.filter((_, i) => i !== index);
    setProfils(NewProfile);
  }

  return (
    <div>
      <ListeProfils DeleteProfile={DeleteProfile} profils={profils} />
      <FormList AjouterProfil={AjouterProfil} />
    </div>
  );
}

// -------------------------------------------------------
function FormList({ AjouterProfil }) {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    if (!nom || !age || !profession) return;
    const NewProfile = { nom, age, profession };

    AjouterProfil(NewProfile);

    setNom("");
    setAge("");
    setProfession("");
  }

  return (
    <form onSubmit={HandleSubmit}>
      <label>Nom:</label>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      <label>Age:</label>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
      />
      <label>profession:</label>
      <input
        type="text"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
// -----------------------------------------------------------------
function ListeProfils({ profils, DeleteProfile }) {
  return (
    <div className="cards-container">
      {profils.map((profil, i) => (
        <div>
          <CarteProfil profil={profil} key={i} />
          <Button onClick={() => DeleteProfile(i)}>Delete</Button>
        </div>
      ))}
    </div>
  );
}
// ---------------------------------------------------------------

function CarteProfil({ profil }) {
  function HandleAlert() {
    alert(`Vous avez selectionne:${profil.nom}`);
  }
  return (
    <div className="card">
      <img className="card-image" src="./game-over.avif" alt={profil.nom} />
      <div className="card-info">
        <p className="card-name">{profil.nom}</p>
        <p className="card-age">Age: {profil.age}</p>
        <p className="card-profession">Profession: {profil.profession}</p>
        <Button onClick={HandleAlert}>Voir plus</Button>
      </div>
    </div>
  );
}
// -----------------------------------------------------------------

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="card-button">
      {children}
    </button>
  );
}
