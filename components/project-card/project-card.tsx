import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { v4 as uuidv4 } from 'uuid';

interface StackSVG {
  name: string;
  component: JSX.Element;
}
interface Props {
  name: String;
  description: String;
  creationDate: String;
  stackSVGs: StackSVG[];
  link: String;
}
const ProjectCard: FC<Props> = ({
  name,
  description,
  creationDate,
  stackSVGs,
  link,
}) => {
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
        className='bg-card-bg-color rounded-lg shadow-lg project-card flex flex-col sm:w-[90%] md:w-[90%] lg:w-[48%] xl:w-[40%] 2xl:w-[30%] h-[350px] min-h-[350px] max-h-[350px] px-5 py-5 gap-2 cursor-pointer overflow-hidden motion-safe:from-right transition-transform duration-500 transform hover:scale-105'
        onClick={handleClick}>
        <Fade triggerOnce direction='up'>
          <div className='flex flex-col h-full justify-between'>
            <div>
              <h2 className='font-medium text-left text-[22px] sm:text-center md:text-center'>
                {name}
              </h2>
              <div className='text-left font-normal text-[17px] sm:text-center md:text-center overflow-hidden text-ellipsis'>
                {description}
              </div>
            </div>
            <div className='flex flex-row justify-between items-center sm:flex-col md:flex-col sm:gap-2 md:gap-2'>
              <h6 className='font-light text-[17px] text-left sm:text-left md:text-left'>{`Created in ${creationDate}`}</h6>
              <div className='stack-logos-div flex flex-row flex-wrap justify-center gap-2'>
                {stackSVGs?.map((svgObj, index) => {
                  const key_ = uuidv4();
                  return (
                    <span
                      key={key_}
                      className='relative'
                      onMouseEnter={() => setTooltipIndex(index)}
                      onMouseLeave={() => setTooltipIndex(null)}>
                      {svgObj.component}
                      {tooltipIndex === index && (
                        <span
                          className='custom-tooltip show'
                          style={{
                            top: '-35px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                          }}>
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
