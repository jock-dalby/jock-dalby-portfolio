import './About.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
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
    </div>
  );
};

export default About;
