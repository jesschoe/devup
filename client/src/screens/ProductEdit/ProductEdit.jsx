import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getProduct, updateProduct } from '../../services/products'

const ProductEdit = (props) => {

  const [loading, setLoading] = useState(false);
  let cloudinaryUrl = "https://api.cloudinary.com/v1_1/devupapp";

  const [product, setProduct] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: '',
    details: [],
    keywords: []
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateProduct(id, product)
    setUpdated(updated)
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

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />
  }

  return (
    <Layout>
      <div className='product-edit'>
        <div className='image-container'>
          <img
            className='edit-product-image'
            src={product.imgURL}
            alt={product.name}
          />
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
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={product.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-price'
            placeholder='Price'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={product.description}
            name='description'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={product.details}
            name='detaisl'
            required
            onChange={handleChange}
          />
          <input
            className='input-price'
            placeholder='Price'
            value={product.keywords}
            name='keywords'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ProductEdit