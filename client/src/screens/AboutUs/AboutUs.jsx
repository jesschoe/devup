import React from 'react'
import Layout from "../../components/Layout/Layout"

const AboutUs = () => {
  return (
    <Layout>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 bg-black lg:px-8 lg:py-20 my-32 mb-10">
        <div className="mb-20 flex flex-wrap  text-white  justify-center text-center">
          <h1 className="mb-10 text-6xl font-bold ">About Us</h1>
          <p>
            Due to global shifts in the economy, many professionals are transitioning to remote work. And while their skills translate well into the home,
            the quality of their workspace doesn’t. To solve this issue, a group of developers came together to create DevUp. This application provides IT
            professionals with the latest tech gadgets, to improve the quality of their remote-office setup.
          </p>
        </div>
        <div className=" grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div className="flex flex-col justify-center items-center ">
            <img
              className="mb-3 object-cover w-32 h-32  rounded-full shadow"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHNFuqLr5Luzw/profile-displayphoto-shrink_200_200/0/1628515508367?e=1639612800&v=beta&t=08PiaCFjTaTKORtUGI78qU8HtXwZq2GaOXNoVk4-I7E"
              alt="Person"
            />
            <div className="flex flex-col items-center mt-2">
              <p className="text-lg font-bold text-white mb-1 ">Jessica Choe</p>
              <p className="mb-4 text-xs text-gray-800 text-white ">React Regulator</p>
              <div className="flex flex-row ">
                <a href="https://github.com/jesschoe">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634063230/devup/GitHub-Mark-Light-64px_sks3fy.png"
                    alt="github icon"
                    className="h-6 self-center mb-10 mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jessicajy/">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634136155/devup/linkedinLogo_i4lzpf.png"
                    alt="linkedin icon"
                    className="h-6 self-center mb-10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <img
              className="mb-3 object-cover w-32 h-32 rounded-full shadow"
              src="https://ca.slack-edge.com/T0351JZQ0-U02B5PMG43B-1330ac72c757-512"
              alt="Person"
            />
            <div className="flex flex-col items-center mt-2">
              <p className="text-lg font-bold text-white mb-1  ">Benjamin Jean</p>
              <p className="mb-4 text-xs text-gray-800 text-white ">Debugging Director</p>
              <div className="flex flex-row ">
                <a href="https://github.com/BenjaminLJean">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634063230/devup/GitHub-Mark-Light-64px_sks3fy.png"
                    alt="github icon"
                    className="h-6 self-center mb-10 mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/in/leroan/">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634136155/devup/linkedinLogo_i4lzpf.png"
                    alt="linkedin icon"
                    className="h-6 self-center mb-10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="mb-3 object-cover w-32 h-32 rounded-full shadow"
              src="https://ca.slack-edge.com/T0351JZQ0-U028123V9D4-2bd3f6eb0cb3-512"
              alt="Person"
            />
            <div className="flex flex-col items-center mt-2">
              <p className="text-lg font-bold text-white mb-1  ">Aaron Harris</p>
              <p className="mb-4 text-xs text-gray-800 text-white ">CSS Sorcerer</p>
              <div className="flex flex-row ">
                <a href="https://github.com/aaronsHarris">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634063230/devup/GitHub-Mark-Light-64px_sks3fy.png"
                    alt="github icon"
                    className="h-6 self-center mb-10 mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/in/aaron-harris-577867218/">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634136155/devup/linkedinLogo_i4lzpf.png"
                    alt="linkedin icon"
                    className="h-6 self-center mb-10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="mb-3 object-cover w-32 h-32 rounded-full shadow"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG_y2Av5r-80g/profile-displayphoto-shrink_200_200/0/1633124185752?e=1639612800&v=beta&t=jybH114XMAoDjs9DIyWMNMUe4TfPSGBt-4wA-aOAqUY"
              alt="Person"
            />
            <div className="flex flex-col items-center mt-2">
              <p className="text-lg font-bold text-white mb-1 ">Tyler Washington</p>
              <p className="mb-4 text-xs text-gray-800 text-white ">Method Master</p>
              <div className="flex flex-row ">
                <a href="https://github.com/Tyler-Washington888">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634063230/devup/GitHub-Mark-Light-64px_sks3fy.png"
                    alt="github icon"
                    className="h-6 self-center mb-10 mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/in/tyler-washington-4a8429176/">
                  <img
                    src="https://res.cloudinary.com/devupapp/image/upload/v1634136155/devup/linkedinLogo_i4lzpf.png"
                    alt="linkedin icon"
                    className="h-6 self-center mb-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;