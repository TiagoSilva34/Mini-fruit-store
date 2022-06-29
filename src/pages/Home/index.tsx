import { Content } from "../../shared/components/Content"
import { Footer } from "../../shared/components/Footer"
import { Form } from "../../shared/components/Form"
import { Header } from "../../shared/components/Header"
import { Input } from "../../shared/components/Input"
import { slide as Menu } from 'react-burger-menu'
import useMediaQuery from '../../shared/hooks/index'
import {
    MdPerson,
    MdShoppingCart,
    MdMenu,
    MdMoney,
    MdSearch
} from 'react-icons/md'
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaCreditCard,
    FaPaypal
} from 'react-icons/fa'
import { Link, Navigate, useNavigate } from "react-router-dom"
import {
    Container
} from "./styles"
import { Button } from "../../shared/components/Button"
import React, { useEffect, useState } from "react"
import repository from "../../Repositories/repository"
import { ProductItem } from "./ProductIem"

export interface IProduct {
    id: any,
    image: string
    name: string
    price: string
    quantity?: number
}

export const Home: React.FC = () => {
    const matches = useMediaQuery('(max-width: 768px)');
    const [products, setProducts] = useState<IProduct[]>([])
    const [productName, setProductName] = useState<string>("")
    const [quantity, setQuantity] = useState<number>(0)
    const navigate = useNavigate()
    const handleSearch = () => {
        const filter = products.filter((item: IProduct) => {
            return item.name.toLowerCase().includes(productName.toLowerCase())
        })

        if(!productName.length) {
            const response = repository.map(item => {
                return {
                    id: item.id,
                    image: item.image,
                    name: item.name,
                    price: item.price,
                }
            })
            setProducts(response)
        } else {
            setProducts(filter)
        }
    }

    useEffect(() => {
        handleSearch()
    }, [productName])

    const handleBuy = (id: number) => {
        const response = products.filter((item: IProduct) => item.id === id).map((item: IProduct) => {
            return {
                id: item.id,
                image: item.image,
                name: item.name,
                price: item.price,
                quantity: quantity + 1
            }
        })

        const getAllProducts = JSON.parse(localStorage.getItem("products") as any) || []

        getAllProducts.push(...response)

        localStorage.setItem("products", JSON.stringify(getAllProducts))
    }

    const handleCheckLogin = () => {
        let user = JSON.parse(sessionStorage.getItem("loginUser") as string)

        if(user) {
            return false
        } else {
            navigate("/login")
        }
    }


    useEffect(() => {
        let filterQuantity = JSON.parse(localStorage.getItem("products") as any) || []

        filterQuantity.filter((item: any) => {
            if(item.quantity > 0) {
                setQuantity(item.quantity)
            }
        })

        const response = repository.map(item => {
            return {
                id: item.id,
                image: item.image,
                name: item.name,
                price: item.price
            }
        })

        setProducts(response)
    }, [])
    

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
                            <MdSearch className="search-icon"/>
                            <Input
                                className={matches ? "input-header-sm" : "input-header-md"}
                                type="text"
                                value={productName}
                                placeholder="Digite sua busca aqui..."
                                onChange={setProductName}
                            />
                        </Form>
                    )}
                    <div className="cart-login">
                        <span className="login" >
                            <MdPerson className="person-icon"onClick={handleCheckLogin} />
                            <span>entrar</span>
                        </span>
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
            <Content className="content">
                <ul
                  className={matches ? "main-sm" : "main-md"}
                >
                    {products.map(product => (
                        <ProductItem 
                            key={product.id} 
                            product={product} 
                            handleBuy={handleBuy} 
                        />
                    ))}    
                </ul>
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