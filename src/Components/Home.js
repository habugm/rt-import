

function Home() {
  return (
    <>
      
     <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <div className="info d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>RT IMPORT</h2>
            <p>RT Import delivers the air conditioning and electrical solutions you need to stay cool, powered, and efficient.</p>
              <a href="#get-started" className="btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={5000}>
      <div className="carousel-item active">
        <img src="assets/img/slide/1.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/2.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/3.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/4.jpg" alt />
      </div>
      
      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
      </a>
    </div>
  </section>{/* /Hero Section */}
  {/* Get Started Section */}
  <section id="get-started" className="get-started section">
  <div className="container">
    <div className="row justify-content-between gy-4">
      <div className="col-lg-6 d-flex align-items-center">
        <div className="content">
          <h3>About Us.</h3>
          <p><strong>RT Import plc.</strong> , established in 2025, is a dedicated supplier of air conditioning and electrical materials to the Ethiopian market. Built on a vision of reliability and quality, the company partners with trusted international manufacturers to ensure that its clients receive products that meet global standards. From cooling systems to essential electrical components, RT Import serves businesses, contractors, and individuals with solutions designed to bring efficiency, comfort, and durability.</p>
          
          <p>With a strong commitment to customer satisfaction, RT Import strives to bridge the gap between international innovation and local demand. By providing timely delivery, competitive pricing, and professional service, the company is positioned to play a key role in supporting Ethiopia’s growing infrastructure and development. Whether for commercial, residential, or industrial needs, RT Import stands as a reliable partner in powering progress and creating comfortable environments.</p>
        </div>
      </div>
      
      <div className="col-lg-5 d-flex align-items-center">
        <div className="w-100">
          <img src="assets/img/rt-logo.jpg" className="img-fluid rounded" alt="Yotek Construction" />
        </div>
      </div>
    </div>
  </div>
</section>
  <section id="services" className="services section light-background">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Services</h2>
      <p>We Mainly Provide 3 Types of Services</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            <div className="icon">
              <i class="bi bi-arrow-down-circle-fill" style={{color:'#0E87CC'}} />
            </div>
            <h3 style={{color:'#0E87CC'}}>Imports</h3>
            <p>RT Import provides trusted import services, specializing in delivering high-quality air conditioning and electrical materials from global suppliers to the Ethiopian market. By managing sourcing, logistics, and distribution, the company ensures that customers receive reliable products on time and at competitive prices, helping businesses and households access the modern solutions they need with ease and confidence.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-shop" style={{color:'#0E87CC'}} />
            </div>
            <h3 style={{color:'#0E87CC'}}>Retail Disribution</h3>
            <p>IIn addition to import services, RT Import operates retail distribution, making air conditioning and electrical materials directly available to customers across Ethiopia. By combining wholesale supply with retail accessibility, the company ensures that both businesses and individual buyers can access high-quality products quickly and conveniently. Through its retail channels, RT Import not only delivers reliable goods but also provides guidance and support, helping customers choose the right solutions for their specific needs.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-arrow-up-circle-fill" style={{color:'#0E87CC'}} />
            </div>
            <h3 style={{color:'#0E87CC'}}>Exports</h3>
            <p>Alongside its import and retail operations, RT Import is also engaged in exports, delivering locally sourced products to international markets. By building strong partnerships with suppliers and buyers, the company ensures that Ethiopian-made goods reach customers abroad with the same standards of quality and reliability that define its imports.</p>   
                   </div>
        </div>{/* End Service Item */}
        
      </div>
    </div>
  </section> 
  <section id="projects" className="features section">
    <div className="container section-title">
      <h2>Products</h2>
      <p>RT Import supplies quality air conditioning systems, electrical construction materials, and beer gauges for diverse industrial and commercial needs.</p>
    </div>
  <div className="container">
    <ul className="nav nav-tabs row  g-2 d-flex" role="tablist">
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
          <h4>Air Conditionig</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Electrical</h4>
        </a>{/* End tab nav item */}
      </li>
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Beer Gauge</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Others</h4>
        </a>
      </li>{/* End tab nav item */}
    </ul>
    <div className="tab-content" >
      <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
        <div className="row">
          
          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
  <div className="row">
    {/* Project 1 */}
    {/* <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div> */}
    <div
  className="col-6 col-lg-3 text-center mb-4"
  style={{ border: "2px solid yellow", padding: "2px" }}
>
  <img
    src="assets/img/air-conditioning/1.jpg"
    className="img-fluid rounded mb-2"
    alt="Project 1"
  />
  <h6>A</h6>
</div>

    {/* Project 2 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/2.jpg" className="img-fluid rounded mb-2" alt="Project 2" />
      <h6>B</h6>
    </div>

    {/* Project 3 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/3.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>C</h6>
    </div>

    {/* Project 4 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/4.jpg" className="img-fluid rounded mb-2" alt="Project 4" />
      <h6>D</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/5.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>E</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/6.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>F</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/7.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>G</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/air-conditioning/8.jpg" className="img-fluid rounded mb-2" alt="Project 3" />
      <h6>H</h6>
    </div>

  </div>
</div>

          
        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
        <div className="row">
          
          <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/2.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>B</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/3.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>C</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/4.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>D</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/5.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>E</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/6.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>F</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/7.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>G</h6>
    </div>

        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
        <div className="row">
         
         <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/2.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>B</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/3.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>C</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/4.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>D</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/5.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>E</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/6.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>F</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/7.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>G</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/beer-gauge/8.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>H</h6>
    </div>

        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
            <h3>RT IMPORT</h3>
            <p className="fst-italic">
              In addition to its core offerings, RT Import provides a wide range of supplementary products and services to meet the diverse needs of its customers. From specialized tools to installation support, the company ensures that clients receive comprehensive solutions that enhance efficiency, safety, and performance in their projects.
            </p>
            <ul>
              <li><i className="bi bi-check2-all" /> <span>Installation and maintenance support for air conditioning systems.</span></li>
              <li><i className="bi bi-check2-all" /> <span>Measurement instruments, including beer gauges and industrial gauges.</span></li>
              <li><i className="bi bi-check2-all" /> <span>Technical consultation and project support for commercial and industrial clients.</span></li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <img src="assets/img/rt-logo.jpg" alt className="img-fluid" />
          </div>
        </div>
      </div>{/* End tab content item */}
    </div>
  </div>
</section>
<section id="contact" className="contact section">
  <div className="container section-title">
      <h2>Contact US</h2>
      <p> Contact US with the following Informations</p>
    </div>
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-geo-alt" />
          <h3>Address</h3>
          <p>Sengatera Traders Union Building</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-telephone" />
          <h3>Call Us</h3>
          <p>+2519 12 48 87 57</p>
          <p>+2519 12 37 62 83</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-envelope" />
          <h3>Email Us</h3>
          <p>ceo@tekiimport.com</p>
        </div>
      </div>{/* End Info Item */}
    </div>
    <div className="row gy-4 mt-1">
      <div className="col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5459658486293!2d38.744823774084054!3d9.013857489227739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850639656a19%3A0xd21aa0860843071!2sTekiy%20Air%20Conditioner%20And%20Electric%20Materials%20Import!5e0!3m2!1sen!2set!4v1758460328477!5m2!1sen!2set" frameBorder={0} style={{border: 0, width: '100%', height: 400}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>{/* End Google Maps */}
      <div className="col-lg-6">
        <form action="forms/contact.php" method="post" className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</section>{/* /Contact Section */}


</main>



    </>
  );
}

export default Home;
