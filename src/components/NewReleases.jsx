import { useEffect, useMemo, useState } from "react"
import { Row, Col, Spinner } from "react-bootstrap"
import SectionHeader from "./SectionHeader"
import MusicCard from "./MusicCard"

const API_BASE = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

function NewReleases() {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  const query = useMemo(() => "pop", [])

  useEffect(() => {
    const controller = new AbortController()
    async function fetchTracks() {
      try {
        setIsLoading(true)

        const queries = [query, "rock", "hip hop"]
        const responses = await Promise.all(
          queries.map((q) =>
            fetch(`${API_BASE}${encodeURIComponent(q)}`, {
              signal: controller.signal,
            }).then((r) => (r.ok ? r.json() : { data: [] }))
          )
        )
        const combined = responses.flatMap((j) => j.data || [])
        const uniqueById = Array.from(
          new Map(combined.map((t) => [t.id, t])).values()
        )
        setTracks(uniqueById.slice(0, 6))
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTracks()
    return () => controller.abort()
  }, [query])

  return (
    <section className="mt-4">
      <SectionHeader title="Nuove uscite" />
      {isLoading && (
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" role="status" />
        </div>
      )}
      {error && <div className="text-danger">{error}</div>}
      {!isLoading && !error && (
        <Row className="g-2">
          {tracks.slice(0, 10).map((t) => (
            <Col key={t.id} xs={4} sm={4} md={3} className="col-lg-5th">
              <MusicCard
                title={t.title}
                artist={t.artist?.name}
                cover={t.album?.cover_medium}
              />
            </Col>
          ))}
        </Row>
      )}
    </section>
  )
}

export default NewReleases
