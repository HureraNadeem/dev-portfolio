'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-awesome-reveal';

import ExperiencePageSVG from '@/components/icons/experience-illustration';
import Wrapper from '@/components/layout/wrapper';
import { VOLUNTEERING, WORK, type ExperienceEntry } from '@/content/experience';
import type { Dictionary } from '@/dictionaries';
import ExperienceCard from './experience-card';

function Section({
  title,
  open,
  onToggle,
  entries,
  dict,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  entries: ExperienceEntry[];
  dict: Dictionary;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="employement-type-heading flex h-50px w-full flex-row items-center justify-between border border-secondary-bg-color bg-white px-20px py-10px font-medium"
      >
        <h2>{title}</h2>
        <span>
          <FontAwesomeIcon className="text-text-color" icon={open ? faMinus : faPlus} />
        </span>
      </button>
      {/*
        Rendered even while collapsed. Conditionally rendering it meant the
        entire work history was absent from the served HTML, so a crawler — or
        an answer engine — saw an empty page. Collapsing with max-height keeps
        the markup present; `inert` keeps it out of reach while hidden.
      */}
      <div
        className="employement-container flex flex-col overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={{ maxHeight: open ? '20000px' : '0' }}
        aria-hidden={!open}
        inert={!open}
      >
        {entries.map((entry, index) => {
          const copy = dict.experience.entries[entry.id];
          return (
            <ExperienceCard
              key={entry.id}
              lastOne={entries.length - index === 1}
              companyName={entry.company}
              jobRoleTitle={copy.role}
              logo={entry.logo}
              tenure={copy.tenure}
              location={copy.location}
              jobDescription={copy.description}
              link={entry.link}
            />
          );
        })}
      </div>
    </div>
  );
}

function ExperienceView({ dict }: { dict: Dictionary }) {
  const [showWork, setShowWork] = useState(false);
  const [showVolunteership, setShowVolunteership] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="flex flex-row items-start justify-around bg-main-bg-color py-7 sm:flex-col sm:items-center sm:px-0 sm:py-5 md:flex-col md:items-center md:px-0 md:py-5 lg:flex-col lg:items-center lg:px-0 lg:py-5 xl:gap-5 2xl:items-center 2xl:justify-center 2xl:gap-5">
          <Slide
            triggerOnce
            direction="left"
            className="svg-div flex w-100% flex-col items-center justify-center xl:w-50% 2xl:w-50%"
          >
            <ExperiencePageSVG />
          </Slide>
          <div className="flex flex-col items-center justify-center pt-14 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% xl:pt-12 2xl:w-50% 2xl:pt-0">
            <Slide triggerOnce direction="right">
              <h1 className="primary-heading justify-self-center text-center">
                {dict.experience.title}
              </h1>
              <p className="primary-text justify-self-center text-center">
                {dict.experience.subtitle}
              </p>
              <p className="tertiary-text justify-self-center py-1 text-center">
                {dict.experience.intro}
              </p>
            </Slide>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <Section
          title={dict.experience.work}
          open={showWork}
          onToggle={() => setShowWork((prev) => !prev)}
          entries={WORK}
          dict={dict}
        />
        <Section
          title={dict.experience.volunteerships}
          open={showVolunteership}
          onToggle={() => setShowVolunteership((prev) => !prev)}
          entries={VOLUNTEERING}
          dict={dict}
        />
      </Wrapper>
    </>
  );
}

export default ExperienceView;
