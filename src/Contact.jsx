import { motion } from 'framer-motion';


function Contact()
{
    return(
        
        
        <div id='third' className="bg-white ">
            <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            delay:2
        }}>
            <div className="pt-20 text-4xl">
                <h1 className="text-center">We love to hear a word from you</h1>
                
            </div>
            <div className="text-xl text-center pt-5">
                <p>Whetever you have question about our product and our service, or anything else</p>
            </div>
            <div className="text-xl justify-self-center pt-1">
                <p>just let us know</p>
            </div>
            <div className="pt-40 justify-self-center">
                <button className="p-5 border rounded-3xl pb-5 w-32">Contact Us</button>
            </div>
            <div className="pt-5">

            </div>
            </motion.div>
        </div>
        
    )
}

export default Contact;