import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link to={`/products/${props._id}`}>
                {/* <img src={props.imgUrl} alt={props.name} />
                <div>{props.name}</div>
                <div>{`$${props.price}`}</div> */}
            </Link>
        </>
    )
}
export default Product