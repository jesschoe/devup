import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Layout>
      <div className="container">
        <div className="section" >
          <div className="bg-black py-20">
            <div className=" bg-tester bg-cover bg-center h-96 flex items-center justify-start">
              <div className="pl-40">
                <h1 className="text-orange text-7xl text-left font-serif mb-2">Blog</h1>
                <h2 className="text-white text-xl">
                  Wondering why
                  <br />
                  DevUp
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center w-full">
          <div className="flex max-w-7xl mx-auto bg-black rounded justify-start items-center my-24 w-full border-red">
            <div className="m-10 w-full">
              <h1 className="text-5xl font-bold mb-5 text-orange">Why dev up</h1>
              <h5 className="font-bold text-white mb-5 text-xl">Jessica Choe</h5>
              <div className="flex justify-center content-center">
              </div>
              <p className="text-lg mb-8 text-white"> So you started working from home and you’re one of those people who really get sucked into the zone and by the time you finally finish pushing that last pesky div into the perfect spot on your page, five hours have passed and you realize that you never moved from the exact position in which you started. You’re starting to notice more and more minor health inconveniences like waking up with a kink in your neck, or burning eyes by the end of the day. Maybe your long dormant back issues are acting up and people have started to comment on your terrible posture.
                The best and healthiest solution would be to TAKE BREAKS! Stretch and walk around the block. Be more active like a normal person and maybe use a standing #desk to get more activity throughout the day. But if you’re like me, that’s easier said than done, and even with regular breaks and work outs, it’s still hard to avoid sitting for long periods while you’re programming. Without the right setup, it can do some long term damage!
                If this sounds like you, check out recommendations for  #ergonomic products. Yes, they might be a bit more pricey, but if you have any unexplained muscle pain, trust me, these products will help.
                <br />
                <br />
                Just make sure:
                <br />
                <br />
                <ul>
                  <li>- All your <Link to={{ pathname: "/products", state: { cat: "gear" } }}>#monitors</Link> are at eye level so that you’re not slouching or straining your neck.</li>
                  <li>- That your wrists are well supported when you’re typing and using your mouse.</li>
                  <li>- That your back is straight and supported on your <Link to={{ pathname: "/products", state: { cat: "furniture" } }}>#chair</Link> with your feet touching the ground.</li>
                  <li>- To protect your eyes by dimming your monitor brightness (especially when it’s dark) and using a blue light filter.</li>
                </ul>
                <br />
                Happy hacking!
              </p>
              <h5 className="font-bold text-white mb-5"><Link to={{ pathname: "/products", state: { cat: "gear" } }}>#monitors</Link>, <Link to={{ pathname: "/products", state: { cat: "furniture" } }}>#chair</Link></h5>
            </div>
          </div>
          <div className="flex max-w-7xl mx-auto bg-black rounded justify-start items-center my-24 w-full border-red">
            <div className="m-10 w-full">
              <h1 className="text-5xl font-bold text-white mb-5 text-blue">Why dev up</h1>
              <h5 className="font-bold text-white mb-5 text-xl">Jessica Choe</h5>
              <div className="flex justify-center content-center">
              </div>
              <p className="text-lg mb-8 text-white"> So you started working from home and you’re one of those people who really get sucked into the zone and by the time you finally finish pushing that last pesky div into the perfect spot on your page, five hours have passed and you realize that you never moved from the exact position in which you started. You’re starting to notice more and more minor health inconveniences like waking up with a kink in your neck, or burning eyes by the end of the day. Maybe your long dormant back issues are acting up and people have started to comment on your terrible posture.
                The best and healthiest solution would be to TAKE BREAKS! Stretch and walk around the block. Be more active like a normal person and maybe use a standing #desk to get more activity throughout the day. But if you’re like me, that’s easier said than done, and even with regular breaks and work outs, it’s still hard to avoid sitting for long periods while you’re programming. Without the right setup, it can do some long term damage!
                If this sounds like you, check out recommendations for  #ergonomic products. Yes, they might be a bit more pricey, but if you have any unexplained muscle pain, trust me, these products will help.
                <br />
                <br />
                Just make sure:
                <br />
                <br />
                <ul>
                  <li>- All your <Link to={{ pathname: "/products", state: { cat: "gear" } }}>#monitors</Link> are at eye level so that you’re not slouching or straining your neck.</li>
                  <li>- That your wrists are well supported when you’re typing and using your mouse.</li>
                  <li>- That your back is straight and supported on your <Link to={{ pathname: "/products", state: { cat: "furniture" } }}>#chair</Link> with your feet touching the ground.</li>
                  <li>- To protect your eyes by dimming your monitor brightness (especially when it’s dark) and using a blue light filter.</li>
                </ul>
                <br />
                Happy hacking!
              </p>
              <h5 className="font-bold text-white mb-5"><Link to={{ pathname: "/products", state: { cat: "gear" } }}>#monitors</Link>, <Link to={{ pathname: "/products", state: { cat: "furniture" } }}>#chair</Link></h5>
            </div>
          </div>
        </div>
        {/* <Link to={{ pathname: "/products", state: { cat: "gear" } }}>#</Link> */}
      </div>
    </Layout>
  );
};

export default Blog;