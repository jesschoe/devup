import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div className="m-2 flex justify-center items-center max-w-sm">
        <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-black text-white mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
                <div>{props.name}</div>
                <div>{`$${props.price}`}</div>
                <div>{props.keywords}</div>
            </Link>
            </div>
            </div>
        </>
    )
}
export default Product