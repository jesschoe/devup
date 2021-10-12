import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
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