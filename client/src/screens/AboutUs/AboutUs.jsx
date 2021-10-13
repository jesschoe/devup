import React from 'react'
import Layout from "../../components/Layout/Layout"

const AboutUs = () => {
  return (
    <Layout>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHNFuqLr5Luzw/profile-displayphoto-shrink_200_200/0/1628515508367?e=1639612800&v=beta&t=08PiaCFjTaTKORtUGI78qU8HtXwZq2GaOXNoVk4-I7E"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Jessica Choe</p>
              <p className="mb-4 text-xs text-gray-800">Softaware Developer/React Regulator</p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://ca.slack-edge.com/T0351JZQ0-U02B5PMG43B-1330ac72c757-512"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Benjamin Jean</p>
              <p className="mb-4 text-xs text-gray-800">Software Developer/</p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://ca.slack-edge.com/T0351JZQ0-U028123V9D4-2bd3f6eb0cb3-512"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Aaron Harris</p>
              <p className="mb-4 text-xs text-gray-800">Software Developer/CSS Sorcerer</p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG_y2Av5r-80g/profile-displayphoto-shrink_200_200/0/1633124185752?e=1639612800&v=beta&t=jybH114XMAoDjs9DIyWMNMUe4TfPSGBt-4wA-aOAqUY"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Tyler Washington</p>
              <p className="mb-4 text-xs text-gray-800">Software Developer/Method Master</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;