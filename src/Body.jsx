import img_1 from './assets/img_1.png'
import { motion } from 'framer-motion';
function Isi()
{
    return (
        
         <div id='first' className="shadow-lg mt-5 bg-white">
            <motion.div initial={{x:1100}}
            animate={{x:1,y:1}}
            transtition={{
                transtition:8,
                delay : 5
                
            }}>
            <div className='flex justify-center'>
                
            <img src={img_1} alt="" srcset=""/>

            </div>
            </motion.div>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            duration:3
        }}
        >
        <div className='flex justify-center pt-3'>
            <h2 className='font-inter text-6xl font-bold'>Kepler Store</h2>
        </div>
        <div className='flex justify-center pt-5'>
            <p className='text-xl'>Fast, Efficient, and Good Quality is our Motto</p>
            
        </div>
        <div className='flex justify-center'>
            <p className='text-xl'>Cheap is our Price</p>
        </div>
        </motion.div>
        
    </div>
    );
}

export default Isi;