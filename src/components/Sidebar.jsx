import { Nav, Stack } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import {
  Search,
  Compass,
  Broadcast,
  HouseDoor,
  Heart,
} from "react-bootstrap-icons"

function Sidebar() {
  const location = useLocation()
  return (
    <Stack gap={2} className="p-3 sidebar bg-panel rounded-12 flex-grow-1">
      <div className="d-flex align-items-center mb-2 ps-3">
        <img src="/src/assets/logos/music.svg" height="21" alt="Apple Music" />
      </div>
      <Nav className="flex-column">
        <Nav.Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-white d-flex align-items-center gap-2"
        >
          <Search className="text-danger" /> Cerca
        </Nav.Link>
        <Nav.Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-white d-flex align-items-center gap-2"
        >
          <HouseDoor className="text-danger" /> Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className={`text-white d-flex align-items-center gap-2 ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <Compass className="text-danger" /> Novità
        </Nav.Link>
        <Nav.Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-white d-flex align-items-center gap-2"
        >
          <Broadcast className="text-danger" /> Radio
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/favorites"
          className={`text-white d-flex align-items-center gap-2 ${
            location.pathname === "/favorites" ? "active" : ""
          }`}
        >
          <Heart className="text-danger" /> Preferiti
        </Nav.Link>
      </Nav>
    </Stack>
  )
}

export default Sidebar
