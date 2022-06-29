import React from "react"

export interface IButtonProps {
    type?: "submit" | "reset" | "button" 
    children?: React.ReactNode
    className?: any
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}