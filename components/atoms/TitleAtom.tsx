import React from 'react';

interface TitleProps {
  text: string;
}

const TitleAtom: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="text-4xl font-bold">{text}</h1>;
};

export default TitleAtom;
