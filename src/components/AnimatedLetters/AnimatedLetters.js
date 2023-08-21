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
    <span>
      {str.split('').map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
