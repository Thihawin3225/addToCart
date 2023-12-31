import React from 'react'
import Main from './component/Main'
import ItemContextProvider from './store/ItemContext'

const App = () => {
  return (
    <>
     <ItemContextProvider>
      <Main/>
     </ItemContextProvider>
    </>
  )
}

export default App



