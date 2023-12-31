import React, { useState } from 'react'
import Nav from '../layout/Nav'
import Card from '../layout/Card'
import Backdrop from '../layout/Backdrop'


const Main = () => {
  const [showItem,setShowItem] = useState(false);

  const showMenu = ()=> {
    setShowItem(true)
  }
  const hideMenu = ()=> {
    setShowItem(false)
  }
  return (
    <div>
      <Nav showMenu = {showMenu}/>
      <Card/>
      <Backdrop showItem={showItem} hideMenu={hideMenu}/>
    </div>
  )
}

export default Main
