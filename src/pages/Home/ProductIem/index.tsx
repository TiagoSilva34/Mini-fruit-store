import { Link } from "react-router-dom"
import { IProduct } from ".."

export interface IProductItemProps {
    product: IProduct,
    handleBuy: (id: number) => void
}

export const ProductItem: React.FC<IProductItemProps> = ({
    product,
    handleBuy
    
}) => {
    return (
        <>
            <li>
                <img src={product.image} alt="" />
                <div className="info-image">
                    <h2>
                        {product.name}
                    </h2>
                    <span>
                        R$: {product.price}
                    </span>
                    <Link 
                        to="/carrinho"
                        onClick={() => handleBuy(product.id)}
                    >
                        comprar
                    </Link>
                </div>
            </li>
        </>
    )
}