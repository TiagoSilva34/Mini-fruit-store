import { IButtonProps } from "./interface"
import { ButtonElement } from "./styles"

export const Button: React.FC<IButtonProps> = ({
    type,
    className,
    children,
    onClick
}) => {
    return (
        <ButtonElement
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </ButtonElement>
    )
}