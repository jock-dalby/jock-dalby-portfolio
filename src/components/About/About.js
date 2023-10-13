import './About.scss';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import SkillsCube from './SkillsCube/SkillsCube';
import { Loader } from 'react-loaders';

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <AnimatedLetters delay={3000} str={'About me'} idx={15} />
          <p>
            I'm an ambitious frontend developer, who loves to dive into
            challenging and diverse projects that let me work with the latest
            and greatest technologies.
          </p>
          <p>
            I'm social, naturally curious and always looking for ways to improve
            my skillset.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of two wonderful children, a football fanatic,
            fitness enthusiast, and love all things tech!
          </p>
        </div>
        <div className="skills-cube-container">
          <SkillsCube />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
