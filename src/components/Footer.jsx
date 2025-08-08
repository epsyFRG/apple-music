import { Container } from "react-bootstrap"

function Footer() {
  return (
    <footer className="footer-bar py-4 text-muted-apple small">
      <Container>
        <div className="d-flex flex-wrap gap-3 align-items-center">
          <span>Italia</span>
          <span>English (UK)</span>
          <span className="ms-auto">© 2025 epsyFRG</span>
        </div>
        <div className="mt-3 text-center text-muted-apple">
          <p className="mb-1">
            THIS PAGE WAS MADE AS A PERSONAL EDUCATIONAL PROJECT.
          </p>
          <p className="mb-1">
            This is NOT the official site of the company or brand identified on
            the page.
          </p>
          <p className="mb-1">
            The creator of this page is NOT affiliated with the company or brand
            in any way.
          </p>
          <p className="mb-0">
            This page is a personal project made in connection with an
            educational exercise.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
