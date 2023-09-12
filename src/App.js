import {Route, Routes} from "react-router-dom"
import './App.css';
import AlertPage from "./Pages/AlertPage";
import BadgePage from "./Pages/BadgePage";
import CardPage from "./Pages/CardPage";
import HeadingPage from "./Pages/HeadingPage";
import ImagePage from "./Pages/ImagePage";
import TextPage from "./Pages/TextPage";
import ComponentPage from "./Pages/ComponentPage";
import AvatarPage from "./Pages/AvatarPage";
import ButtonPage from "./Pages/ButtonPage";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
       <Route path="/component" element={<ComponentPage/>}></Route>
       <Route path="/component/avatar" element={<AvatarPage/>}></Route>
       <Route path="/component/alert" element={<AlertPage/>}></Route>
       <Route path="/component/badge" element={<BadgePage/>}></Route>
       <Route path="/component/button" element={<ButtonPage/>}></Route>
       <Route path="/component/card" element={<CardPage/>}></Route>
       <Route path="/component/headings" element={<HeadingPage/>}></Route>
       <Route path="/component/image" element={<ImagePage/>}></Route>
       <Route path="/component/text" element={<TextPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
