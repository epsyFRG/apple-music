import { Carousel } from "react-bootstrap"

const slides = [
  {
    id: 1,
    badge: "NUOVA STAZIONE RADIO",
    title: "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill.",
    img: "/src/assets/images/1a.png",
    alt: "Apple Music Chill",
  },
  {
    id: 2,
    badge: "NUOVA STAZIONE RADIO",
    title: "Ecco la nuova casa della musica latina",
    img: "/src/assets/images/1b.png",
    alt: "Música Uno",
  },
]

function HeroCarousel() {
  return (
    <section className="mt-3 d-md-none">
      <Carousel
        indicators={false}
        controls={false}
        interval={3500}
        pause={false}
      >
        {slides.map((s) => (
          <Carousel.Item key={s.id}>
            <div className="px-1">
              <div className="mb-2">
                <div className="text-uppercase small text-muted-apple fw-semibold">
                  {s.badge}
                </div>
                <div className="fw-semibold" style={{ lineHeight: 1.2 }}>
                  {s.title}
                </div>
              </div>
              <img src={s.img} alt={s.alt} className="w-100 rounded-18" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default HeroCarousel
