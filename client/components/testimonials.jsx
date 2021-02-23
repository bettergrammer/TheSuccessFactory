const React = require('react');

const Testimonials = () => {
  return (
    <div id="testimonials">
      <h4>Testimonials</h4>
        <ul>
          <img src="../../images/KarenG.png" alt="Karen G. Testimonial" class="testimonialPic"></img>
          <li class="liTestimonial">
            "I would gladly pay over 600 dollars for The Success Plan." - Karen G.
          </li>
          <img src="../../images/LisaT.png" alt="List T. Testimonial" class="testimonialPic"></img>
          <li class="liTestimonial">
          "This is simply unbelievable! Jason is the coolest and the plan works! I like The Success Plan more and more each day because it makes my life a lot easier." - Lisa T.
          </li>
          <img src="../../images/BrandonQ.png" alt="Brandon Q. Testimonial" class="testimonialPic" id="brandon"></img>
          <li class="liTestimonial">
          "Thanks guys, keep up the good work! I would like to personally thank you for your outstanding product. I have gotten at least 50 times the value from The Success Plan." - Brandon Q.
          </li>
        </ul>
        <img src="../../images/more.jpg" alt="More Testimonials" id="more"></img>
    </div>
  )
}

module.exports = Testimonials;