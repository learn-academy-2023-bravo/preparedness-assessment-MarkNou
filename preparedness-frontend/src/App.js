import React from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setForm({
      name: "",
    });
  };

  

  return (
    <body>
    <div className="entire-content">
      <h1 className="heading">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label className="label" for="name">Enter your name</Label>
          <Input className="input" name="name" onChange={handleChange} value={form.name} />
        </div>
        <div className="buttons">
        <ModalComponent form = { form.name } />
        <Button className="button" style={{ backgroundColor: '#0dcaf0' }} onClick={reset} name="reset button">
          Reset
        </Button>
        </div>
        
      </div>
    </div>
    </body>
  );
};

export default App;
