import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [image, setImage] = useState()
  const [brightness, setBrightness] = useState();
  const [contrast, setContrast] = useState();
  const [saturate, setSaturate] = useState();
  const [sepia, setSepia] = useState();
  const [grayscale, setGrayscale] = useState(false);
  const [hue, setHue] = useState(false);
  const [invert, setInvert] = useState(false);


  const addImage = e => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const removeImage = () => {
    var choice = window.confirm("Are you sure?");
    if (choice === true) {
        setImage(null)
    }
  }
  return (
    <div className="App">
      <header>
        <h1 className="logo">Photo Editor</h1>
      </header>
      <main className="main">
        <div className="controller">
          <h3 className="controller-head">Controller</h3>
          <div className="controller-container">
            <p className="name">Brightness</p>
            <div className="input-container">
              <input type="range" name="" id="" className="inp" />
              <label htmlFor="">100</label>
            </div>
            <p className="name">Contrast</p>
            <div className="input-container">
              <input type="range" name="" id="" className="inp" />
              <label htmlFor="">100</label>
            </div>
            <p className="name">Saturate</p>
            <div className="input-container">
              <input type="range" name="" id="" className="inp" />
              <label htmlFor="">100</label>
            </div>
            <p className="name">Sepia</p>
            <div className="input-container">
              <input type="range" name="" id="" className="inp" />
              <label htmlFor="">100</label>
            </div>
            <p className="name">Blur</p>
            <div className="input-container">
              <input type="range" name="" id="" className="inp" />
              <label htmlFor="">100</label>
            </div>
            <div className="btns">
              <button className="control-btn">Grayscale</button>
              <button className="control-btn">Hue-Invert</button>
              <button className="control-btn">Invert</button>
              <button className="export">Export</button>
            </div>
          </div>
        </div>
        <div className="canvas">
          {/* <div className="close">+</div> */}
          {image ? (<button className="close" onClick={removeImage}>+</button>) : null}
          {image ? (<img src={image} className="image" alt="" />): (<input type="file" id="file" accept="image/*" onChange={addImage} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
