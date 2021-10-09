import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link to={`/products/${props._id}`}>
                <img src={props.imgUrl} />
                <div>{props.name}</div>
                <div>{props.description}</div>
                <div>{props.details}</div>
                <div>{props.productURL}</div>
                <div>{`$${props.price}`}</div>
                <img src="" alt="" />
            </Link>
        </>
    )
}
export default Product