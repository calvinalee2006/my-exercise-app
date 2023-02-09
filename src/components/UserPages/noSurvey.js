import React from 'react'
import Video from './YoutubeVideoEmbed'
import OlderCoupleWalking from './noSurveyImages/OlderCoupleWalking.jpg'
import RunningBuddies from './noSurveyImages/running-buddies.jpg'
import {NavLink} from 'react-router-dom';

function NoSurvey() {
  return (
    <>
     <p>Like we said before, adopting a healthy lifestyle into your weekly routine is going 
        to seem difficult, but the best way to make this change is to start with small goals 
        and a slow start. 
     </p>
     
     <h2>Cardio</h2>
     <p>From personal experience, cardio exercises is the first type of exercise a person thinks
        of when wanting to get back into shape. Cardio fitness is anything that will:<br />
            A. Raises your heart and breathing rate<br />
            B. Improves the function of your heart, lungs and circulatory system states
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
            <li>Sports activities</li>
            <li>Jumping Rope</li>
            <li>Playing outside with your children</li>
        </ul>
        <p> Just to name a few!</p>
        <p><b>Remember</b> you just need to keep the intensity high enough to challenge your heart and lungs!</p>
        <p>A study in the <i>Journal of Physiology</i> found that <b>Four to five cardio workouts a week is optimal 
            for cardiovascular health</b><br />
            - You can read more about how to pick which cardio exercise is right for you <a href="https://www.beachbodyondemand.com/blog/what-is-cardio">Here</a>  if you would like to learn more.</p>
            <p>For now this is how we recommend you starting with one of these cardiovascular activities:<br />
            - Start off with a nice walk through your local area for approx. 30 minutes. This small walk will give you 
            a chance to enjoy nature at its finest. Have a friend, family member or spouse join you for your exercise. Having someone with you
            makes exercise easier and will help your mind at ease. <br />
            <div>
              {/*Maybe a carousel of people running should be made later in the styling processa */}
      <img src={OlderCoupleWalking} width={200} height ={200} alt= "This is an older couple walking" />
      <img src={RunningBuddies} width={200} height ={200} alt= "Two women running" />
     </div>
            -If the weather is not cooperating and you have to stay inside, we recommend using youtube and finding a nice 30 min workout! 
            {/*Fix video playback */}
            <p>Here are two examples of beginner exercise videos that you can try! If those are not to your liking, you can always visit <a href="https://www.youtube.com/">youtube</a> and find one that fits your speed.</p>
            <div>
              <Video videoId="https://youtu.be/gC_L9qAHVJ8" />
              <Video videoId ="https://youtu.be/M0uO8X3_tEA" />
            </div>
         </p>
         <p> Once you start you will notice small progressions in yourself. Maybe you finished your workout with ease, maybe you don't sweat as much as when you first started, 
          maybe your workout is getting kind of boring. Once you start noticing these progressions then you can start picking up the pace a little more! Extend your walk by 5-10 minutes, workout to 
          two youtube videos instead of one, the options are endless!  
         </p>
         <p>One <b>IMPORTANT</b> habit to get into when workout out, is writing your your workouts down in a journal here is an example:<NavLink to="/WorkoutJournal">Here</NavLink> </p>
    </>
  )
}

export default NoSurvey