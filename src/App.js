import './App.css';

function App() {
  return (
    <div className="App">
      <div className='groceryCard'>
        <h1>My Grocery list</h1>
        <ul>
          <div className='liBlock'>
            <li>16 oz 90% lean ground beef, Lean  </li> <input type="text" className='listInput' />
          </div>
          <div className='liBlock'>
            <li>1/2 cup Onion</li><input type="text" className='listInput' />
          </div>
          <div className='liBlock'>
            <li>1 Egg, Large</li><input type="text" className='listInput' />
          </div>
          <div className='liBlock'>
            <li>1/2 cup Catsup</li><input type="text" className='listInput' />
          </div>
          <div className='liBlock'>
          <li>1/2 tsp Pepper, Ground</li><input type="text" className='listInput' />
          </div>
          <div className='liBlock'>
            <li>1/2 tsp Salt</li><input type="text" className='listInput' />
          </div>
        </ul>
        <button>Compute</button>
        <p>Total Price: </p>
      </div>
    </div>
  );
}

export default App;
