'use client';
import {motion} from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import {fadeIn,  staggerContainer } from '../utils/motion'
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* <div className='z-0' > gradiant-02 */}
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false , amount: 0.25}}
      className = {`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText 
        title = "| About MJO "
        textStyles="text-center"   
        />
        <motion.p 
          variants={fadeIn('up','tween',0.2,1)}
          className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
            We're a <span className='font-extrabold text-white'> family-owned </span>
            construction company located in the Twelve Oaks community in Tampa, 
            and we specialize in <span className='font-extrabold text-white'> electrical work. </span>
            We're dedicated to providing high-quality services to families and businesses in the Tampa Bay area. 
            Our skilled team of professionals is committed to delivering exceptional results, 
            and we treat our clients like members of our own family. <span className='font-extrabold text-white'> Choose us </span>
            for all your construction needs and experience the difference a family-oriented company can make.
        </motion.p>
      </motion.div>
  </section>
);

export default About;
