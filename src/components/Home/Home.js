import './Home.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import WaveEffect from './WaveEffect/WaveEffect';

const STRINGS = ['Hi,', `I'm Jock,`, 'web developer.'];

const getStartingIdx = (strIdx) => {
  let idx = 10; // 1 sec;
  for (let i = 0; i < strIdx; i++) {
    idx += STRINGS[i].length;
  }
  return idx;
};

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="title-letters">
          {STRINGS.map((str, strIdx) => (
            <span key={strIdx}>
              <AnimatedLetters
                delay={4000}
                str={str}
                idx={getStartingIdx(strIdx)}
              />
              {strIdx !== STRINGS.length - 1 && <br />}
            </span>
          ))}
        </div>
        <h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <WaveEffect />
    </div>
  );
};

export default Home;
