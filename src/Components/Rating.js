import React from 'react'
import {v4 as uuidv4} from 'uuid'

const Rating = ({handleAddCartItem, item}) => {
  return (
    <div className='rating'>
        {[1,2,3,4,5].map((rate)=>{
            {/* <h3>{item.}</h3>; */}
        })}
    </div>
  )
}

Rating.defaultProps = {
    color: "#FFA41C",
}

export default Rating