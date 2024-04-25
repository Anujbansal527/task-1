import axios from "axios";
import React, { useState } from "react";
import "./page2.css";
import Card from "../Componet/Card";

const Page2 = ({ id, cardData, setId }) => {
  const [onePost, setonePost] = useState({});

  let color;

  if (onePost.Status == "In Progress") {
    color = "Orange";
  } else if (onePost.Status === "Completed") {
    color = "Green";
  } else if (onePost.Status === "New") {
    color = "Blue";
  }


  const fetchData = () => {
    axios
      .get(`https://child.onrender.com/api/sciencefiction/${id}`)
      .then((data) => {
        console.log(data.data);
        if (data.status == 200) {
            setonePost(data.data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useState(() => {
    fetchData();
  }, []);

  console.log(onePost)
  return (
    <section className="page2-section">


    
      <div className="div-1">
      <h3 className="page2-card-title">{ onePost.Title ? onePost.Title : "" }</h3>
      <img
          className="page2-img-card"
          src={`https://ik.imagekit.io/dev24/${onePost?.Image}`}
        />
        <button style={{ color: `${color}` }} className="page2-button">
          {onePost.Status}
        </button>
      </div>



      <div className="div-2">
        {
          <section style={{ width: "100%" }}>
            {cardData && Object.keys(cardData).length
              ? cardData?.data.map((item, index) => (
                  <div className="card" key={index}>
                    {<Card item={item} index={index} id={id} setId={setId} />}
                  </div>
                ))
              : "Loading"}
          </section>
        }
      </div>
    </section>
  );
};

export default Page2;
