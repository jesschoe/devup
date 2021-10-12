import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
       <div class="max-w-xs  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article"/>

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

            <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                        <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">Jone Doe</a>
                    </div>
                    <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                </div>
            </div>
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