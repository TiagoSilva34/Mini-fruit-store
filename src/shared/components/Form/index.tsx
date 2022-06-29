import { IFormProps } from "./interface"
import { 
    FormElement 
} from "./styles"

export const Form: React.FC<IFormProps> = ({
    children,
    className
}) => {
    return (
        <FormElement
            className={className}
        >
            {children}
        </FormElement>
    )
}