import { Link } from "react-router-dom"

const Product = ({ _id, imgURL, name, price, category, keywords }) => {
  return (
    <>
      <div className="grid grid-row-3 m-4 w-64 h-80 bg-black border-2 border-black border-transparent hover:border-purple">
        <Link to={`/products/${_id}`}>
          <img className="h-48 w-full" src={imgURL} alt="" />
          <div className="text-orange font-bold p-2">{name}</div>
          <div className="px-2">
            ${price.length > 6 ? price.slice(0, price.length-6) + "," + price.slice(price.length-6, price.length) : `${price}`}
          </div>
        </Link> 
          <div className="px-2 text-xs text-orange">
            <Link 
              className="hover:text-white"
              to={{
                pathname:"/products",
                state:{
                  cat: `${category}`,
                  keyword: "",
                }
              }}>
              {`#${category} `}
            </Link>
            <Link 
              className="hover:text-white"
              to={{
                pathname:"/products",
                state:{
                  cat: "",
                  keyword: `${keywords}`,
                }
              }}
            >
              {`#${keywords}`}
            </Link>
          </div>
      </div>
    </>
  )
}

export default Product;
