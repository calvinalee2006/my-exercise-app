import React from 'react'
import OlderCoupleWalking from './cardioImages/OlderCoupleWalking.jpg'
import RunningBuddies from './cardioImages/running-buddies.jpg'
import {NavLink,useNavigate} from 'react-router-dom';

const cardio =() => {
    const navigate = useNavigate()
    return (
     /*Add more to this segment.  */
      <>
         <h1>Cardio</h1>
     <p>Cardio exercises is the first type of exercise a person thinks of when wanting to get back into shape. 
        Cardio  is anything that will:<br /><br />

            A. Raises your heart and breathing rate<br />
            B. Improves the function of your heart, lungs and circulatory system<br />
            Trevor Thieme, C.S.C.S and Beachbody's senior manager of fitness and nutrition <a href="https://www.beachbodyondemand.com/blog/what-is-cardio">Here</a> 
     </p>
     <p>Cardio does not have to be a marathon run or climbing Mt.Everest, It can be something simple as
        going outside and playing with children or yard work. Here are some more examples of exercise: 
        </p>
        <ul>
            <li>walking</li>
            <li>Running</li>
            <li>Cycling</li>
            <li>Swimming</li>
            <li>Sports activities (golf, swimming, basketball, etc.)</li>
            <li>Jumping Rope</li>
        </ul>

        <p> Just to name a few!</p>

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
      <img src={OlderCoupleWalking} width={200} height ={200} alt= "This is an older couple walking" />
      <img src={RunningBuddies} width={200} height ={200} alt= "Two women running" />
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
        <button onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="WeightTraining">
            <button>Next</button>
            </NavLink>
            </div>
      </>
    )
  }

export default cardio
