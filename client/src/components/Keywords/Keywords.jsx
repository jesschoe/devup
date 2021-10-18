const Categories = ({ handleKeywords, category }) => {
  
  const handleChange = (event) => {
    handleKeywords(event.target.value)
  }

  const furniture = (
    <>
    <form className="text-white text-xs" onSubmit={handleKeywords}>
      <select className="bg-background border border-orange text-center p-1" onChange={handleChange}>
        <option className="" value="Furniture" >Furniture</option>
        <option value="Desk">Desk</option>
        <option value="Chair">Chair</option>
      </select> 
    </form>
  </>
  )

  const gear = (
    <>
    <form className="text-white text-xs" onSubmit={handleKeywords}>
      <select className="bg-background border border-orange text-center p-1" onChange={handleChange}>
        <option className="" value="Gear" >Gear</option>
        <option value="Laptop">Laptop</option>
        <option value="Monitor">Monitor</option>
        <option value="Keyboard">Keyboard</option>
        <option value="Mouse">Mouse</option>
        <option value="Audio">Audio</option>
        <option value="Hardware">Hardware</option>
      </select> 
    </form>
  </>
  )

  const accessories = (
    <>
    <form className="text-white text-xs" onSubmit={handleKeywords}>
      <select className="bg-background border border-orange text-center p-1" onChange={handleChange}>
        <option className="" value="Accessories" >Accessories</option>
        <option value="Organization">Organization</option>
        <option value="Lifestyle">Lifestyle</option>
      </select> 
    </form>
  </>
  )

  

  return (
    <>
      {category === "Furniture" ? furniture : 
      category === "Gear" ? gear : 
      category === "Accessories" ? accessories : ""}
    </>
  )
}

export default Categories