import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div className="my-24 flex justify-center items-center">
        <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-black text-white mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <div className="w-full bg-cover">
                <img className="w-full bg-cover max-w-sm"src={props.imgURL} alt={props._id} />
                </div>
                <div>{props.name}</div>
                <div>{`$${props.price}`}</div>
            </Link>
            </div>
            </div>
        </>
    )
}
export default Product