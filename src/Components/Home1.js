import React from "react";
import image2 from "./Images/image2.jpg";
import follow1 from "./Images/follow1.jpg"
import follow2 from "./Images/follow2.jpg"
import most1 from "./Images/mostViewed1.jpg"
import most2 from "./Images/mostViewed2.jpg"
import must1 from "./Images/must1.jpg"
import must2 from "./Images/must2.jpg"
import must3 from "./Images/must3.jpg"
import must4 from "./Images/must4.jpg"
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaVideo,
} from "react-icons/fa";

const Home1 = () => {
    const playlistUrl = 'https://www.youtube.com/watch?v=Sou12pLJFCc&list=PL5qo1Sl2GW3cMiepxpnY3vjo7MPM-ejBh';

  return (
    <div className="container">
      <div className="d-flex  w-100">
        <div className="w-75 ">
          <div className="border p-3 m-2">
            <h5 className="text-success bold"> Must Read </h5>
            <hr class="border-3  border-success my-4"></hr>
            <div className="w-100 d-flex">
            <div className=" position-relative w-50 px-2 ">
              <img
                src={follow1}
                alt="Description"
                className=" w-100  w-50 "
                style={{ height: "505px" }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h2>Overlay Title</h2>
                <p>This is some description text.</p>
                <button className="btn btn-primary">Click Me</button>
              </div>
            </div>
            <div className="w-50 ">
                <div className="d-flex pb-2">
                <img src={follow2}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe to use data ?</h6>
                </div>
                </div>
                <div className="d-flex pb-2">
                <img src={must1}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe to use data ?</h6>
                </div>
                </div><div className="d-flex pb-2">
                <img src={must2}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe to use data ?</h6>
                </div>
                </div><div className="d-flex pb-2">
                <img src={must3}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe to use data ?</h6>
                </div>
                </div>
                <div className="d-flex pb-2">
                <img src={must4}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe to use data ?</h6>
                </div>
                </div>
                
            </div>

            
            </div>
          </div>
          <div className="border p-3 m-2">
            <h3> Most Viewed </h3>
            <hr class="border-3 border-success my-4"></hr>
            <div>
            <div className="d-flex">
                <div className="px-1" >
              <img
                src={most1}
                alt="Description"
               
                style={{ height: "150px", width: "250px" }}
              />
              
              <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
              <h6 className="bold pt-1 px-2 " style={{ height: "150px", width: "250px" }}>Is the Designer Steroid is safe to use data ?</h6>
                
             
              </div>
              <div className="px-1" >
              <img
                src={most1}
                alt="Description"
               
                style={{ height: "150px", width: "250px" }}
              />
              
              <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
              <h6 className="bold pt-1 px-2 " style={{ height: "150px", width: "250px" }}>Is the Designer Steroid is safe to use data ?</h6>
                
             
              </div>
              <div className="px-1" >
              <img
                src={most1}
                alt="Description"
               
                style={{ height: "150px", width: "250px" }}
              />
              
              <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
              <h6 className="bold pt-1 px-2 " style={{ height: "150px", width: "250px" }}>Is the Designer Steroid is safe to use data ?</h6>
                
             
              </div>
            </div>
            {/* <div class="d-flex align-items-center">
  <span class="text-muted">..</span>
</div> */}
</div>
          </div>
        </div>
        <div className="w-25">
          <div className="border p-3 my-2">
            <h5 className="text-success bold">Follow Us</h5>
            <hr class="border-3 border-success my-4"></hr>
            <div className="">
              {/* Twitter Button */}
              <a
                href="https://twitter.com"
                className="btn d-flex align-items-center m-3"
                style={{
                  backgroundColor: "#1DA1F2",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                <FaTwitter style={{ marginRight: "10px" }} />
                <span
                  style={{
                    borderLeft: "2px solid white",
                    height: "20px",
                    margin: "0 10px",
                  }}
                ></span>
                5,000 Followers
              </a>

              {/* Instagram Button */}
              <a
                href="https://instagram.com"
                className="btn d-flex align-items-center m-3"
                style={{
                  backgroundColor: "#C13584",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                <FaInstagram style={{ marginRight: "10px" }} />
                <span
                  style={{
                    borderLeft: "2px solid white",
                    height: "20px",
                    margin: "0 10px",
                  }}
                ></span>
                3,000 Followers
              </a>

              {/* YouTube Button */}
              <a
                href="https://youtube.com"
                className="btn d-flex align-items-center m-3"
                style={{
                  backgroundColor: "#FF0000",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                <FaYoutube style={{ marginRight: "10px" }} />
                <span
                  style={{
                    borderLeft: "2px solid white",
                    height: "20px",
                    margin: "0 10px",
                  }}
                ></span>
                1M Subscribers
              </a>

              {/* X (formerly Twitter) Button */}
              <a
                href="https://x.com"
                className="btn d-flex align-items-center m-3"
                style={{
                  backgroundColor: "#000000",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                <FaTwitter style={{ marginRight: "10px" }} />
                <span
                  style={{
                    borderLeft: "2px solid white",
                    height: "20px",
                    margin: "0 10px",
                  }}
                ></span>
                2,000 Followers
              </a>

              {/* Facebook Button */}
              <a
                href="https://facebook.com"
                className="btn d-flex align-items-center m-3"
                style={{
                  backgroundColor: "#3b5998",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                <FaFacebook style={{ marginRight: "10px" }} />
                <span
                  style={{
                    borderLeft: "2px solid white",
                    height: "20px",
                    margin: "0 10px",
                  }}
                ></span>
                7,000 Likes
              </a>

              {/* Video Button */}
              <a
                href="https://video.com"
                className="btn d-flex align-items-center m-3"
                style={{
                  backgroundColor: "#FF4500",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                <FaVideo style={{ marginRight: "10px" }} />
                <span
                  style={{
                    borderLeft: "2px solid white",
                    height: "20px",
                    margin: "0 10px",
                  }}
                ></span>
                500 Views
              </a>
            </div>
          </div>
          <div className="border p-3 my-2">
            <h6 className="text-success bold">Last Modified</h6>
            <hr class="border border-success my-4"></hr>
           <div>

           <div className=" pb-2">
            <div className="d-flex">
                <img src={most2}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe ?</h6>
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                </div>
                </div>
                
                </div>
                <div className=" pb-2">
            <div className="d-flex">
                <img src={must2}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe ?</h6>
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                </div>
                </div>
                
                </div>
                <div className=" pb-2">
            <div className="d-flex">
                <img src={must4}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe ?</h6>
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                </div>
                </div>
                
                </div>
                <div className=" pb-2">
            <div className="d-flex">
                <img src={must3}  style={{ width: '100px', height: '100px'}}/>
                <div className="">
                
                <h6 className="bold pt-2 px-2 ">Is the Designer Steroid is safe ?</h6>
                <p style={{ fontSize: "12px", paddingLeft: '10px'}}> Oct 11, 2024 </p>
                </div>
                </div>
                
                </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
