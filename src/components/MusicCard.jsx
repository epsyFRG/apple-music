import { Card, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Heart, HeartFill } from "react-bootstrap-icons"
import { toggleFavorite } from "../store/favoritesSlice"
import { useState } from "react"

function MusicCard({ title, artist, cover, trackData }) {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.tracks)
  const [isClicked, setIsClicked] = useState(false)

  const isFavorite =
    trackData && favorites.some((track) => track.id === trackData.id)

  const handleToggleFavorite = (e) => {
    e.stopPropagation()
    if (trackData) {
      setIsClicked(true)
      dispatch(toggleFavorite(trackData))

      setTimeout(() => {
        setIsClicked(false)
      }, 300)
    }
  }

  return (
    <Card className="bg-transparent text-white border-0 rounded-12 h-100 position-relative music-card">
      {cover ? (
        <Card.Img src={cover} alt={title} className="album-cover" />
      ) : (
        <div className="music-placeholder w-100" />
      )}

      {trackData && (
        <Button
          variant="link"
          className={`position-absolute top-0 end-0 p-1 text-danger btn-icon ${
            isClicked ? "clicked" : ""
          }`}
          onClick={handleToggleFavorite}
          aria-label={
            isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
          }
        >
          {isFavorite ? <HeartFill size={20} /> : <Heart size={20} />}
        </Button>
      )}

      <Card.Body className="p-2">
        <div className="text-truncate" title={title}>
          {title}
        </div>
        <div className="text-truncate text-muted-apple" title={artist}>
          <small>{artist}</small>
        </div>
      </Card.Body>
    </Card>
  )
}

export default MusicCard
