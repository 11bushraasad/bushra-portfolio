// True pixel-grid icons — each drawn on an 8x8 (or 7x7) block grid with <rect>,
// so they read as "8-bit" rather than smooth vector shapes with a pixel filter on top.

const GRIDS = {
  heart: [
    '0110110',
    '1111111',
    '1111111',
    '1111111',
    '0111110',
    '0011100',
    '0001000'
  ],
  star: [
    '0001000',
    '0001000',
    '1111111',
    '0111110',
    '0100010',
    '0100010',
    '1000001'
  ],
  sparkle: [
    '0001000',
    '0001000',
    '0101010',
    '1111111',
    '0101010',
    '0001000',
    '0001000'
  ]
}

export default function PixelIcon({ type = 'heart', size = 16, className = '', color = 'currentColor' }) {
  const grid = GRIDS[type] || GRIDS.heart
  const cells = grid.length
  const px = size / cells

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${cells} ${cells}`}
      className={className}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {grid.map((row, y) =>
        row.split('').map((cell, x) =>
          cell === '1' ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} /> : null
        )
      )}
    </svg>
  )
}
