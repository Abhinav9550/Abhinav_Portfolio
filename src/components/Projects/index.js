import { useEffect, useState } from 'react'
import projImg1 from "../../assets/images/project-img1.png";
import projImg2 from "../../assets/images/project-img2.png";
import projImg3 from "../../assets/images/project-img3.png";
import 'animate.css';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { ProjectCard } from './ProjectCard';





export const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (


    <>
    <div className="container portfolio-page" style={{'display' :'flex' , 'flexDirection' : 'row' , 'justifyContent' : 'space-between'}}>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e','c', 't', 's']}
            idx={15}
          />
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="stage-cube-cont">
            return (
                <div className="proj-imgbx">
                    <img src={projects[0].imgUrl} />
                    <div className="proj-txtx">
                    <h4>{projects[0].title}</h4>
                    <span>{projects[0].description}</span>
                </div>
      </div>
                             
                )



                        {/* {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        } */}
                    
              </div>
    </div>
    <Loader type="pacman" />
  </>




          
  )
}
