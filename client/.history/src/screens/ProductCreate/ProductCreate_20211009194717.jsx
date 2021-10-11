import { useState } from "react"
import Layout from "../../components/Layout/Layout"
import { useHistory } from "react-router-dom"
import { createProduct } from "../../services/products"


export default function ProductCreate() {

  const [product, setProduct] = useState({
    name: "",
    category: "",

    keywords: [],
    imgURL: "",
    description: "",
    details: [],
   "",
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


  return (
<<<<<<< bj-dev
    <div>
=======
    <Layout>
>>>>>>> dev
      <form className='create-product' onSubmit={handleSubmit}>
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
        <input
          className='input-imgURL'
          name='imgURL'
          value={product.imgURL}
          placeholder='ImgUrl'
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
<<<<<<< bj-dev
    </div>
=======
    </Layout>
>>>>>>> dev
  )
}
