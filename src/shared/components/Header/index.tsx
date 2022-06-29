import { IHeaderProps } from "./interface"
import { HeaderElement } from "./styles"

export const Header: React.FC<IHeaderProps> = ({
    children,
    className
}) => {
    return (
       <HeaderElement
        className={className}
       >
        {children}
       </HeaderElement>
    )
}