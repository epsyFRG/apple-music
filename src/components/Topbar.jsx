import {
  Navbar,
  Container,
  Form,
  Button,
  InputGroup,
  ButtonGroup,
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
} from "react-bootstrap-icons"
import Logo from "./Logo"

function Topbar() {
  return (
    <Navbar className="bg-panel topbar" expand="md" variant="dark">
      <Container fluid>
        {/* Mobile */}
        <div className="d-flex d-md-none align-items-center justify-content-between w-100">
          <Button variant="transparent">
            <List size={18} className="text-danger" />
          </Button>
          <Logo size={20} className="text-white" />
          <Button variant="trasnparent" className="text-danger" size="sm">
            Accedi
          </Button>
        </div>

        {/* Desktop */}
        <div className="d-none d-md-flex align-items-center w-100 gap-3">
          <ButtonGroup>
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
            className="ms-auto"
            role="search"
            style={{ maxWidth: 520, width: "100%" }}
          >
            <InputGroup>
              <InputGroup.Text className="bg-dark text-white border-0">
                <Apple className="text-align-middle" />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="bg-dark text-white border-0"
                aria-label="Cerca"
              />
            </InputGroup>
          </Form>
          <Button variant="danger" size="sm">
            <PersonFill width="20px" className="mr-3" />
            Accedi
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default Topbar
