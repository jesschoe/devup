import { Link } from "react-router-dom"

const Product = (props) => {
  return (
    <>
      <div className="grid grid-row-3 m-4 w-64 h-80 bg-black border-2 border-black border-transparent hover:border-purple">
        <Link to={`/products/${props._id}`}>
          <img className="h-48 w-full" src={props.imgURL} alt="" />
          <div className="text-orange font-bold p-2">{props.name}</div>
          <div className="px-2">{`$${props.price}`}</div>
        </Link> 
          <div className="px-2 text-xs text-orange">
            <Link 
              className="hover:text-white"
              to={{
                pathname:"/products",
                state:{
                  cat: `${props.category}`,
                  keyword: "",
                }
              }}>
              {`#${props.category} `}
            </Link>
            <Link 
              className="hover:text-white"
              to={{
                pathname:"/products",
                state:{
                  cat: "",
                  keyword: `${props.keywords}`,
                }
              }}
            >
              {`#${props.keywords}`}
            </Link>
          </div>
      </div>
    </>
  )
}

export default Product;
