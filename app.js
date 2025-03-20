import React, { useState } from "react";
import "./App.css";

const images = [
  { id: 1, name: "Butterfly Card", src: "butterfly.jpg", code: "<img src='butterfly.jpg' alt='Butterfly Card' />" },
  { id: 2, name: "Flower Card", src: "flower.jpg", code: "<img src='flower.jpg' alt='Flower Card' />" },
  { id: 3, name: "Mountain Card", src: "mountain.jpg", code: "<img src='mountain.jpg' alt='Mountain Card' />" },
  { id: 4, name: "Ocean Card", src: "ocean.jpg", code: "<img src='ocean.jpg' alt='Ocean Card' />" },
];

function App() {
  const [droppedCode, setDroppedCode] = useState("");

  const handleDragStart = (event, code) => {
    event.dataTransfer.setData("text/plain", code);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const code = event.dataTransfer.getData("text/plain");
    setDroppedCode(code);
  };

  return (
    <div className="container">
      <h1>Enhanced Drag & Drop</h1>
      <div className="columns">
        <div className="column" id="select-card">
          <h2>Select a Card</h2>
          {images.map((img) => (
            <div
              key={img.id}
              className="card"
              draggable
              onDragStart={(event) => handleDragStart(event, img.code)}
            >
              <img src={img.src} alt={img.name} />
              <p>{img.name}</p>
            </div>
          ))}
        </div>
        <div className="column" id="drag-card" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
          <h2>Drag a Card</h2>
          <p>Drop here to generate code.</p>
        </div>
        <div className="column" id="download-code">
          <h2>Download Code</h2>
          <pre>{droppedCode}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
