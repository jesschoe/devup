import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
        <div className="flex flex-col items-center px-4 py-10 m-1 hover:-translate-y-5 transform transition">
      <h1 className="card-title text-white text-4xl font-hand">{</h1>
      <div className={bg}>
        <div className="max-w-md card-body">
          <div className="card-actions items-center justify-center">
          </div>
        </div>
      </div>
      <button className="font-sans rounded-2xl bg-transparent text-2xl p-3 hover:-translate-y-.5 transform transition hover:bg-red-900" onClick={(e) => handleClick(e)} value={value}>
        Add!</button>
    </div>
        </>
    )
}
export default Product

{/* <div className=" flex justify-center items-center max-w-sm">
        <div className="w-full lg:w-6/12 md:w-6/12 bg-black mx-3 md:mx-0 lg:mx-0">
            <Link to={`/products/${props._id}`}>
                <img className="w-full bg-cover"src={props.imgURL} alt={props._id} />
                <div className="text-orange">{props.name}</div>
                <div>{`$${props.price}`}</div>
                <div>{props.keywords}</div>
            </Link>
            </div>
            </div> */}