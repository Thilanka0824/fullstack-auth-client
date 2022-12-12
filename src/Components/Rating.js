import React, {useState} from "react";

const Rating = ({ item }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => {
        <span
          key={star}
          onClick={() => {
            handleRating(star);
          }}
          style={{ color: star <= rating ? "FFA41C" : "ccc" }}
        >
          ☆
        </span>;
      })}
    </div>
  );
};

export default Rating;

// import {v4 as uuidv4} from 'uuid'

// const Rating = ({handleAddCartItem, item}) => {
//   return (
//     <div className='rating'>
//         {[1,2,3,4,5].map((rate)=>{
//             {/* <h3>{item.}</h3>; */}
//         })}
//     </div>
//   )
// }

// Rating.defaultProps = {
//     color: "#FFA41C",
// }
