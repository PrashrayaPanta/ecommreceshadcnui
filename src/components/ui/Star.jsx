import React from "react";

const Star = ({index, rating, setRating}) => {

    const handleClick = () => {
        setRating(index + 1);
    }

    console.log(rating);
    

  return (
    <div>
      <i className={`bx ${rating >= index + 1 ? "bxs-star":"bx-star"}  text-green-800 text-5xl` } onClick={handleClick} ></i>
    </div>
  );
};

export default Star;
