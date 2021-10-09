import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-black text-white mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                <img src={props.imgURL} alt={props._id} />
                </div>
                <div>{props.name}</div>
                <div>{`$${props.price}`}</div>
            </Link>
            </div>
        </>
    )
}
export default Product