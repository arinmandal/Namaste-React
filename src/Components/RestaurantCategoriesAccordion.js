import React from 'react'
import { Itemlist } from './ItemsList'
import { useState } from 'react'
const RestaurantCategoriesAccordion = ({ data, showItems,setShowIndex }) => {
  // console.log(data)

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  }
  const { title
    , itemCards
  } = data.card.card;
  // console.log(itemCards)
  return (
    <div className='my-4 mx-auto shadow-lg '>
      {/* { Accordion header} */}
      {/* Accordion body */}
      <div className='accordion'>
        <div className='Accordion_Header flex justify-between px-9  py-4 cursor-pointer ' onClick={handleClick}>
          <span className='font-bold tracking-wide'>{title}({itemCards.length})</span>
          <span>🔽</span>
        </div>
        {showItems && <Itemlist items={itemCards} />}
      </div>
    </div>
  )
}


export default RestaurantCategoriesAccordion