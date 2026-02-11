import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import heroImage from "../../assets/school-hero.jpg";
import heroImage2 from "../../assets/School-hero2.jpg";
import heroImage3 from "../../assets/School-hero3.jpg";
import heroImage4 from "../../assets/School-hero4.jpg";

const HeroImages = [heroImage, heroImage2, heroImage3, heroImage4];

const Hero = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative w-full h-screen">
      <Slider {...settings}>
        {HeroImages.map((img, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Background Image */}
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-3xl px-6 md:px-12 lg:px-20">
                {/* School Name */}
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
                  BrightPath Academy
                </h1>

                {/* Tagline */}
                <p className="mt-2 text-lg md:text-xl font-body text-gray-200">
                  Shaping Future Leaders Since 2005
                </p>

                {/* Buttons */}
                <div className="mt-5 flex flex-col md:flex-row gap-4">
                  <a
                    href="/admissions"
                    className="bg-accent text-primary font-heading px-3 py-2 rounded-lg hover:opacity-90 transition"
                  >
                    Apply Now
                  </a>
                  <a
                    href="/contact"
                    className="border border-white text-white px-3 py-2 rounded-lg font-heading hover:text-primary transition"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
