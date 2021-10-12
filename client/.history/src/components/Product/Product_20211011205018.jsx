import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div class="max-w-xs m-6 overflow-hidden bg-black">
            .w-64
        <img class="bg-cover" src={props.imgURL} alt="avatar"/>
        </div>
        <div class="py-5 text-center">
            <a href="#" class=" text-md font-bold">{props.name}</a>
            <span class="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
        </div>
    </div>
        </>
    )
}
export default Product

{/* <div className="m-2 flex justify-center items-center max-w-xs">
        <div className="w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
                <div className="text-orange">{props.name}</div>
                <div>{`$${props.price}`}</div>
                <div>{props.keywords}</div>
            </Link>
            </div>
            </div> */}