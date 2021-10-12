import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
     {
   <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<div className="w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
    <Link className="block relative h-48 rounded overflow-hidden"to={`/products/${props._id}`}>
        <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
        <div className="text-orange">{props.name}</div>
        <div>{`$${props.price}`}</div>
        <div>{props.keywords}</div>
    </Link>
    </div>
    </div> 
} 
    </>
  );
};
export default Product;


