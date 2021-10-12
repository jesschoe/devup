import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div className=" flex justify-center items-center max-w-sm min-h-">
        <div className="w-full   bg-black mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
                <div className="text-orange">{props.name}</div>
                <div>{`$${props.price}`}</div>
                <div>{props.keywords}</div>
            </Link>
            </div>
            </div>
        </>
    )
}
export default Product