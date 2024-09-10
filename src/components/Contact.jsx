import { useState, useEffect, useRef } from 'react';

const Contact = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);
    const formRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const formObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setFormVisible(true);
                    } else {
                        setFormVisible(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const imageObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setImageVisible(true);
                    } else {
                        setImageVisible(false);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (formRef.current) {
            formObserver.observe(formRef.current);
        }

        if (imageRef.current) {
            imageObserver.observe(imageRef.current);
        }

        return () => {
            if (formRef.current) {
                formObserver.unobserve(formRef.current);
            }
            if (imageRef.current) {
                imageObserver.unobserve(imageRef.current);
            }
        };
    }, []);

    return ( 
      <>
      <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

            .font-merriweather{
                font-family: 'Merriweather' , sans-serif;
            }`
            }
        </style>
        <div className="max-w-screen-xl mx-auto flex justify-center mt-32 md:mt-36 lg:mt-28 font-merriweather">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 rounded-lg">
                <div className={`flex justify-center transition-opacity duration-700 ${imageVisible ? 'opacity-100' : 'opacity-0'}`} ref={imageRef}>
                    <img src="/public/assets/ZebbDigitalAgency/LogoHero.png" className="w-11/12 mx-10 mt-16" alt="" />
                </div>
                <div ref={formRef} className={`mx-14 text-[#020E35] transition-transform duration-500 ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-[#020E35] flex justify-center lg:justify-start text-center lg:text-start">
                        <h1 className="text-4xl font-bold w-52 md:w-96">
                            Need Help Making Coffee? <span></span>
                            <span className="relative inline-block">
                                Contact Us <span className="absolute inset-x-0 bottom-0 h-[16px] bg-[#FF5678] -z-10"></span>
                            </span>
                        </h1>
                    </div>

                    <div className="mt-14">
                        <form action="" className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-poppins font-medium">From : </label>
                                <input id="name" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="name" className="font-poppins font-medium">To : </label>
                                <input id="name" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="font-poppins font-medium">Message : </label>
                                <textarea id="message" type="text" className="bg-[#FFEEF6] border border-black rounded-lg py-2" />
                            </div>

                            <div className="flex justify-center lg:justify-start">
                                <button className="p-3 bg-[#020E35] text-white font-medium px-14 lg:px-16 text">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;
