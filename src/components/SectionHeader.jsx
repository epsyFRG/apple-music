import { Row, Col } from "react-bootstrap"
import { ChevronRight } from "react-bootstrap-icons"

function SectionHeader({ title, actionLabel = null, showChevron = false }) {
  return (
    <Row className="align-items-center mb-3">
      <Col>
        <h3 className="section-title m-0 d-flex align-items-center gap-2">
          {title}
          {showChevron && (
            <ChevronRight className="text-secondary fw-bold" size={20} />
          )}
        </h3>
      </Col>
      {actionLabel && (
        <Col xs="auto" className="text-muted-apple d-none d-md-block">
          {actionLabel} <ChevronRight />
        </Col>
      )}
    </Row>
  )
}

export default SectionHeader
