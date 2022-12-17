import React, { useState, useRef } from "react";
import "./Home.scss";
import axios from "axios";
var qs = require("qs");

export default function Home() {
  const descriptionRef = useRef("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  async function fetchImageData(e) {
    setIsLoading(true)
    e.preventDefault();
    const description = descriptionRef.current.value;
    var data = await {
      imageDescription: description,
      size: '"small"',
    };
    var config = await {
      method: "POST",
      url: "https://openai-api.cyclic.app/generateImage",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    };

    axios(config)
      .then(function (response) {
        setImages(response.data.data);
        setIsLoading(false)
      })
      .catch(function (error) {
        console.log("this is error");
        console.log(error);
      });
  }
  return (
    <>
      <div className="home_page">
        <form onSubmit={fetchImageData}>
          <input
            type="text"
            placeholder="Descript your imegination....."
            ref={descriptionRef}
          />
          <button type="submit">Create Image</button>
        </form>
        {isLoading ? <div className="loading">
          <img src="/loading.gif" alt="" />
        </div>: <div className="images">
          {images.map((image, index) => (
            <img src={image.url} key={index} alt="" />
          ))}
        </div>}
        
      </div>
    </>
  );
}
