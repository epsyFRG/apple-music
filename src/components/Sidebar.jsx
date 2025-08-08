import { Nav, Stack } from "react-bootstrap"
import { Search, House, Compass, Broadcast } from "react-bootstrap-icons"
import Logo from "./Logo"

function Sidebar() {
  return (
    <Stack gap={2} className="p-3 sidebar bg-panel rounded-12 flex-grow-1">
      <div className="d-flex align-items-center mb-2">
        <img
          src="/src/assets/logos/music.svg"
          height="20px"
          alt="Apple Music"
        />
      </div>
      <Nav className="flex-column">
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
        >
          <Search className="text-danger" /> Cerca
        </Nav.Link>
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
        >
          <House className="text-danger" /> Home
        </Nav.Link>
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
        >
          <Compass className="text-danger" /> Novità
        </Nav.Link>
        <Nav.Link
          className="text-white d-flex align-items-center gap-2"
          href="#"
        >
          <Broadcast className="text-danger" /> Radio
        </Nav.Link>
      </Nav>
    </Stack>
  )
}

export default Sidebar
