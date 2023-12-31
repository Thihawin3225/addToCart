import React, { useContext } from 'react'
import BackdropItem from './BackdropItem'
import { ItemContext } from '../store/ItemContext'

const Backdrop = (props) => {
    const {items,totalAmount} = useContext(ItemContext);
    console.log(items)
  return (
    <>
    {
    props.showItem && (
            <section>
              <div className='backdrop'>
                  <section className='overflow-data'>
                  {
                    items.map((item)=> {
                        return(
                            <BackdropItem item = {item}/>
                        )
                    })
                  }
                  </section>
          <hr />
            <div className="btnCon">
                <p>Total is <span>$ {totalAmount}</span></p>
        
                <button className="btn" onClick={props.hideMenu}>close</button>
                <button className="btn">order</button>
            </div>
        </div>
        </section>
    )}
    </>
  )
}

export default Backdrop
