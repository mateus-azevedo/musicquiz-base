import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/lady-guitar-player.json';

export default function LottieLady() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={250}
      width={250}
    />
  );
}
