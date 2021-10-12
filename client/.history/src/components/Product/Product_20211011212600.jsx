import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <Link to={`/products/${props._id}`}>
        <div className="grid grid-row-3 m-4 w-64 h-72 bg-black border-2 border-black border-transparent hover:border-purple">
          <img className="h-48 w-full" src={props.imgURL} alt="" />
          <div className="text-orange font-bold">{props.name}</div>
          <div>{`$${props.price}`}</div>
        </div>
      </Link>
    </>
  );
};
export default Product;


