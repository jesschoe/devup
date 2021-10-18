import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { getPosts, createPost } from "../../services/posts"
import Layout from "../../components/Layout/Layout"
import Footer from "../../components/Footer/Footer"
import PostModal from "../../components/Modal/PostModal"
import Post from "../../components/Post/Post"

const Blog = ({ user, admin }) => {

  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [showPostModal, setShowPostModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState({
    title: "",
    name: "",
    description: "",
    hashtags: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleWrite = async () => {
    setShowPostModal(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    addPost();
    setShowPostModal(prev => !prev)
    history.push("/blog");
  }

  const addPost = async () => {
    await createPost(post)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res);
      setIsLoaded(true);
    };
    fetchPosts();
  }, [])

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={user} admin={admin}>
      <div className="container">
        <div className="w-full" >
          <div className="bg-black py-20">
            <div className=" bg-blog bg-cover bg-center h-96 flex items-center justify-start">
              <div className="pl-40">
                <div className="text-orange text-7xl text-left font-serif mb-2">Blog</div>
                <div className="text-white text-xl">
                  Wondering why
                  <br />
                  DevUp
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end pr-10">
          {admin ? <button
            onClick={handleWrite}
            className="w-36 text-sm px-6 py-2 font-black my-6 text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange"
          >Create Post</button> : ''}
        </div>
        <div className="flex justify-center flex-col items-center w-full px-10 md:px-20 lg:px-72">
          <div className="self-start text-3xl mt-10 mb-2 font-bold text-orange">Ergo, Ergonomics</div>
          <div className="flex max-w-7xl mx-auto bg-black rounded justify-start items-center mb-4 w-full border-red">
            <div className="mx-10 mt-10 w-full flex flex-col">
              <div className="flex justify-center content-center">
              </div>
              <div className="mb-8 text-white">
                So you started working from home and you’re one of those people who really get sucked into the zone and by the time you finally finish pushing that last pesky div into the perfect spot on your page, five hours have passed and you realize that you never moved from the exact position in which you started. You’re starting to notice more and more minor health inconveniences like waking up with a kink in your neck, or burning eyes by the end of the day. Maybe your long dormant back issues are acting up and people have started to comment on your terrible posture.<br /><br />
                The best and healthiest solution would be to TAKE BREAKS! Stretch and walk around the block. Be more active like a normal person and maybe use a standing desk to get more activity throughout the day. But if you’re like me, that’s easier said than done, and even with regular breaks and work outs, it’s still hard to avoid sitting for long periods while you’re programming. Without the right setup, it can do some long term damage!<br /><br />
                If this sounds like you, check out recommendations our ergonomic products. Yes, they might be a bit more pricey, but if you have any unexplained muscle pain, trust me, these products will help.
                <br />
                <br />
                Just make sure:

                <br />
                <ul>
                  <li>- All your monitors are at eye level so that you’re not slouching or straining your neck.</li>
                  <li>- That your wrists are well supported when you’re typing and using your mouse.</li>
                  <li>- That your back is straight and supported on your chair with your feet touching the ground.</li>
                  <li>- To protect your eyes by dimming your monitor brightness (especially when it’s dark) and using a blue light filter.</li>
                </ul>
                <br />
                Happy hacking!
                <div className="font-bold text-white mt-5 text-sm text-right">by Jessica Choe</div>
              </div>
            </div>
          </div>

          <div className="self-start text-3xl mt-10 mb-2 font-bold text-orange">Upgrade</div>
          <div className="flex max-w-7xl mx-auto bg-black rounded justify-start items-center mb-4 w-full border-red">
            <div className="mx-10 mt-10 w-full flex flex-col">
              <div className="flex justify-center content-center">
              </div>
              <div className="mb-8 text-white">
                After coding everyday for the last 4 months, I believe sitting down is a skill. Being in the restaurant industry for 15 years, I’m used to running like crazy at work. I would usually average over 10K steps a day! When I first started coding I was worried about my energy and focus just sitting down all day, usually I chug coffee and start running around and get the blood pumping, but now I have to chug coffee and sit down and stare at a screen.
                <br />
                <br />
                At first I struggled sitting down all day. I would adjust my posture or put my feet up, and try pillows to sit on. When I would get up to take a break my back would feel terrible. I started to second guess if I was physically up to sitting down over 8 hours a day. Then I looked at my chair. An old wooden kitchen table chair, nothing special. It occurred to me that if I was going to sit down all day I would need to upgrade my hard-ware. So I went out to my local niche furniture store, Amazon.com, and got a decent cheap office chair for my desk and it was the best purchase I’ve made in a long time. No more aching back and my focus went up ten fold. So if you’re deciding to start working from home, don’t be like me and think you’re just going to sit at your kitchen table or on the couch with a laptop. Buy any office chair you can and get to work. You’ll be surprised how long you can actually sit down.
                <div className="font-bold text-white mt-5 text-sm text-right">by Aaron Harris</div>
              </div>
            </div>
          </div>

          <div>
            {posts.map((post) => {
              return (
                <>
                  <div className="self-start text-3xl mt-10 mb-2 font-bold text-orange">
                    {post.title}
                  </div>
                  <div className="flex flex-col max-w-7xl mx-auto bg-black rounded justify-start items-center mb-16 w-full border-red" key={post._id}>
                    <Post
                      _id={post._id}
                      title={post.title}
                      name={post.name}
                      description={post.description}
                      hastags={post.hastags}
                    />
                    {admin ? <Link
                      to={`/blog/edit/${post._id}`}
                      className="self-end text-sm px-6 py-2 mr-8 font-black mb-6 text-purple md:rounded md:border-none md:text-white md:bg-orange bg-black border border-purple"
                    >Edit Post</Link> : ''}
                  </div>
                </>
              );
            })}
          </div>
          <Footer />
        </div>
        <PostModal
          showPostModal={showPostModal}
          handleWrite={handleWrite}
          post={post}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
};

export default Blog;