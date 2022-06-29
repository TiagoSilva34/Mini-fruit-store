import { IFooterProps } from "./interface"
import { 
    FooterElement 
} from "./styles"

export const Footer: React.FC<IFooterProps> = ({
    children,
    className
}) => {
    return (
        <FooterElement
            className={className}
        >
            {children}
        </FooterElement>
    )
}