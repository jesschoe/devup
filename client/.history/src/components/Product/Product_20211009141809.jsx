import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div className="flex justify-center items-center">
            <Link to={`/products/${props._id}`}>
                <img className="mx-auto w-24 "src={props.imgURL} alt={props._id} />
                <div>{props.name}</div>
                <div>{`$${props.price}`}</div>
            </Link>
            </div>
        </>
    )
}
export default Product