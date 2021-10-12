
const Sort = (props) => {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form className="block w-52 py-2 px-3 rounded-md bg-black text-orange" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">sort by:</label>
            <select className="sort" onChange={handleSort}>
                {/* <option className="option" value="name-ascending" >Product Name, A-Z</option>
                <option value="name-descending">Product Name, Z-A</option> */}
                <option value="price-low-high">Price, low to high</option>
                <option value="price-high-low">Price, high to low</option>
            </select>
        </form>
    )
}

export default Sort
