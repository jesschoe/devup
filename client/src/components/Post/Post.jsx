const Post = (props) => {
  return (
    <>
    <div className="flex max-w-7xl mx-auto bg-black rounded justify-start items-center w-full border-red">
      <div className="m-10 w-full">
        <div className=""> 
          {props.description}
        </div>
        <div className="font-bold text-white mt-5 text-sm text-right">by {props.name}</div>
      </div>
    </div>
    </>
  )
}

export default Post