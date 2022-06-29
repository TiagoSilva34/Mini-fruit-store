import { Button } from "../../shared/components/Button"
import { Form } from "../../shared/components/Form"
import { Input } from "../../shared/components/Input"
import { Container } from "./styles"
import useMediaQuery from '../../shared/hooks/index'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login: React.FC = () => {
    const matches = useMediaQuery('(max-width: 768px)');
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const navigate = useNavigate()

    const handleLogin = () => {
        if(email === "tiagoborges@gmail.com" && senha === "123456") {
            sessionStorage.setItem("loginUser", JSON.stringify(email))
            navigate("/")
        }
    }

    return (
        <Container>
            <div className={matches ? "login-sm" : "login-md"}>
                <Form>
                    <Input 
                        type="text"
                        onChange={setEmail}
                        placeholder="Digite seu email"
                    />
                    <Input 
                        type="password"
                        onChange={setSenha}
                        placeholder="Digite sua senha"
                    />
                    <Button
                        onClick={() => handleLogin()}
                    >
                        login
                    </Button>
                </Form>
            </div>
        </Container>
    )
}