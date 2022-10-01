import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addTopping, toggleGluten, resetTopping } from './pizzaSlice';
import './App.css'

function App() {
  const pizza = useSelector(state => state.pizza);
  const dispatch = useDispatch();

  return (
    <>
      <h1>pizza</h1>
      {pizza.toppings.map((topping, index) => (
        <div key={index}>{topping}</div>
      ))}
      <ul>
        <li style={{border:'solid 10px green', borderRadius:'20px'}}>
          <h3> Glutten is: {pizza.glutten ? 'on' : 'off'}<br /></h3>
        </li>
      </ul>



      <button onClick={() => dispatch(addTopping('Berry'))}>Add Berry</button>
      <button onClick={() => dispatch(addTopping('Cheese'))}>Add Cheese</button>
      <button onClick={() => dispatch(addTopping('Pineapple'))}>Add Pineapple</button>
      <button onClick={() => dispatch(addTopping('Pepperoni'))}>Add Pepperoni</button>
      <button onClick={() => dispatch(toggleGluten())}>Add Gluten</button>
      <button onClick={() => dispatch(resetTopping())} style={{color:'red', fontWeight:'bolder', backgroundColor:'black'}}>resetToppings</button>
    </>

  )
}

export default App
