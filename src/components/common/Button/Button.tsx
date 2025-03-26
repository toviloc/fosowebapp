import React, { ReactNode } from 'react'
import './button.css'
export const Button = ({
  type, text, preIcon, postIcon, additionalClass
}: { type: string, text: string, preIcon?: ReactNode, postIcon?: ReactNode, additionalClass: string }) => {
  return (
    <button className={`button ${type} ${additionalClass}`}>{preIcon || null}{text}{postIcon || null}</button>
  )
}
