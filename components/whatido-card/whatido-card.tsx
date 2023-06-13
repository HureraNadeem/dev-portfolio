import { ReactSVG, MongoDBSVG, JavascriptSVG, TypescriptSVG } from '@/public/assets/svgs/tech-skills-svgs'
import { FullStackDevSVG } from '@/public/assets/svgs/tech-stack-svgs'
import React, { FC } from 'react'
import { Icon } from '@iconify/react';

interface Props {
    key: number;
    skillName: string;
    MainSVG: JSX.Element;
    iconsArr: {
        name: string;
        svg: JSX.Element;
    }[];
    descriptionArr: string[];
}

const WhatIDoCard: FC<Props> = ({ skillName, MainSVG, iconsArr, descriptionArr }) => {
    return (
        <>
            <div className="WhatIDoCard py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-center bg-main-bg-color xl:gap-5 2xl:gap-5">
                <div className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
                    {MainSVG}
                </div>
                <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center">
                    <h4 className='secondary-heading justify-self-center text-center py-3'>{skillName}</h4>
                    <div className="stack-logos flex flex-row items-center justify-center gap-4 flex-wrap justify-self-center text-center py-1">
                        {
                            iconsArr.map((element, index) => {
                                return (
                                    <>
                                        <span key={index} className=''>
                                            {element.svg}
                                        </span>
                                    </>
                                );
                            })
                        }
                    </div>
                    <div className='stack-description my-4'>
                        {
                            descriptionArr.map((element, index) => {
                                return (
                                    <>
                                        <p key={index} className='tertiary-text my-3'>
                                            📌 {element}
                                            {/* ⚡ {element} */}
                                        </p>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatIDoCard