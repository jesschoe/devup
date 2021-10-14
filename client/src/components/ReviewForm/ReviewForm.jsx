

const ReviewForm = ({ author, rating, content, handleChange, handleSubmit }) => {
    return (
      <div className="bg-background bg-opacity-60">
        <form 
          className="flex flex-col justify-center items-center bg-black absolute p-8 w-7/12 top-1/4 left-1/4" 
          onSubmit={(e) => handleSubmit(e)}
        >
            <input
                className="flex-1 m-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                placeholder="Name"
                value={author}
                name='author'
                required
                autoFocus
                onChange={(e) => handleChange(e)}
            />
            <input
                className="flex-1 m-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                placeholder="Rating (1-5)"
                value={rating}
                name="rating"
                required
                onChange={(e) => handleChange(e)}
            />
            <textarea
                className="flex-1 m-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                rows={10}
                placeholder="Write your review..."
                value={content}
                name="content"
                required
                onChange={(e) => handleChange(e)}
            />
            <button type='submit' className="py-2 px-6 bg-orange text-white w-36 rounded-md">Submit</button>
        </form>
      </div>
    )
}

export default ReviewForm