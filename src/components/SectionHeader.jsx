import { Row, Col } from "react-bootstrap"
import { ChevronRight } from "react-bootstrap-icons"

function SectionHeader({ title, actionLabel = null }) {
  return (
    <Row className="align-items-center mb-2">
      <Col>
        <h3 className="section-title m-0">{title}</h3>
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
