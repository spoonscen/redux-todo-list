import * as React from 'react'
import { LinkProps } from '../../types'

const Link = ({ active, children, onClick }: LinkProps) => {
  return active
    ? <span>{children}</span>
    : <a href="#"
         onClick={ e => {
           e.preventDefault()
           onClick()
         }}
      >
        {children}
      </a>
}

export default  Link