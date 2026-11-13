export interface TouristSpot {
  title: string
  image: string
  rain: string
}

interface TouristCardProps {
  spot: TouristSpot
}

export function TouristCard({ spot }: TouristCardProps) {
  return (
    <div className="card">
      <img src={spot.image} alt={spot.title} className="card-image" />
      <div className="card-info">
        <h3>{spot.title}</h3>
        <span className="card-rain">{spot.rain}</span>
      </div>
    </div>
  )
}

