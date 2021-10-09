const Categories = (props) => {

    const handleSort = (event) => {
      props.handleSort(event.target.value)
  }

  return (
      <form className="cat-container" onSubmit={props.handleSubmit}>
          <label htmlFor="categories">categories:</label>
          <select className="categories" onChange={handleSort}>
              <option className="option" value="furniture" >Furniture</option>
              <option value="gear">Gear</option>
              <option value="accessories">Accessories</option>
          </select>
      </form>
  )
}

export default Categories