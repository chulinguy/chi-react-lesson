import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/react-magic">React Magic</Link>

      <Link to="/react-rerendering">React Rerendering</Link>

      <Link to="/react-ref">React Ref</Link>

      <Link to="/eslint">Eslint</Link>

      <Link to="/readability">Readability Examples</Link>

      <Link to="/performance">Performance</Link>
    </header>
  );
};

export default Header;
