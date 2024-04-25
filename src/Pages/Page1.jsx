import React, { useState } from "react";
import axios from "axios";
import Card from "../Componet/Card";
import Page2 from "./Page2";

const Page1 = () => {
  const [cardData, setCardData] = useState({});

  const [id, setId] = useState(null);

  const fetchData = () => {
    axios
      .get(`https://child.onrender.com/api/sciencefiction`)
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          setCardData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useState(() => {
    fetchData();
  }, [cardData]);

  return (
    <>
      {
        id  ? (
        <Page2 id={id} cardData={cardData} setId={setId} />
      ) : (
        <section style={{ width: "100%" }}>
          {cardData && Object.keys(cardData).length
            ? cardData?.data.map((item, index) => (
                <div className="card" key={index}>
                  {<Card item={item} index={index} id={id} setId={setId} />}
                </div>
              ))
            : "Loading"}
        </section>
      )}
    </>
  );
};

export default Page1;
