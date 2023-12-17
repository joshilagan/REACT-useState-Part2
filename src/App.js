import './App.css';
import { useState } from 'react';


function App() {
    const [item1, setItem1] = useState(0);
    const [item2, setItem2] = useState(0);
    const [item3, setItem3] = useState(0);
    const [item4, setItem4] = useState(0);
    const [item5, setItem5] = useState(0);
    const [item6, setItem6] = useState(0);
    const [total, setTotal] = useState(0)
    

    const handleItem1Change = (item) => {
      setItem1(item.target.value)

    }
    const handleItem2Change = (item) => {
      setItem2(item.target.value)
    }
    const handleItem3Change = (item) => {
      setItem3(item.target.value)
    }
    const handleItem4Change = (item) => {
      setItem4(item.target.value)
    }
    const handleItem5Change = (item) => {
      setItem5(item.target.value)
    }
    const handleItem6Change = (item) => {
      setItem6(item.target.value)
    }

  return (
    <div className="App">
      <div className='groceryCard'>
        <h1>My Grocery list</h1>
        <ul>
          <div className='liBlock'>
            <li>16 oz 90% lean ground beef, Lean  </li> <input type="text" className='listInput' onChange={handleItem1Change}/>
          </div>
          <div className='liBlock'>
            <li>1/2 cup Onion</li><input type="text" className='listInput' onChange={handleItem2Change}/>
          </div>
          <div className='liBlock'>
            <li>1 Egg, Large</li><input type="text" className='listInput' onChange={handleItem3Change} />
          </div>
          <div className='liBlock'>
            <li>1/2 cup Catsup</li><input type="text" className='listInput' onChange={handleItem4Change}/>
          </div>
          <div className='liBlock'>
          <li>1/2 tsp Pepper, Ground</li><input type="text" className='listInput' onChange={handleItem5Change}/>
          </div>
          <div className='liBlock'>
            <li>1/2 tsp Salt</li><input type="text" className='listInput' onChange={handleItem6Change}/>
          </div>
        </ul>
        <button onClick={() => {
          setTotal(parseFloat(item1) + parseFloat(item2) + parseFloat(item3) + parseFloat(item4) + parseFloat(item5) + parseFloat(item6))
        }}>Compute</button>
        <div className='priceBlock'>
          <p>Total Price: </p> <p className='total'>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
