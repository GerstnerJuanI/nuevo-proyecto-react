import { useState } from 'react';
import './App.css';

function App() {
  const [linea1,setLinea1] = useState();
  const [linea2,setLinea2] = useState();
  const [imagen, setImagen] = useState();

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  }


  return (
    <div className="App">
      {/* --select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value="Casa en llamas"  >Casa en llamas</option>
        <option value="Futurama">Futurama</option>
        <option value="History channel">History channel</option>
        <option value="Matrix">Matrix</option>
        <option value="Philosoraptor">Philosoraptor</option>
        <option value="Smart Guy">Smart Guy</option>
      </select><br />
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" /> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /> <br />
      <button>Exportar</button>
      <div>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
