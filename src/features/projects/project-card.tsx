'use client';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

interface StackSVG {
  name: string;
  component: React.JSX.Element;
}
interface Props {
  name: string;
  description: string;
  creationDate: string;
  stackSVGs: StackSVG[];
  link: string;
}
const ProjectCard: FC<Props> = ({ name, description, creationDate, stackSVGs, link }) => {
  const [tooltipIndex, setTooltipIndex] = React.useState<number | null>(null);

  const handleClick = () => {
    window.open(`${link}`, '_blank');
  };

  return (
    <>
      <style>{`
        .custom-tooltip {
          position: absolute;
          background: #222;
          color: #fff;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 13px;
          z-index: 100;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .custom-tooltip.show {
          opacity: 1;
        }
        .stack-logos-div {
          position: relative;
        }
      `}</style>
      <div
        className="project-card motion-safe:from-right flex h-[350px] max-h-[350px] min-h-[350px] transform cursor-pointer flex-col gap-2 overflow-hidden rounded-lg bg-card-bg-color px-5 py-5 shadow-lg transition-transform duration-500 hover:scale-105 sm:w-[90%] md:w-[90%] lg:w-[48%] xl:w-[40%] 2xl:w-[30%]"
        onClick={handleClick}
      >
        <Fade triggerOnce direction="up">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-left text-[22px] font-medium sm:text-center md:text-center">
                {name}
              </h3>
              <div className="overflow-hidden text-ellipsis text-left text-[17px] font-normal sm:text-center md:text-center">
                {description}
              </div>
            </div>
            <div className="flex flex-row items-center justify-between sm:flex-col sm:gap-2 md:flex-col md:gap-2">
              <p className="text-left text-[17px] font-light sm:text-left md:text-left">{`Created in ${creationDate}`}</p>
              <div className="stack-logos-div flex flex-row flex-wrap justify-center gap-2">
                {stackSVGs?.map((svgObj, index) => {
                  return (
                    <span
                      key={svgObj.name}
                      className="relative"
                      onMouseEnter={() => setTooltipIndex(index)}
                      onMouseLeave={() => setTooltipIndex(null)}
                    >
                      {svgObj.component}
                      {tooltipIndex === index && (
                        <span
                          className="custom-tooltip show"
                          style={{
                            top: '-35px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                          }}
                        >
                          {svgObj.name}
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default ProjectCard;
