import { HtmlSVG, CssSVG, JavascriptSVG, TypescriptSVG } from '@/public/assets/svgs/projects-tech-logos-svgs';
import React, { FC } from 'react'


interface Props {
    name: String,
    description: String;
    creationDate: String;
    stackSVGs: JSX.Element[];
}
const ProjectCard: FC<Props> = ({ name, description, creationDate, stackSVGs }) => {
    return (
        <>
            <div className="bg-main-bg-color border border-secondary-bg-color rounded-lg shadow-lg project-card flex flex-col sm:w-[90%] md:w-[90%] lg:w-[48%] xl:w-[40%] 2xl:w-[30%] h-fit px-5 py-5 gap-2 sm:max-h-[350px] md:max-h-[350px] lg:max-h-[285px]  max-h-[260px] min-h-[230px] cursor-pointer">
                <h2 className='font-medium text-left text-[22px] sm:text-center md:text-center'>{name}</h2>

                <div className='max-h-[50%] text-left font-normal text-[17px] sm:text-center md:text-center whitespace-no-wrap overflow-hidden text-ellipsis'>{description}</div>

                <div className="flex flex-row justify-between items-center sm:flex-col md:flex-col sm:gap-2 md:gap-2">

                    <h6 className='font-light text-[17px] text-left sm:text-left md:text-left'>{`Created in ${creationDate}`}</h6>
                    <div className='stack-logos-div flex flex-row flex-wrap justify-center gap-2'>
                        {
                            stackSVGs.map(svg => svg)
                        }

                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCard