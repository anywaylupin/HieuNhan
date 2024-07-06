'use client';

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

import type { Props } from '@/types';
import { cn } from '@/utils/cn';

declare type MouseContextValue = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

declare interface CardContainerProps extends Props {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

declare interface CardItemProps {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}

const MouseEnterContext = createContext<MouseContextValue | undefined>(undefined);

export const CardContainer = ({ children, className, containerClassName }: CardContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const contextValue = useMemo<MouseContextValue>(() => [isMouseEntered, setIsMouseEntered], [isMouseEntered]);

  return (
    <MouseEnterContext.Provider value={contextValue}>
      <div
        className={cn('flex items-center justify-center', containerClassName)}
        style={{
          perspective: '1000px'
        }}
      >
        <div
          aria-hidden
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn('relative flex items-center justify-center transition-all duration-200 ease-linear', className)}
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }: Props) => (
  <div className={cn('h-52 w-52 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]', className)}>
    {children}
  </div>
);

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, rotateX, rotateY, rotateZ, translateX, translateY, translateZ]);

  return (
    <Tag ref={ref} className={cn('w-fit transition duration-200 ease-linear', className)} {...rest}>
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
};
