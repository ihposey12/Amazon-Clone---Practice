import { useStateValue } from '../StateProvider'
import '../styles/CheckoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id 
        })
    }

    return(
        <div className='checkout_product'>
            <img className='checkoutProduct_image' src={image} alt='' />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'><small>$</small><strong>{price}</strong></p>
                <div classname='checkoutProduct_rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct