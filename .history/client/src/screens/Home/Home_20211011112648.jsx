import React from 'react'
import Layout from '../../components/Layout/Layout'

const Home = () => {
    return (
        <Layout>
            <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6 text-left">
            <h2 className=" text-right max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              DevUp
              <br className="hidden md:block" />
              your space{' '}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              A better setup lead
            </p>
          </div>
        </div>
      </div>
    </div>
        </Layout>
    )
}

export default Home
