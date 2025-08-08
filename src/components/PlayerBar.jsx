import { Container, Button } from "react-bootstrap"
import {
  MusicNoteBeamed,
  PlayFill,
  SkipForwardFill,
} from "react-bootstrap-icons"

function PlayerBar() {
  return (
    <div className="mobile-player d-lg-none">
      <Container className="d-flex align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center gap-2 flex-grow-1 overflow-hidden">
          <div className="artwork-placeholder-sm">
            <MusicNoteBeamed className="note" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Button
            aria-label="Play"
            variant="link"
            className="btn-icon text-secondary"
          >
            <PlayFill className="icon-lg" />
          </Button>
          <Button
            aria-label="Brano successivo"
            variant="link"
            className="btn-icon text-secondary"
          >
            <SkipForwardFill className="icon-lg" />
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default PlayerBar
