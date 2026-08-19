'use client'

import React, { FC } from 'react'
import { Slide } from 'react-awesome-reveal'

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

export interface Props {
  key: number
  skillName: string
  MainSVG: React.JSX.Element
  iconsArr: {
    name: string
    svg: React.JSX.Element
  }[]
  descriptionArr: string[]
}

export const WhatIDoCard: FC<Props> = ({
  skillName,
  MainSVG,
  iconsArr,
  descriptionArr,
}) => {
  const tooltipId = `whatido-tooltip-${skillName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <div className="WhatIDoCard py-7 sm:px-0 md:px-0 lg:px-0 sm:py-5 md:py-5 lg:py-5 flex flex-row sm:flex-col md:flex-col lg:flex-col justify-around items-center bg-main-bg-color xl:gap-5 2xl:gap-5">
      <Slide
        triggerOnce
        direction="left"
        className="svg-div w-100% xl:w-50% 2xl:w-50% flex flex-col items-center justify-center"
      >
        <div className="whatido-illustration">{MainSVG}</div>
      </Slide>

      <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center">
        <Slide triggerOnce direction="right">
          <h4 className="secondary-heading justify-self-center text-center py-3">{skillName}</h4>
          <div className="stack-logos flex flex-row items-center justify-center gap-4 sm:gap-3 md:gap-3 flex-wrap justify-self-center text-center py-1">
            {iconsArr.map((element, index) => (
              <span
                key={index}
                className="whatido-icon"
                data-tooltip-id={tooltipId}
                data-tooltip-content={element.name}
              >
                {element.svg}
              </span>
            ))}
          </div>
          <ReactTooltip id={tooltipId} place="top" />
          <div className="stack-description my-4">
            {descriptionArr.map((element, index) => (
              <p key={index} className="tertiary-text my-3">
                ⚡ {element}
              </p>
            ))}
          </div>
        </Slide>
      </div>
    </div>
  )
}
