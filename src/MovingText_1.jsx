import { motion } from 'framer-motion';

function MovingText_1()
{
    return(
       
        <motion.div 
         initial={{ x: -1200}}
            animate={{ x: 1200, y : 1 }}
            transition={{
                duration: 10,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                repeat: Infinity,
            }}>
            <div  className="justify-self-center pt-3">
                <p>40% Discount on Discord</p>
            </div>
            <div className="justify-self-center">
                <p className="font-bold text-sm  underline">Shop Here to get all the discounts</p>
            </div>
        </motion.div>
        
    );
}

export default MovingText_1