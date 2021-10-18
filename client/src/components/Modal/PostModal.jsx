import EditPost from "../PostForm/EditPost"
import PostForm from "../PostForm/PostForm"

export default function PostModal(props) {
  return (
    <div>
      {props.showPostModal ? (props.edit ?
        <EditPost
          post={props.post}
          handleWrite={props.handleWrite}
          handleChange={props.handleChange}
          user={props.user}
        /> :

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