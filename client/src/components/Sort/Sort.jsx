
const Sort = (props) => {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form className="text-white text-xs mx-2" onSubmit={props.handleSubmit}>
            <select className="bg-background border border-orange p-px" onChange={handleSort}>
                <option value="price-low-high">price:low-high</option>
                <option value="price-high-low">price: high-low</option>
            </select>
        </form>
    )
}

export default Sort
