
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav style={{ backgroundColor: "#3DC4FC", padding:"1rem" }}>
      <NavLink to="/">
      <img src="https://cdn-icons-png.flaticon.com/512/3138/3138803.png" alt="home" width={30} />
      </NavLink>
    </nav>
  )
}

export default Nav;
