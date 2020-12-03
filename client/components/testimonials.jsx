const React = require('react');

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h4>Testimonials</h4>
        <ul>
          <img src="../../KarenG.png" alt="Karen G. Testimonial" class="testimonialPic"></img>
          <li class="liTestimonial">
            "I would gladly pay over 600 dollars for The Success Plan." - Karen G.
          </li>
          <img src="../../LisaT.png" alt="List T. Testimonial" class="testimonialPic"></img>
          <li class="liTestimonial">
          "This is simply unbelievable! No matter where you go, The Success Plan is the coolest, most happening thing around! I like The Success Plan more and more each day because it makes my life a lot easier." - Lisa T.
          </li>
          <img src="../../BrandonQ.png" alt="Brandon Q. Testimonial" class="testimonialPic" id="brandon"></img>
          <li class="liTestimonial">
          "Thanks guys, keep up the good work! I would like to personally thank you for your outstanding product. I have gotten at least 50 times the value from The Success Plan." - Brandon Q.
          </li>
        </ul>
    </div>
  )
}

module.exports = Testimonials;