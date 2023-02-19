import React from 'react'
import { NavLink } from 'react-router-dom'
import bumKicks from './stretchingImages/bumkicks.jpg'
import highknee from './stretchingImages/highknee.jpg'
import deadhang from './stretchingImages/deadhang.jpg'
import cobra from './stretchingImages/cobra.jpg'
import headToKnee from './stretchingImages/headtokneeforwardbend.jpg'
import overhead from './stretchingImages/overheadtricepstretch.jpg'
import dynamicstretch from "./stretchingImages/dynamicstretch.jpg"
import fullbodystretch from './stretchingImages/fullbodystretch.jpg'

const stretching = () => {
  return (
    <>
      <h1>Stretching</h1>

      <p>Stretching is a form of physical exercise in which a specific muscle or tendon (or muscle group)
        is deliberately flexed or stretched in order to improve muscles felt elasticity, flexibility and range
        of motion. </p>

        <p>For beginners, stretching seems like a waste of time, and tends to remind us of how horrible the 
            beginning of gym class was for us growing up. People skip stretching because they feel it is a waste
            of time and energy, when in reality it is a way from causing injury, helps the flexibility of your 
            muscles and gets your body ready for the challenge ahead. 
        </p>

        <h2>Types of stretches</h2>

        <p><b>Dynamic</b> stretches are typically done before you start your workout and involves active movements
        that help get your muscles ready for exercise.</p>
        <p>Some examples of dynamic stretches are:</p>
        <ul>
            <li>Bum kicks 
              <img src={bumKicks} 
              width={200}
              height ={200}
              alt="Someone illustrating the bum kick stretch" 
                /> 

            <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/oaq2UiWXof8" 
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullscreen>
            </iframe>
            </li>

            <li>High knees 
              <img src ={highknee}
               width={200} 
               height={200} 
               alt="Someone illustrating the high knee stretch" />
               

               <iframe 
               width="560" 
               height="315" 
               src="https://www.youtube.com/embed/oDdkytliOqE" 
               title="YouTube video player" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullscreen>
               </iframe>
               </li>
            <li>Dynamic hang 
              <img 
              src ={deadhang} 
              width={200} 
              height={200} 
              alt="Someone illustrating the dynamic hang stretch" 
              />
              
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/3CEmHJXbNpc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen>
                </iframe>
                </li>
        </ul>

        <p><b>Static</b> stretches are preferred to be performed after your workout and involves stretches that 
        you hold in place for a period of time, without movement. This allows your muscles to loosen up, while
        increasing flexibility and range of motion.</p>
        <p>Some Examples of static stretches are:</p>
        <ul>
            <li>Cobra pose  
            <img 
            src ={cobra} 
            width={200} 
            height={200} 
            alt="Someone illustrating the cobra stretch" />
            
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/zgvolE4NAH0" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullscreen>
            </iframe>
            </li>
            <li>Head-to-knee-forward bend
              <img 
              src ={headToKnee} 
              width={200} 
              height={200} 
              alt="Someone illustrating the head-to-knee-forward bend stretch" 
              /> 
              <iframe
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/Z3xK3trnpfw" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen>
              </iframe>
              </li>
            <li>Overhead tricep extension 
              <img src ={overhead}
              width={200} 
              height={200}
              alt="Someone illustrating the over-head-to-tricep extension stretch" />
              
              <iframe 
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zzvDO56B0HE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen></iframe>
              </li>
        </ul>

        <p>If you have a problem figuring out a Dynamic stretch that works for you, here are some stretch routines
          that will help you get started. At some point during your routine, you will want to make some changes and 
          maybe add something to your routine, which is completely normal! For now I would like to show you a full body routine that 
          would work for any beginner.  {/* Find youtube videos and pictures, seperate dynamic and static stretches*/}
        </p>

        <h3>Dynamic Stretch examples</h3>
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pPlFSqXnbls"
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen></iframe>

        <img src={dynamicstretch} 
              width={200}
              height ={200}
              alt="A dynamic stretch chart" 
                /> 

        <h3>Static Stretch examples</h3>
        <p>Remember, static stretches are the main type of stretching that was performed during 
          gym class in school, the main goal is loosen up and feel a bit better <b>AFTER</b> you
          have performed your workout.
        </p>

        <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/aZ1PzhThqcU" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullscreen>
         </iframe>

        <img src={fullbodystretch} 
              width={200}
              height ={200}
              alt=" A chart of static stretches" 
                />
        {/*Later Note: Add Authors static and dynamic stretch routine */}

        <h2>Benefits of stretching</h2>

        <p><b><i>ALWAYS</i></b> make time for stretching!! Trainers and health professionals will always break 
        down the importance of stretching such as:<br />
        - Greater flexibility and range of motion <br />
        - Less pain and stiffness <br />
        - Decrease stress * Authors Note: Anyway to decrease stress is Awesome!* <br />
        - Increased blood flow </p>

        <h3>Authors Advice!</h3>
        <p>So from my experience exercising over the years, starting off with Dynamic stretches accomplishes 
          the listed goals and makes you feel better, but I always needed something more to warm me up. When I had achieved a 
          firmer grasp on a workout routine I added a small mini routine before I got the the main course. This routine was non-stop
          and I felt the blood really pumping. 
          My suggestion is once you get a great handle of what is works best for you, try and add this to the end of your dynamic stretch routine and 
          before your workout.
        </p>

        <ul>
          <li>Jumping jacks: 30 reps</li>
          <li>Push-ups: 30reps</li>
          <li>sit-ups or crunches: 30 reps </li>
          <li>pull-ups: 30 reps</li>
          <li> 5-10 min cool down</li>
        </ul>
      <div>
        <NavLink to="/">
            <button>Previous</button>
            </NavLink>
        <NavLink to="cardio">
            <button>Next</button>
            </NavLink>
            </div>

        
    </>
  )
}

export default stretching
