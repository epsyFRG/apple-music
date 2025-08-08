import {
  Navbar,
  Container,
  Form,
  Button,
  InputGroup,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap"
import {
  List,
  ChevronLeft,
  ChevronRight,
  PlayFill,
  Search,
  SkipForwardFill,
  SkipBackwardFill,
  Apple,
  Shuffle,
  Repeat,
  PersonFill,
  VolumeDownFill,
  VolumeUpFill,
  HouseDoor,
  Compass,
  Broadcast,
  Heart,
} from "react-bootstrap-icons"
import Logo from "./Logo"
import ElasticSlider from "./ElasticSlider"
import { useState } from "react"

function Topbar({ onNavigate, activeView }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <Navbar
      className="bg-panel topbar rounded-12 mt-2 px-2"
      expand="md"
      variant="dark"
    >
      <Container fluid>
        {/* Mobile */}
        <div className="d-flex d-md-none align-items-center justify-content-between w-100">
          <Dropdown show={showMobileMenu} onToggle={setShowMobileMenu}>
            <Dropdown.Toggle as={Button} variant="transparent" className="p-0">
              <List size={18} className="text-danger" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="mobile-dropdown bg-panel border-0 rounded-12">
              <Dropdown.Item
                className="text-white d-flex align-items-center gap-2"
                active={activeView === "search"}
                onClick={() => {
                  onNavigate && onNavigate("search")
                  setShowMobileMenu(false)
                }}
              >
                <Search className="text-danger" /> Cerca
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white d-flex align-items-center gap-2"
                active={activeView === "home"}
                onClick={() => {
                  onNavigate && onNavigate("home")
                  setShowMobileMenu(false)
                }}
              >
                <HouseDoor className="text-danger" /> Home
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white d-flex align-items-center gap-2"
                active={activeView === "novita"}
                onClick={() => {
                  onNavigate && onNavigate("novita")
                  setShowMobileMenu(false)
                }}
              >
                <Compass className="text-danger" /> Novità
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white d-flex align-items-center gap-2"
                active={activeView === "radio"}
                onClick={() => {
                  onNavigate && onNavigate("radio")
                  setShowMobileMenu(false)
                }}
              >
                <Broadcast className="text-danger" /> Radio
              </Dropdown.Item>
              <Dropdown.Item
                className="text-white d-flex align-items-center gap-2"
                active={activeView === "favorites"}
                onClick={() => {
                  onNavigate && onNavigate("favorites")
                  setShowMobileMenu(false)
                }}
              >
                <Heart className="text-danger" /> Preferiti
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Logo size={20} className="text-white" />
          <Button variant="trasnparent" className="text-danger" size="sm">
            Accedi
          </Button>
        </div>

        {/* Desktop */}
        <div className="d-none d-md-flex align-items-center w-100 gap-3">
          <ButtonGroup className="ms-3">
            <Button
              aria-label="Brano Precedente"
              variant="link"
              className="btn-icon text-secondary"
            >
              <Shuffle />
            </Button>
            <Button
              aria-label="Brano Precedente"
              variant="link"
              className="btn-icon text-secondary"
            >
              <SkipBackwardFill />
            </Button>
            <Button
              aria-label="Play"
              variant="link"
              className="btn-icon text-secondary"
            >
              <PlayFill />
            </Button>
            <Button
              aria-label="Brano successivo"
              variant="link"
              className="btn-icon text-secondary"
            >
              <SkipForwardFill />
            </Button>
            <Button
              aria-label="Brano Precedente"
              variant="link"
              className="btn-icon text-secondary"
            >
              <Repeat />
            </Button>
          </ButtonGroup>

          <Form
            role="search"
            className="mx-auto"
            style={{ maxWidth: 520, width: "100%" }}
          >
            <div className="position-relative">
              <Apple className="position-absolute top-50 start-50 translate-middle text-secondary" />
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="bg-dark text-white border-0 text-center"
                aria-label="Cerca"
              />
            </div>
          </Form>
          <ElasticSlider
            leftIcon={<VolumeDownFill />}
            rightIcon={<VolumeUpFill />}
            startingValue={500}
            defaultValue={750}
            maxValue={1000}
            isStepped
            stepSize={10}
            showValue={false}
          />
          <Button variant="danger" size="sm" className="ms-auto">
            <PersonFill width="20px" className="mr-3" />
            Accedi
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default Topbar
