
const Sort = (props) => {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form className="text-orange" onSubmit={props.handleSubmit}>
            {/* <label htmlFor="sort">sort by:</label> */}
            <select className="bg-black border border-orange" onChange={handleSort}>
                {/* <option className="option" value="name-ascending" >Product Name, A-Z</option>
                <option value="name-descending">Product Name, Z-A</option> */}
                <option value="price-low-high">price, low to high</option>
                <option value="price-high-low">price, high to low</option>
            </select>
        </form>
    )
}

export default Sort
