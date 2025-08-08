import { Nav, Stack } from "react-bootstrap"
import {
  Search,
  Compass,
  Broadcast,
  HouseDoor,
  Heart,
} from "react-bootstrap-icons"

function Sidebar({ onNavigate, activeView }) {
  return (
    <Stack gap={2} className="p-3 sidebar bg-panel rounded-12 flex-grow-1">
      <div className="d-flex align-items-center mb-2 ps-3">
        <img src="/src/assets/logos/music.svg" height="21" alt="Apple Music" />
      </div>
      <Nav className="flex-column">
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
          active={activeView === "search"}
          onClick={(e) => {
            e.preventDefault()
            onNavigate && onNavigate("search")
          }}
        >
          <Search className="text-danger" /> Cerca
        </Nav.Link>
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
          active={activeView === "home"}
          onClick={(e) => {
            e.preventDefault()
            onNavigate && onNavigate("home")
          }}
        >
          <HouseDoor className="text-danger" /> Home
        </Nav.Link>
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
          active={activeView === "novita"}
          onClick={(e) => {
            e.preventDefault()
            onNavigate && onNavigate("novita")
          }}
        >
          <Compass className="text-danger" /> Novità
        </Nav.Link>
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
          active={activeView === "radio"}
          onClick={(e) => {
            e.preventDefault()
            onNavigate && onNavigate("radio")
          }}
        >
          <Broadcast className="text-danger" /> Radio
        </Nav.Link>
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
          active={activeView === "favorites"}
          onClick={(e) => {
            e.preventDefault()
            onNavigate && onNavigate("favorites")
          }}
        >
          <Heart className="text-danger" /> Preferiti
        </Nav.Link>
      </Nav>
    </Stack>
  )
}

export default Sidebar
