import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
       <div class="p-2w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
        </>
    )
}
export default Product


{/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<div className="w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
    <Link className="block relative h-48 rounded overflow-hidden"to={`/products/${props._id}`}>
        <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
        <div className="text-orange">{props.name}</div>
        <div>{`$${props.price}`}</div>
        <div>{props.keywords}</div>
    </Link>
    </div>
    </div> */}