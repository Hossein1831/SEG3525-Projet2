import Design from "../images/designer.png";
import business from "../images/business.png";
import math from "../images/math.png";
import AI from "../images/AI.png";
import programming from "../images/Coding.png";
import webdev from "../images/webdev.png";
import gamedev from "../images/gamedev.png";
import communication from "../images/communication.png";

import { TbBusinessplan } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";
import onlineCourses from "../images/onlineCourses.jpg";

function Programs() {
  return (
    <div className="programPage">
      <div className="whichPage">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Programs
            </li>
          </ol>
        </nav>
      </div>
      <div className="lilIntroOnPrograms">
        <div className="rogImgCol col-6">
          <img src={onlineCourses} alt="programs" className="programImage" />
        </div>
        <div className="progParCol col-6">
          <p>Find the program that suits you the best</p>
        </div>
      </div>
      <div className="findPrograms">
        <div className="filter">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              <TbBusinessplan size={30} />
              <span className="filterNames">Business</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              <GiMaterialsScience size={30} />
              <span className="filterNames">Math & Science</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              <MdOutlineWeb size={30} />
              <span className="filterNames">Web Development</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              <IoGameController size={30} />
              <span className="filterNames">Game Development</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              <MdOutlineDesignServices size={30} />
              <span className="filterNames">Design</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              <BiCodeBlock size={30} />
              <span className="filterNames">Programming</span>
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              <GiArtificialIntelligence size={30} />
              <span className="filterNames">Artificial Intelligence</span>
            </label>
          </div>
        </div>
        <div className="programs">
          <div className="programBoxes">
            <div className="Design card">
              <img src={Design} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">2D Design</h5>
                <p className="card-text">
                  Learn how to design 2D animations for your game developments
                  on a VR.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <MdOutlineDesignServices size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="Design card">
              <img src={Design} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">3D Design</h5>
                <p className="card-text">
                  Learn to design 3D arts for your VR games, AR applications and
                  MR.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <MdOutlineDesignServices size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="MathSc card">
              <img src={math} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Applied Sciences</h5>
                <p className="card-text">
                  Study sciences to increase your knowledge.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <GiMaterialsScience size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="BusMark card">
              <img src={business} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Business and Marketing</h5>
                <p className="card-text">
                  Become a business and marketing expert with this course. It
                  will help you if you start your own company.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <TbBusinessplan size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="BusMark card">
              <img src={communication} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Communications</h5>
                <p className="card-text">
                  Learn the tricks of communication between professional people
                  to help you in your business career.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <TbBusinessplan size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="coding card">
              <img src={programming} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">C++ & OOP</h5>
                <p className="card-text">
                  Learn the basics of object otiented programming with C++.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <BiCodeBlock size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="coding card">
              <img src={programming} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">C#</h5>
                <p className="card-text">
                  Learn C# to help you in scripting for Unity.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <BiCodeBlock size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="AI card">
              <img src={AI} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Deep Learning</h5>
                <p className="card-text">
                  Deep learning will help you understand how to make Artificial
                  Intelligence. You can create the next Google Assistant or a
                  real life J.A.R.V.I.S. assistant.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <GiArtificialIntelligence size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="webdev card">
              <img src={webdev} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">HTML & CSS & JS</h5>
                <p className="card-text">
                  These tools, will help you get started in web development.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <MdOutlineWeb size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="AI card">
              <img src={AI} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Machine Learning</h5>
                <p className="card-text">
                  Machine Learning is one of the most important aspects of AI.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <GiArtificialIntelligence size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="MathSc card">
              <img src={math} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Mathematics</h5>
                <p className="card-text">Gain more knowledgein mathematics.</p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <GiMaterialsScience size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="MathSc card">
              <img src={math} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Physics</h5>
                <p className="card-text">
                  Physics is really important in VR development.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <GiMaterialsScience size={30} />
                  </span>
                </div>
              </div>
            </div>

            <div className="webdev card">
              <img src={webdev} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">React Development</h5>
                <p className="card-text">
                  After learning the basics of web development, learn React JS,
                  to create beautiful web applications.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <MdOutlineWeb size={30} />
                  </span>
                </div>
              </div>
            </div>
            <div className="gamedev card">
              <img src={gamedev} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Unity</h5>
                <p className="card-text">
                  One of the most popular game engines for game development.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <IoGameController size={30} />
                  </span>
                </div>
              </div>
            </div>
            <div className="gamedev card">
              <img src={gamedev} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Unreal Engine</h5>
                <p className="card-text">
                  One of the most popular game engines for game development.
                </p>
                <div className="btnLegend">
                  <a href="/Admission1" className="btn btn-primary">
                    Start Enrolling
                  </a>
                  <span className="courseIcon">
                    <IoGameController size={30} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
