interface RainDrop {
  emoji: string
  left: string
  delay: string
  duration: string
}

const defaultRainDrops: RainDrop[] = [
  { emoji: '🌧️', left: '6%', delay: '0s', duration: '5.5s' },
  { emoji: '💧', left: '16%', delay: '2.1s', duration: '6.2s' },
  { emoji: '☔', left: '27%', delay: '0.8s', duration: '5s' },
  { emoji: '🌦️', left: '38%', delay: '3.2s', duration: '7s' },
  { emoji: '🌧️', left: '50%', delay: '1.4s', duration: '4.8s' },
  { emoji: '💧', left: '62%', delay: '2.8s', duration: '6.5s' },
  { emoji: '🌂', left: '74%', delay: '0.5s', duration: '5.8s' },
  { emoji: '🌧️', left: '85%', delay: '3.7s', duration: '6s' },
  { emoji: '☔', left: '94%', delay: '1.9s', duration: '5.2s' },
]

export function RainBackground() {
  return (
    <div className="rain-layer" aria-hidden="true">
      {defaultRainDrops.map((drop, index) => (
        <span
          key={index}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        >
          {drop.emoji}
        </span>
      ))}
    </div>
  )
}

