const Categories = (props) => {

  const handleChange = (event) => {
    props.handleCategories(event.target.value)
  }

  return (
      <form className="" onSubmit={props.handleCategories}>
          <label htmlFor="">categories:</label>
          <select className="" onChange={handleChange}>
              <option className="" value="" >All</option>
              <option value="furniture">Furniture</option>
              <option value="gear">Gear</option>
              <option value="accessories">Accessories</option>
          </select>
      </form>
  )
}

export default Categories