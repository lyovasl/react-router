import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RoutesBook from "./RoutesBook";
import "./style.css";

const App = () => {
  const location = useLocation();
  console.log(location, "=+");
  return (
    <>
      {/* //ToDo Navlink */}

      {/* <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "green" } : {};
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav> */}
      {/* //ToDo Navlink */}

      {/* <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">
              Books
            </NavLink>
          </li>
        </ul>
      </nav> */}

      {/* //* Link  */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {/* //* Link */}
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<RoutesBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
