import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Photo from "./components/photo";
import Copyright from "./components/copyright";

function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=BBGmOHzUEkWdQ5QcqWX6Wrakl7amVCaHu2EE7S7K"
      )
      .then((res) => {
        setPhoto(res.data);
      })
      .catch();
  }, []);
  return (
    <div className="App">
      <Photo
        photo={photo.url}
        title={photo.title}
        explanation={photo.explanation}
      />
      <Copyright copyright={photo.copyright} />
    </div>
  );
}

export default App;
