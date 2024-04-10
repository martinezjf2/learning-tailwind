import React from "react";

export default function Header() {
    return (
        <header>
            <section className="px-0 py-3 font-semibold border-b bg-[#f8f7f5]">
                <div className="container mx-auto px-4 flex justify-between">
                    {/* Group A */}
                    <div className="flex text=[0.7rem]">
                        {/* Link */}
                        <div className="flex justify-center items-center pr-[1.2rem]">
                            <i className="fas fa-globe-americas text-base relative mr-[5px] top-[-.04rem]"></i>
                            <span className="flex justify-center items-center">Ship To: United States</span>
                        </div>
                           {/* Link */}
                        <div className="flex justify-center items-center pr-[1.2rem]">
                            <i className="far fa-question-circle text-base relative mr-[5px] top-[-.04rem]"></i>
                            <span className="flex justify-center items-center">Can We Help You?</span>
                        </div>
                           {/* Link */}
                        <div className="flex justify-center items-center pr-[1.2rem]">
                            <i className="fas fa-mobile-alt text-base relative mr-[5px] top-[-.04rem]"></i>
                            <span className="flex justify-center items-center">+1.866.VUITTON</span>
                        </div>
                           {/* Link */}
                        <div className="flex justify-center items-center pr-[1.2rem]">
                            <span className="flex justify-center items-center">Sustainability</span>
                        </div>

                    </div>
                    
                    {/* Group B */}
                    <div className="flex w-32 justify-between">
                        {/* Link */}
                        <a href="#"><i className="fas fa-map-marker-alt"></i></a>
                        <a href="#"><i className="far fa-heart"></i></a>
                        <a href="#"><i className="far fa-user"></i></a>
                        <a href="#"><i className="fas fa-shopping-cart"></i></a>


                    </div>

                </div>
            </section>
        </header>
    )
}