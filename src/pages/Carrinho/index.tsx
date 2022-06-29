import { Content } from "../../shared/components/Content"
import { Footer } from "../../shared/components/Footer"
import { Header } from "../../shared/components/Header"
import { Container } from "./styles"
import jsPDF from 'jspdf'
import {
    MdPerson,
    MdShoppingCart,
    MdMenu,
    MdMoney,
    MdDelete
} from 'react-icons/md'
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaCreditCard,
    FaPaypal
} from 'react-icons/fa'
import useMediaQuery from "../../shared/hooks"
import { Link } from "react-router-dom"
import { Form } from "../../shared/components/Form"
import { Input } from "../../shared/components/Input"
import { slide as Menu } from 'react-burger-menu'
import { Button } from "../../shared/components/Button"
import { useEffect, useState } from "react"
import { IProduct } from "../Home"

export const Carrinho: React.FC = () => {
    const matches = useMediaQuery('(max-width: 768px)');
    const [products, setProducts] = useState<IProduct[]>([])
    const [quantity, setQuantity] = useState<number>(0)

    const handleDelete = (id: number) => {
        const getproducts = JSON.parse(localStorage.getItem("products") as any) || []

        const removeproduct = getproducts.filter((item: any) => item.id !== id)

        localStorage.setItem("products", JSON.stringify(removeproduct))

        window.location.reload()
    }

    useEffect(() => {
        const productCart = JSON.parse(localStorage.getItem("products") as string) || []    
            productCart.filter((item: any) => {
                if(item.quantity > 0) {
                    setQuantity(item.quantity)
                }
            })
        setProducts(productCart)
    }, []) 

    const generatePDF = () => {
        let res = products.map(item => {
            return {
                name: item.name,
                price: String(item.price),
                quantity: String(item.quantity)
            }
        })

       let header = ['name', 'price']
       
       let styles = {
        autoSize: true,
        printHeaders: false,
        columnWidths: 200,
        width: 300
      }
       let doc = new jsPDF("landscape", "pt")
       doc.table(1, 1, res, header, styles)
       doc.save("pediso.pdf")
     }
       
    return (
       <Container>
             <Header>
                <div
                    className={matches ? "header-sm" : "header-md"}
                >
                    {matches && (
                        <Menu customBurgerIcon={<MdMenu className="menu-burger-sm" />} className="nav-burger-sm">
                            <Link to="" className="link-item-sm">
                                <li className="first-link">Maça</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Perâ</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Banana</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Abacaxi</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Manga</li>
                            </Link>
                        </Menu>
                    )}
                    <div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 className={matches ? "logo-sm" : "logo-md"}>
                                FrameworkStore
                            </h1>
                            <small className={matches ? "subTitle-sm" : "subTitle-md"}>Produtos frescos para sua mesa!</small>
                        </Link>
                    </div>
                    {!matches && (
                        <Form>
                            <Input
                                className={matches ? "input-header-sm" : "input-header-md"}
                                type="text"
                                onChange={() => {}}
                                placeholder="Digite sua busca aqui..."
                               
                            />
                        </Form>
                    )}
                    <div className="cart-login">
                        <Link to="/login" className="login">
                            <MdPerson className="person-icon" />
                            <span>entrar</span>
                        </Link>
                        <span className="cart-quantity">+{quantity}</span>
                        <Link to="/carrinho">
                            <MdShoppingCart 
                                className="cart" 
                            />
                        </Link>
                    </div>
                </div>
                {!matches && (
                    <nav>
                        <ul>
                            <Link to="" className="link-item-sm">
                                <li className="first-link">Maça</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Perâ</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Banana</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Abacaxi</li>
                            </Link>
                            <Link to="" className="link-item-sm">
                                <li>Manga</li>
                            </Link>
                        </ul>
                    </nav>
                )}
            </Header>
            <Content className={matches ? "list-cart-sm" : "list-cart-md"}>
                <ul>
                    {products.map((product: IProduct) => (
                        <li key={product.id}>
                            <img src={product.image} alt="" />
                            <h2>{product.name}</h2>
                            <span>R$: {product.price}</span>
                            <input type="text" value={quantity}/>
                            <MdDelete 
                                className="delete"
                                onClick={() => handleDelete(product.id)}
                            />
                            <button
                                onClick={generatePDF}
                            >
                                checkout
                            </button>
                        </li>
                    ))}
                </ul>
                {!products.length && (    
                    <h1 className="cart-message">Seu carrinho está vazio =/</h1>
                )}
            </Content>
            <Footer >
                <div
                    className={matches ? "footer-sm" : "footer-md"}
                >
                    <div
                        className="payment"
                    >
                        <h2>Formas de pagamento</h2>
                        <span className="icon">
                            <FaCreditCard />
                            <FaPaypal />
                            <MdMoney />
                        </span>
                    </div>
                    <div
                        className="medias"
                    >
                        <h2>Midias socias</h2>
                        <span className="icon">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </span>
                    </div>
                    <Form
                        className={matches ? "newsletter-sm" : "newsletter"}
                    >
                        <Input
                            className={matches ? "input-sm" : ""}
                            placeholder="Cadastre seu e-mail"
                            onChange={() => { }}
                        />
                        <Button
                            className="btn-neesletter"
                        >
                            newsletter
                        </Button>
                    </Form>
                </div>
                <p>&copy;copy - Todos os direitos reservaos</p>
            </Footer>
       </Container>

    )
}

