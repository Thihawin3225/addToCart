import React from 'react'

const BackdropItem = ({item}) => {
    const {name,price,amount} = item;
   
  return (
    <div>
      <div className="card">
            <h3>{name}</h3>
            <p>$ {price}</p>
            <p>X <span>{amount}</span></p>
            <div>
                <button className='btn'>+</button>
                <button className='btn'>-</button>
            </div>

        </div>

    </div>
  )
}

export default BackdropItem
