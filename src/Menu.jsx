function Menu(){
    return(
        <header>
            <div className="bg-white flex justify-center shadow-lg">
                    <ul>
                        <div className="flex items-center justify-items-center">
                            <div className="p-5">
                                <a href="#first"><li className="font-bold text-xl">Home</li></a>
                            </div>
                            <div className="p-5">
                                <a href="#second"><li className="font-bold text-xl">Reviews</li></a>
                            </div>
                            <div className="p-5">
                                <a href="#third"><li className="font-bold text-xl">Contact</li></a>
                            </div>
                            
                        </div>   
                    </ul>
            </div>
        </header>
    )
    
}

export default Menu;