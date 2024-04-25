import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router";

const Card = ({ item, index, id, setId }) => {

  let color;

  let navigate = useNavigate();

  if (item.Status == "In Progress") {
    color = "Orange";
  } else if (item.Status === "Completed") {
    color = "Green";
  } else if (item.Status === "New") {
    color = "Blue";
  }

  const fetchId = (e) => {
    setId(item._id)
  }


    return (
        
    <section onClick={(e) => fetchId(e)} className="Card-section" value={item._id}>
      <div  className="card-div" value={item._id}>
        <img
          className="img-card"
          src={`https://ik.imagekit.io/dev24/${item?.Image}`}
        />
        <h3 className="card-title">{ item.Title ? item.Title : "" }</h3>
        <button style={{ color: `${color}` }} className="card-button">
          {item.Status}
        </button>
      </div>
    </section>
  );
};

export default Card;
