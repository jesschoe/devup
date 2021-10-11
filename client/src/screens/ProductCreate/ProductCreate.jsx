import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import { useHistory } from "react-router-dom"
import { createProduct } from "../../services/products"

let cloudinaryUrl = "https://api.cloudinary.com/v1_1/devupapp";

export default function ProductCreate() {

  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    keywords: [],
    imgURL: "",
    description: "",
    details: [],
    price: "",
    productURL: "",
  })

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value

    })
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createProduct(product)
    console.log(res)
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
    console.log(file);
  }


  return (

    <Layout>
      <form className='create-product' onSubmit={handleSubmit}>
        <div className="uploadImage">
          <input
            type="file" name="file" placeholder="Upload Image" onChange={uploadImage}
          />
          {
            loading ? (
              <h2>Loading...</h2>
            ) : (
              <img src={product.imgURL} style={{ width: "300px" }} alt="product" />
            )
          }
        </div>
        <input
          className='input-name'
          name='name'
          value={product.name}
          placeholder='Name'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className='input-category'
          name='category'
          value={product.category}
          placeholder='Categorty'
          required
          onChange={handleChange}
        />
        <input
          className='input-keywords'
          name='keywords'
          value={product.keywords}
          placeholder='Keywords'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-description'
          name='description'
          value={product.description}
          placeholder='Description'
          required
          rows={3}
          onChange={handleChange}
        />
        <input
          className="input-details"
          name='details'
          value={product.details}
          placeholder='Product Details'
          required
          onChange={handleChange}
        />
        <input
          className='input-price'
          name='price'
          value={product.price}
          placeholder='$'
          required
          onChange={handleChange}
        />
        <input
          className='input-productURL'
          name='productURL'
          value={product.productURL}
          placeholder='Product Url'
          required
          onChange={handleChange}
        />
        <button className='submit-btn' type='submit'>
          Upload
        </button>
      </form>
    </Layout>

  )
}
