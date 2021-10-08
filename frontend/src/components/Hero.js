import React from 'react'
import './ProductCarousel.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section>
            <div className='overlay'>
                <motion.div 
                animate={{ scale: [1,1.3 ]}}
               
                className='overlay-text'>
                    Taco Shop.
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
