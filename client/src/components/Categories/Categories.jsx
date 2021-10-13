const Categories = (props) => {

  const handleChange = (event) => {
    props.handleCategories(event.target.value)
  }

  return (
      <form className="text-white text-xs" onSubmit={props.handleCategories}>
          <select className="bg-background border border-orange text-center p-px " onChange={handleChange}>
              <option className="" value="" >All Categories</option>
              <option value="furniture">Furniture</option>
              <option value="gear">Gear</option>
              <option value="accessories">Accessories</option>
          </select> 
      </form>
  )
}

export default Categories