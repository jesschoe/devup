import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom"
import { deleteProduct, getProduct, updateProduct } from "../../services/products";


export default function ProductEdit() {

  const [product, setProduct] = useState({
    name: "",
    category: "",
    keywords: "",
    imgURL: "",
    description: "",
    details: "",
    price: "",
    productURL: "",
  })

  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    fetchProduct();
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product)
    history.push(`/products/${id}`);
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleDelete = () => {
    deleteProduct(id);
    history.push("/");
  }



  return (
    <Layout>
      <div className='edit-products'>
        <div className='image-container'>
          <img
            className='edit-products-image'
            src={product.imgURL}
            alt={product.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={product.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-product' onSubmit={handleSubmit}>
          <input
            className='edit-name'
            name='name'
            value={product.name}
            placeholder='Name'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='edit-category'
            name='category'
            value={product.category}
            placeholder='Categorty'
            required
            onChange={handleChange}
          />
          <input
            className='edit-keywords'
            name='keywords'
            value={product.keywords}
            placeholder='Keywords'
            required
            onChange={handleChange}
          />
          <input
            className='edit-imgURL'
            name='imgURL'
            value={product.imgURL}
            placeholder='ImgUrl'
            required
            onChange={handleChange}
          />
          <textarea
            className='edit-textarea-description'
            name='description'
            value={product.description}
            placeholder='Description'
            required
            rows={3}
            onChange={handleChange}
          />
          <input
            className="edit-details"
            name='details'
            value={product.details}
            placeholder='Product Details'
            required
            onChange={handleChange}
          />
          <input
            className='edit-price'
            name='price'
            value={product.price}
            placeholder='$'
            required
            onChange={handleChange}
          />
          <input
            className='edit-productURL'
            name='productURL'
            value={product.productURL}
            placeholder='Product Url'
            required
            onChange={handleChange}
          />

          <div className="button-container">
            <button className='edit-btn' type='submit'>Update</button>
            <button className='delete-btn' onClick={handleDelete}>Delete</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
