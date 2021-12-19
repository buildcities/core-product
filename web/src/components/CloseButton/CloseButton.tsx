import React from 'react'

interface Props {
  border?: string
  color?: string
  children?: React.ReactNode
  height?: string
  onClick?: () => void
  radius?: string
  width?: string
  display?: string
  position: any
  top?: string
  left?: string
}

const CloseButton: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  display,
  position,
  top,
  left,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        display,
        position,
        top,
        left,
      }}
    >
      {children}
    </button>
  )
}

export default CloseButton
