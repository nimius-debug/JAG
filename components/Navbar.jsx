'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import {navVariants} from '../utils/motion';

const Navbar = () => (
  <motion.var
    variants = {navVariants}
    initial = "hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 px-6 relative`}
  >
   
    <div className="absolute w-[50%] inset-0 gradiant-01"/>
    <div className={`${styles.innerWidth} sm:pl-16 pl-6 sm:pr-16 pr-6 mx-auto flex justify-between gap-9 `}>
      <img
        src='/search.svg'
        alt='search'
        className='w-[24px] h-[24px] object-contain'
      />
    
      <h2 className="font-extrabold text-[25px] leading-[30px] text-white">
        MJO take out
      </h2>
      <img 
        src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
      />
    </div>
  </motion.var>
);

export default Navbar;
