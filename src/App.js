import {Route, Routes} from "react-router-dom"
import './App.css';
import Alert from "./Pages/Alert";
import BadgePage from "./Pages/BadgePage";
import Card from "./Pages/Card";
import Heading from "./Pages/Heading";
import Image from "./Pages/Image";
import Text from "./Pages/Text";
import Home from "./Pages/Home";
import AvatarPage from "./Pages/AvatarPage";
import ButtonPage from "./Pages/ButtonPage";


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/home" element={<Home/>}></Route>
       <Route path="/avatar" element={<AvatarPage/>}></Route>
       <Route path="/alert" element={<Alert/>}></Route>
       <Route path="/badge" element={<BadgePage/>}></Route>
       <Route path="/button" element={<ButtonPage/>}></Route>
       <Route path="/card" element={<Card/>}></Route>
       <Route path="/headings" element={<Heading/>}></Route>
       <Route path="/image" element={<Image/>}></Route>
       <Route path="/text" element={<Text/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
