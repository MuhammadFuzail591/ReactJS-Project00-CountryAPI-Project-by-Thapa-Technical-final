import { FaLongArrowAltRight } from "react-icons/fa";

function HeroSection() {
  return (
    <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the world, One Country At a Time.
            </h1>
            <p className="paragraph">
              Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
          <div className="hero-image">
            <img className="banner-image" src="/images/World2.png" alt="Word Picture" />
          </div>
        </div>
      </main>
  )
}

export default HeroSection