import { IInputProps } from "./interface"
import { 
    InputElement 
} from "./styles"

export const Input: React.FC<IInputProps> = ({
    type, 
    value,
    placeholder,
    className,
    onChange
}) => {
    return (
        <InputElement 
            type={type}
            value={value}
            placeholder={placeholder}
            className={className}
            onChange={
                event => onChange(event.target.value)
            }
        />
    )
}