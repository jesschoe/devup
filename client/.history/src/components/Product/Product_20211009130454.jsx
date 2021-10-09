import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Linkto={`/products/${props._id}`}>
                <img className="product-image" src={props.imgURL} alt={props.name} />
                <div className="product-name">{props.name}</div>
                <div className="price">{`$${props.price}`}</div>
            </Link>
        </>
    )
}
export default Product