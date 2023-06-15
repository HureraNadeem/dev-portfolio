import { HtmlSVG, CssSVG, JavascriptSVG, TypescriptSVG } from '@/public/assets/svgs/projects-tech-logos-svgs';
import Link from 'next/link';
import React, { FC } from 'react'
import { Fade } from 'react-awesome-reveal';
import { v4 as uuidv4 } from 'uuid';

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


interface StackSVG {
    name: string;
    component: JSX.Element;
}
interface Props {
    name: String,
    description: String;
    creationDate: String;
    stackSVGs: StackSVG[];
    link: String;
}
const ProjectCard: FC<Props> = ({ name, description, creationDate, stackSVGs, link }) => {

    const handleClick = () => {
        window.open(`${link}`, '_blank');
    };

    return (
        <>
            <div className="bg-card-bg-color rounded-lg shadow-lg project-card flex flex-col sm:w-[90%] md:w-[90%] lg:w-[48%] xl:w-[40%] 2xl:w-[30%] h-fit px-5 py-5 gap-2 sm:max-h-[500px] md:max-h-[500px] lg:max-h-[500px]  max-h-[500px] min-h-[230px] cursor-pointer overflow-hidden  motion-safe:from-right transition-transform duration-500 transform hover:scale-110" onClick={handleClick}>
                <Fade triggerOnce direction='up'>
                    <h2 className='font-medium text-left text-[22px] sm:text-center md:text-center'>{name}</h2>
                    <div className='max-h-[50%] text-left font-normal text-[17px] sm:text-center md:text-center whitespace-no-wrap overflow-hidden text-ellipsis'>{description}</div>
                    <div className="flex flex-row justify-between items-center sm:flex-col md:flex-col sm:gap-2 md:gap-2">
                        <h6 className='font-light text-[17px] text-left sm:text-left md:text-left'>{`Created in ${creationDate}`}</h6>
                        <div className='stack-logos-div flex flex-row flex-wrap justify-center gap-2'>
                            {
                                stackSVGs?.map((svgObj, index) => {
                                    const key_ = uuidv4();
                                    return (
                                        <>
                                            <span data-tip={`${svgObj.name}`} data-tooltip-id={`id-${key_}`} id={`id-${key_}`} data-for={`id-${key_}`} key={key_} className=''>
                                                {svgObj.component}
                                            </span>
                                            <ReactTooltip
                                                anchorId={`id-${key_}`}
                                                id={`id-${key_}`}
                                                place="top"
                                                content={`${svgObj.name}`}
                                                style={{ opacity: "100%" }}
                                            />
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default ProjectCard


