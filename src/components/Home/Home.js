import './Home.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import WaveEffect from './WaveEffect/WaveEffect';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters delay={4000} str={'Hi,'} idx={10} />
          <br />
          <AnimatedLetters delay={4000} str={`I'm Jock,`} idx={13} />
          <br />
          <AnimatedLetters delay={4000} str={'web developer.'} idx={22} />
        </h1>
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
