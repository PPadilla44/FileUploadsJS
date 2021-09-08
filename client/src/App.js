import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';


function App() {

  const [ item, setItem ] = useState( { title: '', image: '' } );
  const [ items, setItems ] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8000/`,item)
      .then(res => setItems([...items, res.data]))
      .catch(err => console.log(err))
  }

  useEffect(() => {

    axios.get(`http://localhost:8000/`)
      .then(res => {
        console.log("GOOD");
        setItems(res.data)
      })
      .catch(err => console.log(err))

  },[])

  return (
    <div className="App">
      <pre>{JSON.stringify(item,null, '\t') }</pre>
      <form onSubmit={onSubmitHandler}>
        <input type="text"
        className="input-field"
        onChange={(e) => setItem( { ...item, title: e.target.value } )} 
        />
        <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right=align">
          <input type="submit" className="btn" value="Submit"/>
        </div>
      </form>
      {
        items.map((item, i) => {
          return(
          <div className="card" key={i}>
            <div className="cardimage waves-effect waves-block waves-light">
              <img className="activator" style={{ width: "100px", height: "100px" }} src={item.image} alt="placeholer" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken text-darken-4">{item.title}</span>
            </div>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
