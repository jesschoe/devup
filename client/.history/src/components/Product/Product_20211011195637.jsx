import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
       
<div class="flex flex-wrap items-center justify-center">
    <div class="flex-shrink-0 mx-2 mb-6 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg">
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#f3c06b">
            </rect>
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#f3c06b">
            </rect>
        </svg>
        <div class="relative pt-10 px-10 flex items-center justify-center">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
            </div>
            <picture>
                <source srcSet="/images/object/5.webp" type="image/webp"/>
                    <source srcSet="/images/object/5.png"/>
                        <img class="relative w-40" src="/images/object/5.png" alt="shopping item"/>
                    </picture>
                </div>
                <div class="relative text-white px-6 pb-6 mt-6">
                    <span class="block opacity-75 -mb-1">
                        Indoor
                    </span>
                    <div class="flex justify-between">
                        <span class="block font-semibold text-xl">
                            Peace Lily
                        </span>
                        <span class="bg-white rounded-full text-yellow-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $36.00
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex-shrink-0 mx-2 mb-6 sm:mb-0 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg">
                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#6da3fb">
                    </rect>
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#6da3fb">
                    </rect>
                </svg>
                <div class="relative pt-10 px-10 flex items-center justify-center">
                    <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                    </div>
                    <img class="relative w-40" src="/images/object/6.png" alt="shopping"/>
                </div className="justify">
                <div class="relative text-white px-6 pb-6 mt-6">
                    <span class="block opacity-75 -mb-1">
                        Outdoor
                    </span>
                    <div class="flex justify-between">
                        <span class="block font-semibold text-xl">
                            Monstera
                        </span>
                        <span class="bg-white rounded-full text-blue-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $45.00
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex-shrink-0 mx-2 -mb-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="#a17cf3">
                    </rect>
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#a17cf3">
                    </rect>
                </svg>
                <div class="relative pt-10 px-10 flex items-center justify-center">
                    <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                    </div>
                    <img class="relative w-40" src="/images/object/7.png" alt="shopping"/>
                </div>
                <div class="relative text-white px-6 pb-6 mt-6">
                    <span class="block opacity-75 -mb-1">
                        Outdoor
                    </span>
                    <div class="flex justify-between">
                        <span class="block font-semibold text-xl">
                            Oak Tree
                        </span>
                        <span class="bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            $68.50
                        </span>
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