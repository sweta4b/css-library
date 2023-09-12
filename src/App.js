import {Route, Routes} from "react-router-dom"
import './App.css';
import AlertPage from "./Documentation/AlertPage";
import BadgePage from "./Documentation/BadgePage";
import CardPage from "./Documentation/CardPage";
import HeadingPage from "./Documentation/HeadingPage";
import ImagePage from "./Documentation/ImagePage";
import TextPage from "./Documentation/TextPage";
import ComponentPage from "./Pages/ComponentPage";
import AvatarPage from "./Documentation/AvatarPage";
import ButtonPage from "./Documentation/ButtonPage";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
       <Route path="/component" element={<ComponentPage/>}></Route>
       <Route path="/avatar" element={<AvatarPage/>}></Route>
       <Route path="/alert" element={<AlertPage/>}></Route>
       <Route path="/badge" element={<BadgePage/>}></Route>
       <Route path="/button" element={<ButtonPage/>}></Route>
       <Route path="/card" element={<CardPage/>}></Route>
       <Route path="/headings" element={<HeadingPage/>}></Route>
       <Route path="/image" element={<ImagePage/>}></Route>
       <Route path="/text" element={<TextPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
