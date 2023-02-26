'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import Image from 'next/image'
import Cover from '../public/MJO_cover.jpg'
import LogoStamp from '../public/logostamp.png'
// import {navVariants} from '../utils/motion';
import {slideIn,  staggerContainer, textVariant} from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:true, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
      <div className='flex justify-center items-center flex-col relative z-10'>
        
        <motion.div 
        variants={textVariant(1.1)} 
        className = "flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Buil</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>ing</h1>

        </motion.div>
        <motion.h1 variants={textVariant(1.1)} className = {`${styles.secHeroHeading} text-center`}>
        brighter futures 
        </motion.h1>
      </div>
    </motion.div>

    <motion.div
    variants={slideIn('right','tween', 0.2 ,1)}
    initial="hidden"
    animate="show"
    className='relative w-full md:-mt-[20px] -mt-[12px]'
    >
      <div className='absolute w-full h-[300px] rounded-tl-[140px] z-[0] top-[30px]'/>
        <Image 
          src={Cover}
          alt="cover"
          className='w-full sm:h-[500px] h-[250px] object-cover rounded-tl-[140px] z-10 relative' 
        />

      <a href = "#jobs">
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 ">
          <Image src={LogoStamp} alt="stamp" className='sm:w-[155px] w-[80px] sm:h-[155px] h-[80px] object-contain'/>
        </div>
      </a> 
    </motion.div>
  </section>
);

export default Hero;
