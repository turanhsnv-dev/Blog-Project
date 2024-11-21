import React from "react";
import "../../css/About.css";

const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 imagecol">
            <img src="https://preview.colorlib.com/theme/jobstart/images/img_1.jpg"></img>
          </div>
          <div className="col-sm-6 aboutcol">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur <br />
              atque perferendis, laudantium quod architecto velit ad officiis
              facere <br />
              eveniet in fuga fugiat delectus rerum doloribus quos consectetur{" "}
              <br />
              unde, expedita, quibusdam corporis impedit quia sequi aliquid sit.{" "}
              <br />
              Ducimus labore molestias odio nam necessitatibus laboriosam vero{" "}
              <br />
              saepe enim nobis. Repudiandae quidem, sint earum dolorum <br />
              consequuntur dignissimos excepturi mollitia omnis aliquid,
              corporis, <br />
              unde!
            </p>
            <ul>
              <div>
                <i className="fa-solid fa-check"></i>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <li>Lorem ipsum dolor sit amet.</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="textcenter">
          <h1>Our Team</h1>
        </div>
        <div className="row cards">
          <div className="col-sm-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://preview.colorlib.com/theme/jobstart/images/person_4.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Turan Hasanov</h4>
                <p className="card-text">Front-End Developer</p>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://preview.colorlib.com/theme/jobstart/images/person_4.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Emin Hamzayev</h4>
                <p className="card-text">Front-End Developer</p>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://preview.colorlib.com/theme/jobstart/images/person_4.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Tamerlan Mammadov</h4>
                <p className="card-text">Front-End Developer</p>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://preview.colorlib.com/theme/jobstart/images/person_4.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Elvin Umudov</h4>
                <p className="card-text">Front-End Developer</p>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card">
              <img
                className="card-img-top"
                src="https://preview.colorlib.com/theme/jobstart/images/person_4.jpg"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">Rufat Huseynov</h4>
                <p className="card-text">Front-End Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
