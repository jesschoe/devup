const Categories = (props) => {

  const handleChange = (event) => {
    props.handleCategories(event.target.value)
  }

  return (
      <form className="text-orange" onSubmit={props.handleCategories}>
          {/* <label htmlFor="">categories:</label> */}
          <select className="bg-black border border-orange text-center" onChange={handleChange}>
              <option className="" value="" >All Categories</option>
              <option value="furniture">Furniture</option>
              <option value="gear">Gear</option>
              <option value="accessories">Accessories</option>
          </select> 
      </form>
  )
}

export default Categories