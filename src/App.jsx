import { Container, Row, Col } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import "./App.css"

import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"
import PlayerBar from "./components/PlayerBar"

import NovitaPage from "./pages/NovitaPage"
import FavoritesPage from "./pages/FavoritesPage"

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Container fluid className="py-3">
          <Row className="g-3 align-items-stretch">
            <Col lg={2} className="d-none d-lg-flex flex-column">
              <Sidebar />
            </Col>
            <Col lg={10}>
              <Topbar />
              <Routes>
                <Route path="/" element={<NovitaPage />} />
                <Route path="/novita" element={<NovitaPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
        <PlayerBar />
      </div>
    </Router>
  )
}

export default App
