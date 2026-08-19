import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/layout/wrapper';
import { GithubSVG, LinkedInSVG, InstagramSVG, FacebookSVG } from '@/components/icons/social-icons';
import ProfilePicture from '@public/assets/images/dp.png';
import SocialIconBadge from '@/components/ui/social-icon-badge';

export default function Greeting() {
  return (
    <>
      <Wrapper>
        <div className="header flex flex-row items-center justify-around bg-main-bg-color sm:flex-col-reverse md:flex-col-reverse">
          <div className="animate-slide-in-from-left info-div sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-col md:items-center md:justify-center lg:w-50% xl:w-50% 2xl:ml-6 2xl:w-50%">
            <h1 className="primary-heading">Wassup! this is Hurera</h1>
            <p className="primary-text">
              A Full-stack developer (MERN/MEVN) 💻 - DevOps and Cloud Enthusiast ☁️ - Problem
              Solver 🤔
            </p>
            <div className="socials mb-4 mt-5 flex flex-row gap-1 sm:justify-center md:justify-center">
              <Link href="https://github.com/HureraNadeem" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'black'}>
                  <GithubSVG />
                </SocialIconBadge>
              </Link>
              <Link href="https://www.linkedin.com/in/iamhurera/" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'rgb(0, 119, 181)'}>
                  <LinkedInSVG />
                </SocialIconBadge>
              </Link>
              <Link href="https://www.instagram.com/iamhurera/" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'rgb(214,41,118)'}>
                  <InstagramSVG />
                </SocialIconBadge>
              </Link>
              {/* <Link href="https://twitter.com/iamhurera" passHref={true} target='_blank'>
                                <SocialIconBadge bgcolor={"rgb(29, 161, 242)"}>
                                    <TwitterSVG />
                                </SocialIconBadge>
                            </Link> */}
              <Link href="https://www.facebook.com/iamhurera" passHref={true} target="_blank">
                <SocialIconBadge bgcolor={'rgb(24, 119, 242)'}>
                  <FacebookSVG />
                </SocialIconBadge>
              </Link>
            </div>
            <div
              className={`resume-div font-GoogleSans-Regular mr-0 mt-5 block max-w-max cursor-pointer rounded-md bg-text-color px-6 py-3 text-center font-sans text-lg font-medium leading-tight tracking-wide text-main-bg-color no-underline`}
            >
              <Link
                href={
                  'https://drive.google.com/file/d/17tbs8vZmaKnIF-XMAsKz1nDmQNr9kXMY/view?usp=sharing'
                }
                download={"Hurera's Resume"}
                target="_blank"
                rel="noreferrer"
                className="font-GoogleSans-Regular"
              >
                Resume 📄
              </Link>
            </div>
          </div>

          {/* <Fade> */}
          <div className="animate-fade-in flex items-center justify-center sm:mb-8 md:mb-8 lg:w-50% xl:w-50% 2xl:w-50%">
            <div className="img-div flex items-center sm:h-80vw sm:w-80vw md:h-65vw md:w-65vw lg:h-432px lg:w-432px xl:h-432px xl:w-432px 2xl:h-432px 2xl:w-432px">
              <Image src={ProfilePicture} alt="hurera.jpeg" style={{ borderRadius: '50%' }} />
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </Wrapper>
    </>
  );
}
