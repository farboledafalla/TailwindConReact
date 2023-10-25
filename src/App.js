import './App.css';

function App() {
  return (
    <div className="App">
      <span className='bg-red-500 font-bold'>Hola Mundo</span>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className='flex flex-col items-center justify-center md:flex-row'>
      <div className='mx-2 bg-green-500'>Elemento 1</div>
      <div className='mx-2 bg-blue-500'>Elemento 2</div>
      <div className='mx-2 bg-red-500'>Elemento 3</div>
      <div className='mx-2 bg-purple-500'>Elemento 4</div>
      <button className='boton'>Haz click aquí</button>
    </div>
    </div>
  );
}

export default App;