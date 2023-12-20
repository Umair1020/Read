import React from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import Test from "./Pages/Pricing/Test";
import Footer from "./components/Footer/Footer";
import Index from "./components/css/Info/Info";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { useMediaQuery } from "react-responsive";
const Landingpage = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 777 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const technologyLogos = [
    'logo1.svg',
    'logo2.svg',
    'logo3.svg',
    'logo4.svg',
    'logo1.svg',
    'logo2.svg',
    'logo3.svg',
    'logo4.svg',
    'logo1.svg',
    'logo3.svg',
    // Add more logo paths here
  ];
  return (
    <div>
      <Mobile>
        <Header />

        <div
          className=" mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-8 lg:py-20"
          style={{ background: "rgba(247, 249, 251, 1)", backgroundSize: "cover", backgroundPosition: "center", }}
        >
          <div className="row  p-10 " >
            <div className="col-lg-6 mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "50px",
                  lineHeight: "60px",


                }}
              >
                Chat with any PDF <br /> document.
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600 mr-10">
                From legal agreements to financial reports, brings your documents
                to life. You can ask questions, get summaries, find information,
                and more.
              </p>
              <div className="d-flex align-items-center mt-4">
                <button style={{ background: "rgba(30, 42, 127, 1)", padding: "12px", borderRadius: "12px", color: "#fff", marginRight: "12px" }}>Start For Free</button>
                <button><img src="/play.png" className="mx-3" /></button>
                <span >See How It Works</span>
              </div>

            </div>
            <div className="col-lg-6 sc-32a7df2f-4 kflDvB">
              <div style={{ position: "relative" }}>
                <img className="" src="/land1.svg" />
              </div>
            </div>
          </div>

          <section id="counts" className="counts section-bg">
            <div className="container">

              <div className="row justify-content-center align-items-center">

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>1 Million</h2>
                    <p>Active Users</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>5k</h2>
                    <p>Files Chats</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>10 Million</h2>
                    <p>Online Tools</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>500k</h2>
                    <p>PDF’s Coverted</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>

        <br /><br />
        <div className="row video">
          <div className="col-lg-12">
            <h2 className="text-center">How It Works</h2>
          </div>
          <div className="col-lg-12 d-flex mx-auto">
            <img className="w-75 mx-auto" src="/video.svg" />
          </div>
        </div>
        {/* <Index /> */}
        {/* <Detail /> */}
        <Test />
        <Footer />
      </Mobile>
      <Desktop>
        <Header />
        <hr />
        <div
          className="container mx-auto  px-6 pb-24 pt-10 sm:pb-32  lg:px-8 lg:py-20"
        >
          <div className="row  p-10" style={{ display: "flex", alignItems: "center" }} >
            <div className="col-lg-6 mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: "50px",
                  lineHeight: "60px",


                }}
              >
                Chat with any PDF <br /> document.
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600 mr-10">
                From legal agreements to financial reports, brings your documents
                to life. You can ask questions, get summaries, find information,
                and more.
              </p>
              <div className="d-flex align-items-center mt-4">
                <button style={{ background: "rgba(30, 42, 127, 1)", padding: "12px", borderRadius: "12px", color: "#fff", marginRight: "12px" }}>Start For Free</button>
                <img src="/play.svg" className="mx-3" />
                <span >See How It Works</span>
              </div>

            </div>
            <div className="col-lg-6 sc-32a7df2f-4 kflDvB">
              <div style={{ position: "relative" }}>
                <img className="" src="/topban.svg" />
              </div>
            </div>
          </div>
          <br /><br />
          <section id="counts" className="counts section-bg">
            <div className="container">

              <div className="row justify-content-center align-items-center">

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>1 Million</h2>
                    <p>Active Users</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>5k</h2>
                    <p>Files Chats</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>10 Million</h2>
                    <p>Online Tools</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2" className="purecounter"></span>
                    <h2>500k</h2>
                    <p>PDF’s Coverted</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div> <br /><br /><br />
        <section id="technologies" className="technologies d-flex section-bg " style={{ background: "rgba(216, 217, 229, 1)", padding: "30px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-10">
                <Swiper
                  slidesPerView={3} // Number of logos to show
                  spaceBetween={20} // Space between logos
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                  breakpoints={{
                    '@0.00': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    '@0.75': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '@1.00': {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    '@1.50': {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}

                  modules={[Autoplay]}


                  className="mySwiper1"
                >
                  {technologyLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <img src={logo} alt={`Tech Logo ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <br /><br />
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2 className="text-center">Features</h2>

            </div>

            <div className="row gy-5 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-8 lg:py-20">

              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="icon flex-shrink-0"><img src="/vector1.svg" /></div>
                <div>
                  <h4 className="title"><a href="#" class="stretched-link">Upload Documents</a></h4>
                  <p className="description">From legal agreements to financial <br /> reports, brings </p>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0"><img src="/vector2.svg" /></div>
                <div>
                  <h4 className="title"><a href="#" class="stretched-link">Instant Answers </a></h4>
                  <p className="description">From legal agreements to financial <br /> reports, brings </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <div className="icon flex-shrink-0"><img src="/vector3.svg" /></div>
                <div>
                  <h4 className="title"><a href="#" class="stretched-link">Sources Included</a></h4>
                  <p className="description">From legal agreements to financial <br /> reports, brings </p>
                </div>
              </div>




            </div>

          </div>
        </section> <br /> <br /> <br />
        <div className="row video" style={{ background: "rgba(247, 247, 247, 1)", padding: "26px" }}>
          <div className="col-lg-12">
            <h2 className="text-center">How It Works</h2>
          </div>
          <div className="col-lg-12 d-flex mx-auto">
            <img className="w-75 mx-auto" src="/video.svg" />
          </div>
        </div>
        <Test />
        <section id="about" className="about section-bg " style={{ background: "rgba(247, 247, 247, 1)", padding: "40px" }}>
          <div className="container " data-aos="fade-up">

            <div className="row no-gutters mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-4 ">
              <div className="  content col-xl-5 d-flex align-items-stretch">
                <div className="content">
                  <p>
                    Security
                  </p>
                  <h3>Everything for teams. Safe and sound.</h3>
                  <p>
                    From legal agreements to financial reports, brings your documents to life.You can ask questions, get summaries, find information, and more.
                  </p>

                </div>
              </div>
              <div className=" col-xl-7 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <img src="/serv1.svg" />
                      <h4>Security</h4>
                      <p>From legal agreements to financial reports, brings your documents to life.You can ask questions, get summaries, find information, and more.</p>
                    </div>
                    <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                      <img src="/serv2.svg" />
                      <h4>Security</h4>
                      <p>From legal agreements to financial reports, brings your documents to life.You can ask questions, get summaries, find information, and more.</p>
                    </div>
                    <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                      <img src="/serv3.svg" />
                      <h4>Security</h4>
                      <p>From legal agreements to financial reports, brings your documents to life.You can ask questions, get summaries, find information, and more.</p>
                    </div>
                    <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                      <img src="/serv4.png" />
                      <h4>Security</h4>
                      <p>From legal agreements to financial reports, brings your documents to life.You can ask questions, get summaries, find information, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="pricing" class="pricing section-bg">
          <div class="container" data-aos="fade-up">

            <div class="row d-flex  align-items-center">

              <div class="col-lg-6 col-md-6 sm:pb-32   lg:px-8 lg:py-20" data-aos="zoom-in" data-aos-delay="200">
                <h2>Seamless <br /> Experience Across Devices</h2>
                <p>From legal agreements to financial reports, brings your documents to life.You can ask questions, get summaries, find information, and more.</p>
              </div>

              <div class="col-lg-6 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                <img src="/frame2.svg" />
              </div>

            </div>

          </div>
        </section>
        <div class="container rounded"> <h3 class="tag">What Our Happy Client Say</h3> <p class=" text-center head">From legal agreements to financial reports, brings your documents to life.You can ask questions, get <br /> summaries, find information, and more.</p> <div class="row d-flex owl-carousel owl-theme mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32  lg:px-4"> <div class="col-lg-6 owl-item"> <div class=" card d-flex flex-column"> <div class="mt-2"> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star-half-alt active-star"></span> </div> <div class="testimonial">“From legal agreements to financial reports, brings your documents to life.You can ask questions, get summaries, find information, and more”
          Devid Weilium
          Researcher </div> <br />
          <div class="col-lg-6  d-flex flex-row profile pt-4 mt-auto">
            <img src="/testmonial.svg" alt="" class="rounded-circle" /> <div class=" d-flex flex-column pl-2"> <div class="name">Megan</div> <p class="text-muted designation">CEO of My Company</p> </div> </div> </div> </div> <div class="col-lg-6 owl-item"> <div class="card1 d-flex flex-column"> <div class="mt-2"> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star-half-alt active-star"></span> </div> <div class="main font-weight-bold pb-2 pt-1">Great Service</div> <div class="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div> <div class="d-flex flex-row profile pt-4 mt-auto">
              <img src="/testmonial.svg" alt="" class="rounded-circle" /> <div class="d-flex flex-column pl-2"> <div class="name">Megan</div> <p class="text-muted designation">CEO of My Company</p> </div> </div> </div>  <br /> <br /> <br /></div> <br /> <div class="col-lg-6 owl-item"> <div class="card d-flex flex-column"> <div class="mt-2"> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star-half-alt active-star"></span> </div> <div class="main font-weight-bold pb-2 pt-1">Great Service</div> <div class="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div> <div class="d-flex flex-row profile pt-4 mt-auto"> <img src="/testmonial.svg" alt="" class="rounded-circle" /> <div class="d-flex flex-column pl-2"> <div class="name">Megan</div> <p class="text-muted designation">CEO of My Company</p> </div> </div> </div> </div> <br /> <div class="col-lg-6 owl-item"> <div class="card d-flex flex-column"> <div class="mt-2"> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star active-star"></span> <span class="fas fa-star-half-alt active-star"></span> </div> <div class="main font-weight-bold pb-2 pt-1">Great Service</div> <div class="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div>  <div class="d-flex flex-row profile pt-4 mt-auto"> <img src="/testmonial.svg" alt="" class="rounded-circle" /> <div class="d-flex flex-column pl-2"> <div class="name">Megan</div> <p class="text-muted designation">CEO of My Company</p> </div> </div></div> </div> </div> </div>
        <Footer />
      </Desktop>
    </div>
  );
};

export default Landingpage;
