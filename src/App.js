import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Pagenotfount from "./component/Pagenotfount";
import Loginoutput from "./component/Loginoutputpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<Pagenotfount />} />
          <Route path="login" element={<Loginoutput />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
