'use client';
import {useState} from 'react'
import {motion} from 'framer-motion';
import { ExploreCard,TypingText,TitleText } from '../components';
import styles from '../styles';
import {staggerContainer } from '../utils/motion'
import {exploreJobs} from '../constants' 

const Explore = () => {
  const [active,setActive] = useState('job-2')

  return(
  <section className={`${styles.paddings}`} id = "jobs">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Services" textStyles="text-center" />
        <TitleText title= {<>What we do</>} textStyles='text-center' />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-70[vh] gap-5'>
          {exploreJobs.map((job,index) => (
              <ExploreCard
                key = {job.id}
                {...job}
                index={index}
                active={active}
                handleClick={setActive}
                />
          ))}

        </div>
      </motion.div>

    Explore section
  </section>
)
};

export default Explore;
