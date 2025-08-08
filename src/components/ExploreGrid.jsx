import { Row, Col } from "react-bootstrap"
import SectionHeader from "./SectionHeader"
import { ChevronRight } from "react-bootstrap-icons"

function ExploreGrid() {
  const items = [
    "Esplora per genere",
    "Decenni",
    "Attività e stati d'animo",
    "Worldwide",
    "Classifiche",
    "Audio spaziale",
    "Video musicali",
    "Nuovi artisti",
    "Hit del passato",
  ]

  return (
    <section className="mt-4 mb-5">
      <SectionHeader title="Altro da esplorare" className="mb-3" />
      <div className="d-md-none">
        <Row className="g-3">
          {items.map((label, idx) => (
            <Col key={idx} xs={12}>
              <div className="bg-panel rounded-12 p-4 d-flex align-items-center justify-content-between">
                <span className="text-danger fw-bold">{label}</span>
                <ChevronRight className="text-danger" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="d-none d-md-block">
        <Row className="g-3">
          {[0, 1, 2].map((col) => (
            <Col key={col} md={4}>
              <div className="d-flex flex-column gap-3">
                {items.slice(col * 3, col * 3 + 3).map((label, idx) => (
                  <div
                    key={idx}
                    className="bg-panel rounded-12 p-4 d-flex align-items-center justify-content-between"
                  >
                    <span className="text-danger fw-bold">{label}</span>
                    <ChevronRight className="text-danger" />
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default ExploreGrid
