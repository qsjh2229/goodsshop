import React from "react"
import ScrollPosition from "../specail/ScrollPosition"
import ItemData from "../component/ItemData"
import { Link } from "react-router-dom"
const IntBrand = () => {
   const scrollPosition = ScrollPosition()
   let targetHeight
   const windowWidth = window.innerWidth

   if (windowWidth >= 1400) {
      targetHeight = 1100
   } else if (windowWidth >= 1200) {
      targetHeight = 850
   } else if (windowWidth >= 768) {
      targetHeight = 500
   } else if (windowWidth >= 468) {
      targetHeight = 400
   } else {
      targetHeight = 200
   }
   const filteredItems = ItemData.filter((item) => item.brand.includes("LOUIS"))

   return (
      <div div className='int-brand'>
         <h1 className='trend-title'>TRENDY BRAND</h1>
         <div
            className={`brand-wrap ${
               scrollPosition >= targetHeight ? "originPosition" : ""
            } `}
         >
            <Link to={`/detail/${filteredItems[0].id}`}>
               <div className='brand-main'>
                  <div className='bmain'>
                     <img src={filteredItems[0].img} alt='루이스 폴센' />
                  </div>
                  <div className='main-txt'>
                     <span className='m-brand'> {filteredItems[0].brand} </span>
                     <span className='m-title'>{filteredItems[0].title}</span>
                     <span className='m-des'>{filteredItems[0].maindes}</span>
                  </div>
               </div>
            </Link>
            <div className='brand-side'>
               {filteredItems
                  .map((item, idx) => {
                     return (
                        <Link to={`/detail/${item.id}`}>
                           <div className='small-item'>
                              <div className='s-img'>
                                 <img src={item.img} alt='루이스 폴센' />
                              </div>
                              <div className='s-textbox'>
                                 <span className='brand'>{item.brand} </span>
                                 <span className='s-title'>{item.title} </span>
                                 <span className='s-des'>{item.maindes} </span>
                              </div>
                           </div>
                        </Link>
                     )
                  })
                  .slice(1, 4)}
            </div>
         </div>
      </div>
   )
}

export default IntBrand
