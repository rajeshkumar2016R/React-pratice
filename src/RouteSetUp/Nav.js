import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Nav = () => {
  return (
    <div>
      <Link to="/">Home page</Link>
      <Link to="/about">About page</Link>
    </div>
  );
};


export default Nav;