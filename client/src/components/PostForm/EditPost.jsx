import { deletePost, updatePost } from '../../services/posts'
import { useHistory } from 'react-router'

const EditPost = ({ post, handleChange }) => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePost(post._id, post)
    window.location.reload()
  }


  const handleDelete = async () => {
    await deletePost(post._id)
    history.push(`/blog/`)
  }

  return (
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
        <div className="flex justify-between ">
          <button className="py-2 px-4 mr-4 md:mr-20 bg-orange text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md" type="submit">
            Update post
          </button>
          <button className="py-2 px-4 bg-orange text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md" onClick={handleDelete}>
            Delete post
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditPost