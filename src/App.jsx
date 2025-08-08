import { Container, Row, Col, Carousel } from "react-bootstrap"
import "./App.css"

import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import PageHeader from "./components/PageHeader"
import HeroCarousel from "./components/HeroCarousel"
import HeroDesktop from "./components/HeroDesktop"
import NewReleases from "./components/NewReleases"
import FavoritesSection from "./components/FavoritesSection"
import ExploreGrid from "./components/ExploreGrid"
import SectionHeader from "./components/SectionHeader"
import Footer from "./components/Footer"
import PlayerBar from "./components/PlayerBar"
import { ChevronRight } from "react-bootstrap-icons"

import { useState } from "react"

function App() {
  const [activeView, setActiveView] = useState("novita")

  return (
    <div className="app-shell">
      <Container fluid className="py-3">
        <Row className="g-3 align-items-stretch">
          <Col lg={2} className="d-none d-lg-flex flex-column">
            <Sidebar onNavigate={setActiveView} activeView={activeView} />
          </Col>
          <Col lg={10}>
            <Topbar onNavigate={setActiveView} activeView={activeView} />
            <main className="mt-3">
              {activeView === "novita" && (
                <>
                  <PageHeader title="Novità" />
                  <HeroCarousel />
                  <HeroDesktop />
                  <section className="mt-4">
                    <SectionHeader
                      title="Nuovi episodi radio"
                      showChevron={true}
                    />
                    {/* Desktop */}
                    <div className="d-none d-md-block">
                      <Row className="g-2">
                        {[
                          {
                            img: "2a.png",
                            title: "Prólogo con Abuelo",
                            explicit: true,
                          },
                          {
                            img: "2b.png",
                            title: "The Wanderer",
                            explicit: false,
                          },
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
                        ].map((card, i) => (
                          <Col
                            key={i}
                            xs={4}
                            sm={4}
                            md={3}
                            className="col-lg-5th"
                          >
                            <img
                              className="w-100 rounded-12"
                              src={`/src/assets/images/${card.img}`}
                              alt={card.title}
                            />
                            <div className="mt-1 small d-flex align-items-center gap-1">
                              <span>{card.title}</span>
                              {card.explicit && (
                                <span className="badge bg-secondary border-0">
                                  E
                                </span>
                              )}
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    {/* Mobile Carousel */}
                    <div className="d-md-none">
                      <Carousel
                        interval={4000}
                        controls={false}
                        indicators={false}
                        className="mobile-carousel"
                      >
                        {[
                          [
                            {
                              img: "2a.png",
                              title: "Prólogo con Abuelo",
                              explicit: true,
                            },
                            {
                              img: "2b.png",
                              title: "The Wanderer",
                              explicit: false,
                            },
                            {
                              img: "2c.png",
                              title: "Michael Bublé & Carly Pearce",
                              explicit: false,
                            },
                          ],
                          [
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
                          ],
                        ].map((slide, slideIndex) => (
                          <Carousel.Item key={slideIndex}>
                            <Row className="g-2">
                              {slide.map((card, i) => (
                                <Col key={i} xs={4}>
                                  <img
                                    className="w-100 rounded-12"
                                    src={`/src/assets/images/${card.img}`}
                                    alt={card.title}
                                  />
                                  <div className="mt-1 small d-flex align-items-center gap-1">
                                    <span>{card.title}</span>
                                    {card.explicit && (
                                      <span className="badge bg-secondary border-0">
                                        E
                                      </span>
                                    )}
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </div>
                  </section>
                  <NewReleases />
                  <ExploreGrid />
                </>
              )}
              {activeView === "favorites" && <FavoritesSection />}
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
