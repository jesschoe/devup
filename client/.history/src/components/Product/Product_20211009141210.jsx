import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link to={`/products/${props._id}`}>
                <img className="w-"src={props.imgURL} alt={props._id} />
                <div>{props.name}</div>
                <div>{`$${props.price}`}</div>
            </Link>
        </>
    )
}
export default Product