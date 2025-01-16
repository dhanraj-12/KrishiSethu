import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Content_on_home_page() {
  return (
    <div>
      <NavBar />

      {/* Home Section */}
      <section id="Home" className="mt-0 h-[100vh] w-[100vw]">
        <div className="text-center">
          <img
            src="src/assets/Screenshot_from_2024-12-24_09-06-32-removebg-preview.png"
            alt=""
            className="ml-auto mr-auto pt-[10vh]"
          />
          <img src="src/assets/Pasted image.png" alt="" className="ml-auto mr-auto" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga iusto dignissimos eveniet
            accusantium quis pariatur? Dolorum eaque fugiat facere et id dolores unde hic odit in, nihil, ut sunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum quasi molestias dicta eaque possimus
            deserunt quos autem nesciunt perferendis asperiores ullam amet at rem inventore omnis hic, quam distinctio.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="About_Us" className="mt-[16vh] min-h-[100vh] w-[100vw] pb-16">
        <div className="relative top-[100px]">
          <h1 className="font-black text-6xl text-center pb-9">About Us</h1>
          <p className="mt-6 text-lg px-4 md:px-10">
            <strong>Krishi Setu</strong> is a platform designed to connect farmers directly with consumers, removing the
            need for middlemen. By eliminating these intermediaries, we aim to ensure that farmers receive a fair price
            for their products, while consumers benefit from fresh produce at competitive prices. Our goal is to create
            a sustainable ecosystem that empowers both farmers and buyers.
          </p>
          <h2 className="mt-6 text-4xl font-semibold ml-16">How It Works</h2>
          <p className="mt-4 text-lg px-4 md:px-10">
            Farmers can easily list their products on the platform, setting their own prices. Consumers browse and
            purchase directly from farmers, cutting out the middleman and ensuring fair, transparent transactions.
            Real-time transactions mean faster payments and a more efficient market.
          </p>
          <h2 className="mt-6 text-4xl font-semibold ml-16">Key Benefits</h2>
          <ul className="mt-4 list-disc pl-6 text-lg px-4 md:px-10">
            <li>
              <strong>For Farmers:</strong> More control over pricing, higher profits, and faster payments.
            </li>
            <li>
              <strong>For Consumers:</strong> Access to fresh, affordable produce at lower prices.
            </li>
            <li>
              <strong>For the Ecosystem:</strong> A fairer, more transparent market that promotes sustainable farming
              and strengthens local economies.
            </li>
          </ul>
          <h2 className="mt-6 text-4xl font-semibold ml-16">Our Vision</h2>
          <p className="mt-4 text-lg px-4 md:px-10">
            At Krishi Setu, we envision a world where farmers are empowered to thrive by connecting directly with
            consumers. By leveraging technology and removing unnecessary barriers, we’re building a platform that
            promotes fairness, sustainability, and growth in the agricultural sector.
          </p>
          <p className="mt-4 text-lg px-4 md:px-10">
            Join us in creating a better future for farmers, consumers, and communities worldwide.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Content_on_home_page
