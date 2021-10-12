const Categories = (props) => {

  const handleChange = (event) => {
    props.handleCategories(event.target.value)
  }

  return (
      <form className="block w-52 py-2 px-3 rounded-md text-black" onSubmit={props.handleCategories}>
          <div></div>
          <label className="text-orange" htmlFor="">categories:</label>
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