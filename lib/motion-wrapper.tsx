"use client"

import React from 'react';

type MotionProps = {
  initial?: any;
  animate?: any;
  transition?: any;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const createMotionComponent = (Component: 'div' | 'p' | 'h1' | 'h2') => {
  return ({ children, initial, animate, transition, className, style, onClick }: MotionProps) => {
    // All hooks must be called unconditionally at the top level
    const [isClient, setIsClient] = React.useState(false);
    const [animationState, setAnimationState] = React.useState(initial || {});

    React.useEffect(() => {
      setIsClient(true);
    }, []);

    React.useEffect(() => {
      if (isClient && animate) {
        const timeoutId = setTimeout(() => {
          setAnimationState(animate);
        }, (transition?.delay || 0) * 1000);

        return () => clearTimeout(timeoutId);
      }
    }, [animate, transition?.delay, isClient]);

    // Compute the final style object based on client-side state
    const animationStyle = isClient
      ? {
          ...style,
          ...animationState,
          transition: `all ${transition?.duration || 0.3}s ${transition?.ease || 'ease-in-out'} ${
            transition?.delay || 0
          }s`,
        }
      : style;

    const ElementType = Component;
    return (
      <ElementType className={className} style={animationStyle} onClick={onClick}>
        {children}
      </ElementType>
    );
  };
};

export const motion = {
  div: createMotionComponent('div'),
  p: createMotionComponent('p'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
};