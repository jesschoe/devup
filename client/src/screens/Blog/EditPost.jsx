import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Footer from "../../components/Footer/Footer"
import { getPost, updatePost } from '../../services/posts'

const EditPost = (props) => {

  const [post, setPost] = useState({
    title: "",
    name: "",
    description: "",
    hashtags: "",
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost();
    console.log(id)
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }


  if (isUpdated) {
    return <Redirect to={`/blogs`} />
  }

  return (

    <Layout user={props.user} admin={props.admin}>
      {console.log(post)}
      <div className="container">
        <div className="self-start ml-20 mt-10 mb-2 text-3xl font-extrabold text-white">
          Edit Post
        </div>
        <form className="flex-col items-center bg-black mx-20 mb-20 p-8 max-w-5xl" onSubmit={handleSubmit}>
          <div className="opacity-100">
            <form
              className="flex flex-col justify-center items-center bg-black absolute p-8 w-7/12 top-1/4 left-1/4"
              onSubmit={handleSubmit}
            >
              <input
                className="flex-1 m-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                placeholder="Title"
                value={post.title}
                name="title"
                required
                autoFocus
                onChange={handleChange}
              />
              <input
                className="flex-1 m-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                placeholder="Name"
                value={post.name}
                name="name"
                required
                onChange={handleChange}
              />
              <textarea
                className="flex-1 m-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                rows={10}
                placeholder="Description"
                value={post.description}
                name="description"
                required
                onChange={handleChange}
              />
              <input
                className="flex-1 m-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                placeholder="Hashtags"
                value={post.hashtags}
                name="hashtags"
                required
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="flex justify-center m-10">
            <button className="py-2 px-4 bg-orange text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md" type="submit">
              Update post
            </button>
          </div>
        </form>
        <div className="section">
          <Footer />
        </div>
      </div>
    </Layout>

  )
}

export default EditPost