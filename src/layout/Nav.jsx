import React, { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'

const Nav = (props) => {
  const {items} = useContext(ItemContext);
  const cout = items.reduce((current,item)=> {
    return current+item.amount;
  },0)
  return (
    <div>
      <nav className='navContainer'>
        <h1>Shopping</h1>
        <div>
            <button className='btn' onClick={props.showMenu}>Card <span>({cout})</span></button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
