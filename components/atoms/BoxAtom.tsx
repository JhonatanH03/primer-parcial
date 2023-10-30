import React from 'react';

interface BoxProps {
  image: string;
  title: string;
}

const BoxAtom: React.FC<BoxProps> = ({ image, title }) => {
  return (
    <div className="rounded flex flex-col items-center justify-center py-10 border-2 border-gray-200">
      <div className="w-32 h-32 p-4">
        <img alt={title} src={image} />
      </div>
      <div className="font-bold mt-4 text-bold">{title}</div>
    </div>
  );
};

export default BoxAtom;