import { IContentProps } from "./interface"
import { ContentElement } from "./styles"

export const Content: React.FC<IContentProps> = ({
    children,
    className
}) => {
    return (
        <ContentElement
           className={className}
        >
            {children}
        </ContentElement>
    )
}