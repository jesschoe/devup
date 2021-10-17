import "./ReviewForm.css"
import { useState } from "react"

const ReviewForm = ({ user, content, handleWrite, handleChange, handleSubmit, handleRating, product }) => {
  const [rating, setRating] = useState(0)

  const handleClick = (val) => {
    setRating(val)

    handleRating(val)
  }

  
  return (
      <div className="opacity-100">
        <form 
          className="flex flex-col bg-black absolute p-8 w-7/12 top-1/4 left-1/4" 
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="text-lg">
            {product}
          </label>
          <div className="rating">
            {console.log(rating)}
            {rating >= 5 ? <span onClick={() => handleClick(5)}>★</span> : <span onClick={() => handleClick(5)}>☆</span>}
            {rating >= 4 ? <span onClick={() => handleClick(4)}>★</span> : <span onClick={() => handleClick(4)}>☆</span>}
            {rating >= 3 ? <span onClick={() => handleClick(3)}>★</span> : <span onClick={() => handleClick(3)}>☆</span>}
            {rating >= 2 ? <span onClick={() => handleClick(2)}>★</span> : <span onClick={() => handleClick(2)}>☆</span>}
            {rating >= 1 ? <span onClick={() => handleClick(1)}>★</span> : <span onClick={() => handleClick(1)}>☆</span>}
          </div>
          <label>
            {user.username}
          </label>
          <textarea
              className="flex-1 my-4 w-full border border-orange mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              rows={10}
              placeholder="Write your review..."
              value={content}
              name="content"
              required
              onChange={(e) => handleChange(e)}
          />
          <div className="flex self-center">
            <button type='submit' className="mx-4 py-2 px-6 bg-orange text-white w-24 rounded-md">Submit</button>
            <button onClick={handleWrite} className="mx-4 py-2 px-6 bg-orange text-white w-24 rounded-md">Cancel</button>
          </div>
        </form>
      </div>
    )
}

export default ReviewForm