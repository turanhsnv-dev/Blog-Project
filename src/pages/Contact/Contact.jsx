import React from "react";
import "../../css/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab
          repellendus voluptates<br></br> assumenda itaque explicabo, impedit
          aut laborum neque voluptatem?
        </p>
      </div>

      <div className="containerwb">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h3>Adress</h3>
              <p>
                Sumqayit seher Sulh plaza <br></br>3cu mertebe otaq 310
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>000-000-000</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>forumaz@gmali.com</p>
            </div>
          </div>
          <h2 className="txt">Contact with us</h2>
          <ul className="sml">
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="contactForm">
          <form>
            <h2>Send Mesage</h2>
            <div className="inputBox">
              <input type="text" />
              <span>Full Name</span>
            </div>

            <div className="inputBox">
              <input type="text" />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <textarea />
              <span>Send your measage</span>
            </div>

            <div className="inputBox">
              <input type="submit" value="Send" className="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
