import React from 'react'
import Slider from "react-slick";
import AdultBiking from "./cardioImages/active_adult_biking.jpg";
import Elliptical from "./cardioImages/Elliptical.jpg";
import Rowing from "./cardioImages/rowing.jpg";
import Pool from "./cardioImages/swimmingatthepool.jpg";
import MowingGrass from "./cardioImages/yardwork.jpg";
import RunningBuddies from './cardioImages/running-buddies.jpg'
import RunFast from "./cardioImages/running.jpg";
import SpinClass from "./cardioImages/spinning.jpg";
import TabataClass from "./cardioImages/tabata.jpg";
import Crossfit from "./cardioImages/crossfit.jpg"
import {NavLink,useNavigate} from 'react-router-dom';

export default function Cardio() {
    const navigate = useNavigate()

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <>
         <h1 className="cardioHeading">Cardio</h1>
         <div className="container">
         <p className="cardioArticle">
          Cardio fitness is a health-related component of physical fitness that is 
          brought about by sustained physical activity. The type of physical activity can be low intensity
          (walking, a moderate bicycle ride or playing at the pool) to high intensity (running, HIIT training, or biking uphill). 
          The purpose of cardio is to raise your heart rate, raising your heart rate helps to deliver oxygen to 
          your muscles, and delivering oxygen to your muscles can increase blood flow in your body and help with deep breathing.
          </p>

          <p className ="typeOne">Low-Intensity cardio</p>
          
          <div className="lowIntensity">
  <ul className ="lowIntensityList">
    <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Walking"> Walking</a></li>
    <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Swimming_(sport)">  Swimming</a></li>
    <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Cycling"> cycling</a></li>
    <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Rowing_(sport)"> Rowing</a></li>
    <li className ="dashed">Elliptical Machine</li>
    <li className ="dashed">Yard Work</li>
  </ul>
  <ul className ="lowIntensityList">
    <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Yoga">Yoga</a></li>
    <li className ="dashed">Physical activity with your partner</li>
    <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Dance"> Dancing</a></li>
    <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Hiking">Hiking</a></li>
    <li className ="dashed"><a href= "https://en.wikipedia.org/wiki/Tai_chi">Tai Chi</a></li>
  </ul>

  <Slider className="sliderOne" {...settings}>
      <div>
        <img
          src={RunningBuddies}
          alt="Two women running"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <img
          src={AdultBiking}
          alt="Two older people riding bikes"
          style={{ width: '100%', }}
        />
        </div>
        <div>
        <img
          src={Elliptical}
          alt="women on an elliptical machine"
          style={{ width: '100%', }}
        />
        </div>
        <div>
        <img
          src={Rowing}
          alt="Man rowing"
          style={{ width: '100%', }}
        />
        </div>
        <div>
        <img
          src={Pool}
          alt="women at the pool"
          style={{ width: '100%', }}
        />
        </div>
        <div>
        <img
          src={MowingGrass}
          alt="Kid doing Yard work"
          style={{ width: '100%', }}
        />
      </div>
    </Slider>  
</div>
 <p className ="typeTwo"> High Intensity cardio</p>

         <div className="highIntensity">
          <Slider className="sliderTwo" {...settings}>
      <div>
        <img
          src={RunFast}
          alt="People running a marathon"
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <img
          src={SpinClass}
          alt="People in a spinning class"
          style={{ width: '100%', }}
        />
        </div>
        <div>
        <img
          src={TabataClass}
          alt="women in Tabata class"
          style={{ width: '100%', }}
        />
        </div>
        <div>
        <img
          src={Rowing}
          alt="Man rowing"
          style={{ width: '100%', }}
        />
        </div>
        <div>
        <img
          src={Crossfit}
          alt="women at the pool"
          style={{ width: '100%', }}
        />
        </div>
      
    </Slider>  
    <ul className ="highIntensityList">
            <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Running">Running</a></li>
            <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/Skipping_rope">Jumping rope</a></li>
            <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/High-intensity_interval_training">H.I.I.T training</a> </li>
            <li className ="dashed"><a href ="https://en.wikipedia.org/wiki/CrossFit">CrossFit</a></li>
            <li className ="dashed">stair climber machine</li>
          </ul>
          <ul className ="highIntensityList">
            <li className ="dashed"><a href="https://en.wikipedia.org/wiki/Spinning_(cycling)">Spinning</a></li>
            <li className ="dashed"><a href="https://en.wikipedia.org/wiki/Sprint_(running)">Sprinting</a></li>
            <li className ="dashed"><a href="https://en.wikipedia.org/wiki/Circuit_training">Circuit training</a></li>
            <li className ="dashed">Swimming</li>
          </ul>
          </div>
           <div className = "cardioParagraph">
        <p><b>Remember</b> you just need to keep the intensity high enough to challenge your heart and lungs!</p>

        <p>A study in the <i>Journal of Physiology</i> found that <b>Four to five cardio workouts a week is optimal 
            for cardiovascular health</b>.You can read more about how to pick which cardio exercise is right for you <a href="https://www.beachbodyondemand.com/blog/what-is-cardio">Here</a>  if you would like to learn more.</p>

            <p>For now this is how we recommend you starting with one of these cardiovascular activities:<br /><br />
            - Start off with a nice walk through your local area for approx. 10-15 minutes. This small walk will give you 
            a chance to enjoy nature at its finest. Have a friend, family member or spouse join you for your exercise. Having someone with you
            makes exercise easier and will help your mind at ease. <br /><br />

            -If the weather is not cooperating and you have to stay inside, we recommend using youtube and finding a nice 30 min cardio workout! </p>
            <p>Here are two examples of beginner exercise videos that you can try! If those are not to your liking, you can always visit <a href="https://www.youtube.com/">youtube</a> and find one that fits your speed.</p><br />
            <div>
     </div>
            
            <div className= "cardioVideos">
              <div className = "cardioVidOne">
            <iframe
            width="500" 
            height="315" 
            src="https://www.youtube.com/embed/ml6cT4AZdqI"
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
            </iframe>
            </div>

            <div className ="cardioVidTwo">
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/4o3iAH_ddBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
            </iframe>
            </div>
            </div>
                 
         <p> You start you will notice small progressions in yourself as you continue with along your cardio exercises. Maybe you finished your workout with ease, maybe you don't sweat as much as when you first started, 
          maybe your workout is getting kind of boring. Once you start noticing these progressions then you can start increasing the difficulty. Try working out with different cardio methods! Extend your walk by 5-10 minutes,
         the option to increase the difficulty are endless!  
         </p>
         </div>
        <div>
        <button className="btn-left" onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="WeightTraining">
            <button className="btn-right">Next</button>
            </NavLink>
            </div>
            </div>
      </>
    )
  }


