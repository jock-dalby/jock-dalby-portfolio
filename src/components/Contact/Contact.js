import './Contact.scss';

import { Loader } from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <AnimatedLetters delay={3000} str="Contact me" idx={15} />
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
