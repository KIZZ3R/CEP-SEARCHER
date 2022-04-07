import { FiSearch } from 'react-icons/fi'
import { useState } from "react";

import './style.css'
import './services/api'
import api from './services/api';

function App() {

  const[input, setInput]=useState('')
  const[cep, setCep] = useState({});

  async function handleSearch(){
    if(input === ""){
      alert("Preencha com algum CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data)
      setCep(response.data)
      setInput("")

    }catch{
      alert("ERRO");
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className = "title">CEP SEARCHER</h1>

      <div className = "containerInput">
        <input
          type="text"
          placeholder="Digite algum Cep..."
          value={input}
          onChange={(e)=>setInput(e.target.value)} 
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff"
          onClick={handleSearch}
          />
          
        </button>
          
      </div>


        {Object.keys(cep).length > 0 &&(
          <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Estado: {cep.uf}</span>

        </main>
        )}
        

    </div>
  );
}

export default App;
