

const Post = (props) => {
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="flex max-w-7xl mx-auto bg-black rounded justify-start items-center my-24 w-full border-red">
        <div className="m-10 w-full">
          <h1 className="text-5xl font-bold mb-5 text-orange">{props.title}</h1>
          <h5 className="font-bold text-white mb-5 text-xl">{props.name}</h5>
          <div className="flex justify-center content-center">
          </div>
          <p className="text-lg mb-8 text-white">{props.description}</p>
          <h5 className="font-bold text-purple mb-5">{props.hashtags}</h5>
        </div>
      </div>
    </div>
  )
}

export default Post