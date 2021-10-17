import React from 'react'
import Layout from "../../components/Layout/Layout"
import Footer from "../../components/Footer/Footer"

const Resources = (props) => {
  return (
    <Layout user={props.user}>
      <div className=" flex flex-col justify-center container">
        <div className="flex flex-col mt-20">
          <div className="mt-20 mb-2 text-3xl font-black text-orange self-start ml-20">
            Resources
          </div>
          <div className="p-4 max-w-md md:max-w-full md:p-16 bg-black lg:px-8 lg:py-20 mx-20 mb-20">
            <h2 className="text-orange mb-3 pt-0">Design</h2>
            <div className="mb-1 underline">
              <a href=" https://mui.com/">https://mui.com/</a>
            </div>
            <div className=" mb-1 underline">
              <a href="https://figma.com/">https://figma.com</a>
            </div>
            <div className="mb-5 underline ">
              <a href="https://tailwindcss.com/">https://tailwindcss.com</a>
            </div>
            <h2 className="text-orange mb-3">Inspiration</h2>
            <div className=" mb-1 underline">
              <a href="https://www.amazon.com/">https://www.amazon.com</a>
            </div>
            <div className="mb-1 underline">
              <a href="https://www.bestbuy.com/">https://www.bestbuy.com</a>
            </div>
            <div className="mb-5 underline">
              <a href="https://www.nike.com/">https://www.nike.com</a>
            </div>
            <h2 className="text-orange mb-3">Job Trends</h2>
            <div className="mb-1 underline">
              <a href="https://news.gallup.com/poll/355907/remote-work-persisting-trending-permanent.aspx">https://news.gallup.com/poll/355907/remote-work-persisting-trending-permanent.aspx</a>
            </div>
            <div className="mb-1 underline">
              <a href="https://www.newsbug.info/monticello_herald_journal/opinion/remote-work-is-here-to-stay-lean-into-it-to-thrive/article_3d5322b5-b111-5486-9ccb-e907acf0c528.html">https://www.newsbug.info/remote-work-is-here-to-stay-lean-into-it-to-thrive</a>
            </div>
            <div className=" underline">
              <a href="https://thriveglobal.com/stories/create-a-comfortable-work-from-home-environment-for-better-peace-of-mind/">https://thriveglobal.com/create-a-comfortable-work-from-home-environment-for-better-peace-of-mind</a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default Resources;