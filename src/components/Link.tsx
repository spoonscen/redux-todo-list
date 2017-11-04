import * as React from 'react'

const Link = ({ active, children, onClick }: LinkProps) => {
  return active
    ? <span>{children}</span>
    : <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
}

export default Link