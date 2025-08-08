import { Card } from "react-bootstrap"

function MusicCard({ title, artist, cover }) {
  return (
    <Card className="bg-panel text-white border-0 rounded-12 h-100">
      {cover ? (
        <Card.Img src={cover} alt={title} className="album-cover" />
      ) : (
        <div className="music-placeholder w-100" />
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
