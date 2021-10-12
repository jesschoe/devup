const Categories = (props) => {

  const handleChange = (event) => {
    props.handleCategories(event.target.value)
  }

  return (
      <form className="" onSubmit={props.handleCategories}>
          <label for="category">Category:</label>
          <select name="category" id="category" onChange={handleChange}>
              <option className="" value="" >All</option>
              <option value="furniture">Furniture</option>
              <option value="gear">Gear</option>
              <option value="accessories">Accessories</option>
          </select>
      </form>
  )
}

export default Categories