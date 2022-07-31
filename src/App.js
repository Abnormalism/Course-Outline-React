import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wrapper from "./Pages/Wrapper";
import SingleGoal from "./Pages/SingleGoal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SingleGoal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
