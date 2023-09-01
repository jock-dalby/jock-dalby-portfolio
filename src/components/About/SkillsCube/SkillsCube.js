import './SkillsCube.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const SkillsCube = () => (
  <div className="stage-cube-container">
    <div className="cube-spinner">
      {CUBE_FACES.map(({ icon, color }, i) => {
        return (
          <div className={`face${i + 1}`} key={i}>
            <FontAwesomeIcon icon={icon} color={color} />
          </div>
        );
      })}
    </div>
  </div>
);

export default SkillsCube;
