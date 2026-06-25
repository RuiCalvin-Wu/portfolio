'use client'

const particles = [
  { type: 'dot', x: 8, y: 15, size: 4, anim: 'floatA', dur: 20, delay: 0, op: 0.15 },
  { type: 'dot', x: 22, y: 55, size: 3, anim: 'floatB', dur: 25, delay: 3, op: 0.12 },
  { type: 'dot', x: 85, y: 20, size: 5, anim: 'floatC', dur: 18, delay: 1, op: 0.1 },
  { type: 'dot', x: 72, y: 72, size: 3, anim: 'floatA', dur: 22, delay: 5, op: 0.14 },
  { type: 'dot', x: 42, y: 85, size: 4, anim: 'floatB', dur: 19, delay: 2, op: 0.08 },
  { type: 'dot', x: 92, y: 45, size: 3, anim: 'floatC', dur: 24, delay: 4, op: 0.12 },
  { type: 'ring', x: 15, y: 68, size: 14, anim: 'floatB', dur: 28, delay: 4, op: 0.08 },
  { type: 'ring', x: 78, y: 35, size: 10, anim: 'floatA', dur: 24, delay: 1, op: 0.06 },
  { type: 'ring', x: 55, y: 12, size: 12, anim: 'floatC', dur: 26, delay: 6, op: 0.07 },
  { type: 'line', x: 32, y: 22, w: 1.5, h: 30, anim: 'floatC', dur: 22, delay: 6, op: 0.06, rot: 45 },
  { type: 'line', x: 62, y: 58, w: 1.5, h: 25, anim: 'floatA', dur: 26, delay: 3, op: 0.08, rot: -35 },
  { type: 'line', x: 88, y: 78, w: 1.5, h: 22, anim: 'floatB', dur: 20, delay: 1, op: 0.06, rot: 20 },
  { type: 'plus', x: 48, y: 28, size: 12, anim: 'floatA', dur: 30, delay: 2, op: 0.07 },
  { type: 'plus', x: 5, y: 45, size: 10, anim: 'floatB', dur: 24, delay: 7, op: 0.06 },
]

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: p.rot ? `rotate(${p.rot}deg)` : undefined,
          }}
        >
          <div
            className={`particle-${p.type}`}
            style={{
              width: p.type === 'line' ? p.w : p.size,
              height: p.type === 'line' ? p.h : p.size,
              opacity: p.op,
              animation: `${p.anim} ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
