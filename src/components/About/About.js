import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const CUBE_FACES = [
  {
    icon: faAngular,
    color: '#DD0031',
  },
  {
    icon: faHtml5,
    color: '#F06529',
  },
  {
    icon: faCss3,
    color: '#28A4D9',
  },
  {
    icon: faReact,
    color: '#5ED4F4',
  },
  {
    icon: faJsSquare,
    color: '#EFD81D',
  },
  {
    icon: faGitAlt,
    color: '#EC4D28',
  },
];

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters delay={3000} str={'About me'} idx={15} />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established digital agency with the opportunity to work with the
          latest technologies on challenging and diverse projects.
        </p>
        <p align="LEFT">
          I'm quite confident, naturally curious, and perpetually working on
          improving my skillset.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of two beautiful children, a football fanatic, fitness
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
      <div className="stage-cube-container">
        <div className="cube-spinner">
          {CUBE_FACES.map(({ icon, color }, i) => {
            return (
              <div className={`face${i + 1}`}>
                <FontAwesomeIcon icon={icon} color={color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
