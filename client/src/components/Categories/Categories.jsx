const Categories = ({ handleCategories }) => {
  
  const handleChange = (event) => {
    handleCategories(event.target.value)
  }


  return (
    <form className="text-white text-xs" onSubmit={handleCategories}>
      <select className="bg-background border border-orange text-center p-px " onChange={handleChange}>
        <option className="" value="" >All Categories</option>
        <option value="Furniture">Furniture</option>
        <option value="Gear">Gear</option>
        <option value="Accessories">Accessories</option>
      </select> 
    </form>
  )
}

export default Categories