import { useEffect, useState } from 'react'
import projImg1 from '../../assets/images/timerack.jpeg'
import projImg2 from '../../assets/images/Travelxp.jpeg'
import projImg3 from '../../assets/images/Sunwing.jpeg'
import projImg4 from '../../assets/images/Tranquilo.jpeg'
import projImg5 from '../../assets/images/coopervision.jpeg'
import 'animate.css'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [selectedProject, setSelectedProject] = useState('Timerack')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const projects = [
    {
      title: 'Timerack',
      description: 'Time & Attendance, Payroll Intefrations and HR Services',
      imgUrl: projImg1,
    },
    {
      title: 'TravelXp',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Sunwing',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Coopervision',
      description: 'Design & Development',
      imgUrl: projImg5,
    },
    {
      title: 'Tranquilo',
      description: 'Design & Development',
      imgUrl: projImg4,
    },
  ]

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <ul>
            {projects.map((project, index) => (
              <li
                className="project-list"
                key={index}
                onClick={() => setSelectedProject(project.title)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="project-wrap">
          <ProjectCard {...projects.find((c) => c.title === selectedProject)} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
