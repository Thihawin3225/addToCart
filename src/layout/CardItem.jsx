import React, { useContext, useState } from 'react'
import { ItemContext } from '../store/ItemContext';

const CardItem = ({fruit}) => {
    const {id,name,price}= fruit;
    const { addItem } = useContext(ItemContext);
    const [quantity, setQuantity] = useState(1);
    const shotData = ()=> {
      addItem({
        id,
        name,
        price,
        amount : quantity
      })
    }
   
  return (
    <div>
      <div>
        <div className="card" key={id}>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <input
          type="number"
          max={5}
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
            <div>
            <button className='btn' onClick={shotData}>+add</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
