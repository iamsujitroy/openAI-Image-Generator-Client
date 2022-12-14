import React, { useState, useRef } from "react";
import "./Home.scss";
import axios from "axios";
var qs = require("qs");

export default function Home() {
  const descriptionRef = useRef("");
  const data = [
    {
      url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-eaSgmPzUBoxjSG8oH2luLJlG/user-9jqEFW3Oetlm5XhjowhoJNrq/img-fmEQGNF0gOcGZ0cKgKb5Pjbt.png?st=2022-12-13T06%3A14%3A16Z&se=2022-12-13T08%3A14%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-13T06%3A29%3A53Z&ske=2022-12-14T06%3A29%3A53Z&sks=b&skv=2021-08-06&sig=7lcubgAsk4eN7wfPc110H0z57FbZxKkpBrcZcYqkgWk%3D",
    },
    {
      url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-eaSgmPzUBoxjSG8oH2luLJlG/user-9jqEFW3Oetlm5XhjowhoJNrq/img-iFcTxRJIrSF90iPDGTPlhZmM.png?st=2022-12-13T06%3A14%3A16Z&se=2022-12-13T08%3A14%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-13T06%3A29%3A53Z&ske=2022-12-14T06%3A29%3A53Z&sks=b&skv=2021-08-06&sig=UYK/aIsAbJNVJriKVp40PYMUvJOa0AVC685%2B4lPGzAw%3D",
    },
    {
      url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-eaSgmPzUBoxjSG8oH2luLJlG/user-9jqEFW3Oetlm5XhjowhoJNrq/img-RLKRnluo8yMIrnm9lGA8w5At.png?st=2022-12-13T06%3A14%3A16Z&se=2022-12-13T08%3A14%3A16Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-13T06%3A29%3A53Z&ske=2022-12-14T06%3A29%3A53Z&sks=b&skv=2021-08-06&sig=J4Fe5VdKkbnX4bTpyO3unfRVrl3m2ebnC7V8/OyRpnM%3D",
    },
  ];
  const [images, setImages] = useState(data);
  async function fetchImageData(e) {
    e.preventDefault();
    const description = descriptionRef.current.value;
    var data = await {
      imageDescription: description,
      size: '"small"',
    };
    var config = await {
      method: "POST",
      url: "http://localhost:5000/generateImage",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="home_page">
      <form onSubmit={fetchImageData}>
        <input
          type="text"
          placeholder="Descript your imegination....."
          ref={descriptionRef}
        />
        <button type="submit">Create Image</button>
      </form>
      <div className="images">
        {images.map((image, index) => (
          <img src={image.url} key={index} alt="" />
        ))}
      </div>
    </div>
  );
}
