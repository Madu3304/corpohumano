import { TouristCard, type TouristSpot } from './TouristCard'

interface ConteudoProps {
  spots: TouristSpot[]
}

export function Conteudo({ spots }: ConteudoProps) {
  return (
    <main className="content">
      <div className="grid">
        {spots.map((spot, index) => (
          <TouristCard key={index} spot={spot} />
        ))}
      </div>
    </main>
  )
}

