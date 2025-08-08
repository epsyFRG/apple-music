import { Container, Row, Col } from "react-bootstrap"
import "./App.css"

import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import PageHeader from "./components/PageHeader"
import HeroCarousel from "./components/HeroCarousel"
import HeroDesktop from "./components/HeroDesktop"
import NewReleases from "./components/NewReleases"
import ExploreGrid from "./components/ExploreGrid"
import SectionHeader from "./components/SectionHeader"
import Footer from "./components/Footer"
import PlayerBar from "./components/PlayerBar"

function App() {
  return (
    <div className="app-shell">
      <Container fluid className="py-3">
        <Row className="g-3 align-items-stretch">
          <Col lg={2} className="d-none d-lg-flex flex-column">
            <Sidebar />
          </Col>
          <Col lg={10}>
            <Topbar />
            <main className="mt-3">
              <PageHeader title="Novità" />
              <HeroCarousel />
              <HeroDesktop />
              <section className="mt-4">
                <SectionHeader title="Nuovi episodi radio" />
                <Row className="g-2">
                  {[
                    {
                      img: "2a.png",
                      title: "Prólogo con Abuelo",
                      explicit: true,
                    },
                    { img: "2b.png", title: "The Wanderer", explicit: false },
                    {
                      img: "2c.png",
                      title: "Michael Bublé & Carly Pearce",
                      explicit: false,
                    },
                    {
                      img: "2d.png",
                      title: "Stephan Moccio: The Zane Lowe Interview",
                      explicit: false,
                    },
                    {
                      img: "2e.png",
                      title: "Chart Spotlight: Julia Michaels",
                      explicit: false,
                    },
                    {
                      img: "2f.png",
                      title: "Karri & Travis Mills",
                      explicit: false,
                    },
                  ].map((card, i) => (
                    <Col key={i} xs={4} sm={4} md={3} lg={2}>
                      <img
                        className="w-100 rounded-12"
                        src={`/src/assets/images/${card.img}`}
                        alt={card.title}
                      />
                      <div className="mt-1 small d-flex align-items-center gap-1">
                        <span>{card.title}</span>
                        {card.explicit && (
                          <span className="badge bg-secondary border-0">E</span>
                        )}
                      </div>
                    </Col>
                  ))}
                </Row>
              </section>
              <NewReleases />
              <ExploreGrid />
            </main>
          </Col>
        </Row>
      </Container>
      <Footer />
      <PlayerBar />
    </div>
  )
}

export default App
