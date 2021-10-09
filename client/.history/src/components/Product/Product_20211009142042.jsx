import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div className="flex flex-wrap justify-center items-center p-10">
            <Link to={`/products/${props._id}`}>
                <img className="mx-auto w-64 "src={props.imgURL} alt={props._id} />
                <div>{props.name}</div>
                <div>{`$${props.price}`}</div>
            </Link>
            </div>
        </>
    )
}
export default Product