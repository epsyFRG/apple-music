import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Button } from "react-bootstrap"
import { HeartFill, Heart } from "react-bootstrap-icons"
import { removeFromFavorites } from "../store/favoritesSlice"
import MusicCard from "./MusicCard"
import SectionHeader from "./SectionHeader"

function FavoritesSection() {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.tracks)

  const handleRemoveFromFavorites = (track) => {
    dispatch(removeFromFavorites(track.id))
  }

  if (favorites.length === 0) {
    return (
      <div className="mb-5">
        <SectionHeader title="I tuoi brani preferiti" />
        <div className="text-center text-muted py-5">
          <Heart size={48} className="mb-3" />
          <p>Non hai ancora aggiunto brani ai preferiti</p>
          <p className="small">
            Clicca sul cuore sui brani per aggiungerli qui
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-5">
      <SectionHeader title="I tuoi brani preferiti" />
      <Row className="g-3">
        {favorites.map((track) => (
          <Col key={track.id} xs={4} sm={4} md={3} lg={2}>
            <div className="position-relative">
              <MusicCard
                title={track.title}
                artist={track.artist.name}
                cover={track.album.cover_medium}
              />
              <Button
                variant="link"
                className="position-absolute top-0 end-0 p-1 text-danger"
                onClick={() => handleRemoveFromFavorites(track)}
                aria-label="Rimuovi dai preferiti"
              >
                <HeartFill size={20} />
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default FavoritesSection
