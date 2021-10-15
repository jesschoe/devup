import ReviewForm from "../ReviewForm/ReviewForm"

// Display edit or submit review component depending on props passed
export default function Modal(props) {

  return (
    <div>
      {props.showModal ? (
        <ReviewForm
          review={props.review}
          handleWrite={props.handleWrite}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />) : ''
      }
    </div>
  )
}
