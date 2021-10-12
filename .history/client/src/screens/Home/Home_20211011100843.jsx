import React from 'react'
import Layout from '../../components/Layout/Layout'

const Home = () => {
    return (
        <Layout>
            <div className="md:mx-auto md:container px-4">
                <div className="pt-10 md:pt-40">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">Boost adoption of product and services</h1>
                                    <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">Lets Get Started</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </Layout>
    )
}

export default Home
