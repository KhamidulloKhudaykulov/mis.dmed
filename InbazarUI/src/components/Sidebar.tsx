import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div>
        <nav className="w-full h-12">
            <NavLink to={"/"}>Test</NavLink>
            <NavLink to={"/"}>Test</NavLink>
            <NavLink to={"/"}>Test</NavLink>
            <NavLink to={"/"}>Test</NavLink>
            <NavLink to={"/"}>Test</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar