import React, { useEffect, useState } from "react"
import ScrollPosition from "../specail/ScrollPosition"
import feedsList from "../component/ItemData"
import { Link } from "react-router-dom"

const MdPick = () => {
   const [randomItems, setRandomItems] = useState([])

   useEffect(() => {
      const shuffledItems = feedsList
         .sort(() => Math.random() - 0.5)
         .slice(0, 3)
      setRandomItems(shuffledItems)
   }, [])

   const addCommasToNumber = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
   }

   const scrollPosition = ScrollPosition()
   let targetHeight
   const windowWidth = window.innerWidth
   const windoHeight = window.innerHeight

   const additionalClass = windoHeight > windowWidth ? "newClass" : ""

   if (windowWidth >= 1200) {
      targetHeight = 150
   } else if (windowWidth >= 768) {
      targetHeight = 100
   } else if (windowWidth >= 468) {
      targetHeight = 30
   } else {
      targetHeight = 10
   }
   return (
      <div>
         <div className='mdPick'>
            <h1>MD PICK</h1>
            <div
               className={`mdList ${
                  scrollPosition >= targetHeight ? "originPosition" : ""
               } ${additionalClass}`}
            >
               <ul>
                  {randomItems.map((item) => (
                     <Link to={`/detail/${item.id}`} key={item.id}>
                        <li>
                           <div className='md-img'>
                              <img src={item.img} alt={item.title} />
                              <span className='bg'>{item.maindes}</span>
                              </div>
                              <div className='md-t-wrap'>
                                 <span className='md-name'>{item.title}</span>
                                 <div className='md-titlebox'>
                                    <span className='md-price'>
                                       {addCommasToNumber(item.price)}
                                    </span>
                                    <span className='md-brand'>
                                       {item.brand}
                                    </span>
                                 </div>
                              </div>
                          
                        </li>
                     </Link>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default MdPick
