import React, { useState } from 'react';
import ShopContext from './shop-context'

const GlobalState = (props) => {
  const [activeItem, setActiveItem] = useState('likes')

  const handleActiveItem = item => {
    setActiveItem(item)
  }

  return(
    <ShopContext.Provider 
      value={{
        activeItem: activeItem,
        handleActiveItem: handleActiveItem
      }}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default GlobalState