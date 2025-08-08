import { Carousel, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import MusicCard from "./MusicCard"

function NewReleasesMobile({ tracks }) {
  const groupedTracks = []
  for (let i = 0; i < tracks.length; i += 3) {
    groupedTracks.push(tracks.slice(i, i + 3))
  }

  return (
    <Carousel
      interval={4000}
      controls={false}
      indicators={false}
      className="mobile-carousel"
    >
      {groupedTracks.map((group, groupIndex) => (
        <Carousel.Item key={groupIndex}>
          <Row className="g-2">
            {group.map((track) => (
              <Col key={track.id} xs={4}>
                <MusicCard
                  title={track.title}
                  artist={track.artist?.name}
                  cover={track.album?.cover_medium}
                  trackData={track}
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default NewReleasesMobile
