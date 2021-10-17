import PostForm from "../PostForm/PostForm"


export default function PostModal(props) {

  return (
    <div>
      {props.showPostModal ? (
        <PostForm
          post={props.post}
          handleWrite={props.handleWrite}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          user={props.user}
        />) : ''
      }
    </div>
  )
}