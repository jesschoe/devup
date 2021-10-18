import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createProduct } from "../../services/products"
import Layout from "../../components/Layout/Layout"
import Footer from "../../components/Footer/Footer"

let cloudinaryUrl = "https://api.cloudinary.com/v1_1/devupapp";

export default function ProductCreate(props) {

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    keywords: "",
    imgURL: "",
    description: "",
    details: "",
    price: "",
    productURL: "",
    reviews: []
  })

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct()
  }

  const addProduct = async () => {
    await createProduct(product)
    history.push("/products");
  }

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "itemImages");
    setLoading(true);

    const res = await fetch(`${cloudinaryUrl}/image/upload`,
      {
        method: 'POST',
        body: data
      })
    const file = await res.json();
    setProduct({
      ...product,
      imgURL: file.secure_url
    });
    setLoading(false);
  }


  return (

    <Layout user={props.user} admin={props.admin}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="self-start ml-20 mt-10 mb-2 text-3xl font-black text-white overflow-y-scroll">
            Add Product
          </div>
          <form className="flex-col items-center bg-black mx-20 mb-20 p-8 max-w-5xl" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="flex-col m-8 w-40">
                <div className="border-orange m-2">
                  <input
                    className="text-xs"
                    type="file" 
                    name="file" 
                    placeholder="Upload Image" 
                    onChange={uploadImage}
                  />
                  {
                    loading ? (
                      <h2>Loading...</h2>
                    ) : (
                      <img className='border border-orange w-full' src={product.imgURL} alt="product" />
                    )
                  }
                </div>
                <div className="flex-col">
                  <label className="text-xs">Price:</label>
                  <input
                    className="border border-orange py-2 px-4 bg-black w-full text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    name='price'
                    value={product.price}
                    placeholder='$'
                    required
                    onChange={handleChange}
                  />
                  <label className="text-xs">Category:</label>
                  <select
                    className="border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    name="category"
                    onChange={handleChange}
                  >
                    <option value="Furniture">Furniture</option>
                    <option value="Gear">Gear</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                  <label className="text-xs">Keyword:</label>
                  <select
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    name="keywords"
                    onChange={handleChange}
                  >
                    {product.category==="Furniture" ? 
                      <>
                        <option value="Desk">Desk</option>
                        <option value="Chair">Chair</option>
                      </> :
                      product.category==="Gear" ?
                        <>
                          <option value="Laptop">Laptop</option>
                          <option value="Monitor">Monitor</option>
                          <option value="Keyboard">Keyboard</option>
                          <option value="Mouse">Mouse</option>
                          <option value="Audio">Audio</option>
                          <option value="Hardware">Hardware</option>
                        </> :
                      product.category==="Accessories" ?
                        <>
                          <option value="Organization">Organization</option>
                          <option value="Lifestyle">Lifestyle</option>
                        </> : ""
                    }
                  </select>
                </div>
              </div>
              <div className="flex-col m-8 max-w-md justify-center items-center content-center">
                <label className="text-xs">Product Name:</label>
                <input
                  className="flex-1 mr-5 border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  name="name"
                  value={product.name}
                  placeholder=""
                  required
                  autoFocus
                  onChange={handleChange}
                />
                <label className="text-xs">Product URL:</label>
                <input
                  className="flex-1 border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  name="productURL"
                  value={product.productURL}
                  placeholder=""
                  required
                  onChange={handleChange}
                />
                <label className="text-xs">Description:</label>
                <textarea
                  className="flex-1 border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  name="description"
                  value={product.description}
                  placeholder=""
                  required
                  rows={2}
                  onChange={handleChange}
                />
                <label className="text-xs">Details (enter new line for each bullet point):</label>
                <textarea
                  className="flex-1 border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  name="details"
                  rows={5}
                  value={product.details}
                  placeholder=""
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-center m-10">
              <button className="py-2 px-4 bg-orange text-white w-1/3 rounded-md" type="submit">
                Add Product
              </button>
            </div>
          </form>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </Layout>

  )
}
