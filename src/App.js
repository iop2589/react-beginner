import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-beginner/movie/:id" element={<Detail />}>
        </Route>
        <Route path="/react-beginner" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
