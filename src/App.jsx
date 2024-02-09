import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Output from "./components/Output";

function App() {
  const [data, setData] = useState(undefined);

  return (
    <div className="App container">
      <Header />
      <Form setData={setData} data={data} />
      {data?.bmi && <Output data={data}/>}
    </div>
  );
}

export default App;
