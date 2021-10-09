
const Sort = (props) => {

    const handleSort = (event) => {
        props.handleSort(event.target.value)
    }

    return (
        <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">sort by:</label>
            <select className="sort" onChange={handleSort}>
                <option className="option" value="name-ascending" >Product Name, A-Z</option>
                <option value="name-descending">Product Name, Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
            </select>
        </form>
    )
}

export default Sort
