
import React, { useState } from "react";
import data from "./data"
import Tours from "./components/Tours";


const App = () => {

  const [tours, setTours] = useState(data)

  return(
    <div>
       <Tours tours={tours}/>
    </div>
  )
};

export default App;
