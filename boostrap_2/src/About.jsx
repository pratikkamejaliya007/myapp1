import React from 'react'

function About() {
  return (
    <main id="main">
    {/* About Us Section */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-6 video-box">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
            <div className="section-title">
              <h2>About Us</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
            </div>
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bx-fingerprint"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Lists Section */}
    <section className="about-lists">
      <div className="container">
        <div className="row no-gutters">
          {/* Add col-lg-4 elements here */}
        </div>
      </div>
    </section>

    {/* Counts Section */}
    <section className="counts section-bg">
      <div className="container">
        <div className="row">
          {/* Add count-box elements here */}
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          {/* Add icon-box elements here */}
        </div>
      </div>
    </section>

    {/* Our Portfolio Section */}
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          {/* Add portfolio items here */}
        </div>
      </div>
    </section>

    {/* Our Team Section */}
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div className="row">
          {/* Add team members here */}
        </div>
      </div>
    </section>

    {/* Frequently Asked Questions Section */}
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="row d-flex align-items-stretch">
          {/* Add FAQ items here */}
        </div>
      </div>
    </section>

    {/* Contact Us Section */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          {/* Add contact form here */}
        </div>
      </div>
    </section>
  </main>
  )
}

export default About