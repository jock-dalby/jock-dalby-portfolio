import './AnimatedLetters.scss';
import { useEffect, useState } from 'react';

const AnimatedLetters = ({ delay, str, idx }) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, delay);
  });

  return (
    <h1>
      {str.split('').map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedLetters;
