import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
			<div class="h-40 bg-gray-400 rounded-lg" style="
            background-image: url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg);
            ackground-repeat: no-repeat;
            background-attachment: cover;
            background-position: center;"></div>
			<div class="flex flex-col items-start mt-4">
				<h4 class="text-xl font-semibold">Heading</h4>
				<p class="text-sm">Some text about the thing that goes over a few lines.</p>
				<a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">Click Here</a>
			</div>
		</div>
        </>
    )
}
export default Product

{/* <div className="m-2 flex justify-center items-center max-w-sm">
        <div className="w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
                <div className="text-orange">{props.name}</div>
                <div>{`$${props.price}`}</div>
                <div>{props.keywords}</div>
            </Link>
            </div>
            </div> */}