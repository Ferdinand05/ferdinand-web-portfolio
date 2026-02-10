export {}

declare global {
  const confetti: (options?: {
    particleCount?: number
    spread?: number
    startVelocity?: number
    gravity?: number
    decay?: number
    scalar?: number
    shapes?: string[]
    colors?: string[]
    origin?: { x?: number; y?: number }
  }) => void
}
