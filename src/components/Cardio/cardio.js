import React from 'react'
import Slider from "react-slick";
// import OlderCoupleWalking from './cardioImages/OlderCoupleWalking.jpg'
import RunningBuddies from './cardioImages/running-buddies.jpg'
import {NavLink,useNavigate} from 'react-router-dom';

export default function Cardio() {
    const navigate = useNavigate()

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <>
      
      
         <h1 className="cardioHeading">Cardio</h1>
         <div className="container">
         <p>
          Cardio fitness is a health-related component of physical fitness that is 
          brought about by sustained physical activity. The type of physical activity can be low intensity
          (walking, a moderate bicycle ride or playing at the pool) to high intensity (running, HIIT training, or biking uphill). 
          The purpose of cardio is to raise your heart rate, raising your heart rate helps to deliver oxygen to 
          your muscles, and delivering oxygen to your muscles can increase blood flow in your body and help with deep breathing.
          </p>

          <p>Low-Intensity cardio</p>
          
          <div className="lowIntensity">
  <ul>
    <li>Walking</li>
    <li>Swimming</li>
    <li>cycling</li>
    <li>Rowing</li>
    <li>Elliptical</li>
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
          src={RunningBuddies}
          alt="Two women running"
          style={{ width: '100%' }}
        />
      </div>
    </Slider>
   
</div>;
 











        {/* <div className="highIntensity">
          <ul>
            <p>High-Intensity cardio</p>
            <li>Running</li>
            <li>Jumping rope</li>
            <li>H.I.I.T training (High Intensity Interval training)</li>
            <li>CrossFit</li>
            <li>stair climber machine</li>
          </ul>
          </div> */}
       
          


     
        {/* <p>Cardio  is anything that will:<br /><br />

            A. Raises your heart and breathing rate<br />
            B. Improves the function of your heart, lungs and circulatory system<br />
            Trevor Thieme, C.S.C.S and Beachbody's senior manager of fitness and nutrition <a href="https://www.beachbodyondemand.com/blog/what-is-cardio">Here</a> 
     </p>
     <p>Cardio does not have to be a marathon run or climbing Mt.Everest, It can be something simple as
        going outside and playing with children or yard work. Here are some more examples of exercise: 
        </p> */}


        <p><b>Remember</b> you just need to keep the intensity high enough to challenge your heart and lungs!</p>
        <p>A study in the <i>Journal of Physiology</i> found that <b>Four to five cardio workouts a week is optimal 
            for cardiovascular health</b><br />
            - You can read more about how to pick which cardio exercise is right for you <a href="https://www.beachbodyondemand.com/blog/what-is-cardio">Here</a>  if you would like to learn more.</p>
            <p>For now this is how we recommend you starting with one of these cardiovascular activities:<br />
            - Start off with a nice walk through your local area for approx. 10-15 minutes. This small walk will give you 
            a chance to enjoy nature at its finest. Have a friend, family member or spouse join you for your exercise. Having someone with you
            makes exercise easier and will help your mind at ease. <br />
            <div>
              {/*Maybe a carousel of people running should be made later in the styling processa */}
      
      
     </div>
            -If the weather is not cooperating and you have to stay inside, we recommend using youtube and finding a nice 30 min cardio workout! 
            <p>Here are two examples of beginner exercise videos that you can try! If those are not to your liking, you can always visit <a href="https://www.youtube.com/">youtube</a> and find one that fits your speed.</p>
            
            <iframe
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/ml6cT4AZdqI"
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>

            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/4o3iAH_ddBQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
            </iframe>
                 
         </p>
         <p> You start you will notice small progressions in yourself as you continue with along your cardio exercises. Maybe you finished your workout with ease, maybe you don't sweat as much as when you first started, 
          maybe your workout is getting kind of boring. Once you start noticing these progressions then you can start increasing the difficulty. Try working out with different cardio methods! Extend your walk by 5-10 minutes,
         the option to increase the difficulty are endless!  
         </p>
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


