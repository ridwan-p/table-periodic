import React from 'react'
import "./Element.css"

type Props = {
  xPos: number
  yPos: number
  symbol: string
  nomor: number
  massa: number
  color: string | number
  name: string
  size?: number
}

const Element: React.FC<Props> = ({
  xPos,
  yPos,
  symbol,
  nomor,
  massa,
  name,
  color,
  size = 70
}) => {
  const top = (yPos - 1) * (size + 1)
  const left = (xPos - 1) * (size + 1)

  return (
    <div
      className='element'
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${size}px`,
        height: `${size}px`,
        background: `#${color}`
      }}>
      <div className="element-container">
        <div className="row">
          <div className="element-nomor">{nomor}</div>
          <div className="element-massa">{Number(massa).toFixed(2)}</div>
        </div>
        <div className="element-symbol">{symbol}</div>
        <div className="Element-name">{name}</div>
      </div>
    </div>
  )
}

export { Element }