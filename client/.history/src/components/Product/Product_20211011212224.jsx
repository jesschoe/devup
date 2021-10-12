import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <Link to={`/products/${props._id}`}>
        <div className="grid grid-row-3 m-4 w-64 h-72 bg-black border border-orange border-transparent hover:border-purple">
          <img className="h-48 w-full" src={props.imgURL} alt="" />
          <div className="text-orange font-bold">{props.name}</div>
          <div>{`$${props.price}`}</div>
        </div>
      </Link>
    </>
  );
};
export default Product;

{
  /* <div className="m-2 flex justify-center items-center max-w-xs">
        <div className="w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
                <div className="text-orange">{props.name}</div>
                <div>{`$${props.price}`}</div>
                <div>{props.keywords}</div>
            </Link>
            </div>
            </div> */
}
