import React, { useState } from 'react'
import './Pagination.css'
function Pagination(props) {
  // console.log(props)
  let pageNumbers = []
  const [itemsPerPage, setItemsPerPage] = useState('2');
 
  for (let i = 1; i < Math.ceil(props.data.length / itemsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }


  return (
    <div className='pagination'>
      <span style={{ 'float': 'left', 'color': 'black' }}>Items Per page :</span>
        <select  onChange={(e) =>{setItemsPerPage(e.target.value);props.ItemsPerPage(e.target.value)}}  value={itemsPerPage} style={{'width':'40px','height':'25px','float': 'left','padding':'-1px 20p !important','margin':'none !important'}}>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      {pageNumbers.map((page, index) => <div key={index} className='pagebutton'><button onClick={() => props.PageHandler(page,itemsPerPage)}>{page}</button></div>)}
    </div>
  )
}

export default Pagination