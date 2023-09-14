import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-10">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold border-b-2 border-black px-8">Eli Preston</h1>
            <p className="text-base md:text-xl font-medium px-16">Software Engineer ~ Computer Science Co-Op Student</p>
            <p className="text-xs md:text-medium mb-5 font-light text-slate-500">September 2022 - April 2027 (expected)</p>

            
            <div className="divide-y divide-dotted divide-black text-sm max-w-3xl mx-5 mb-6 px-8 md:px-20 py-4 font-light">
                <p className="mb-4">
                    I am a computer science co-op student looking to expand my 
                    skills and knowledge through projects, volunteering, classes,
                    and by meeting new people. As of the time writing this, and
                    into the forseeable future, I want to explore as many areas/directions 
                    within and around computer science. I do have more of an interest
                    in back-end development as I find it very cool/intersting how 
                    algorithms are used to model data, parse data, find patterns, 
                    and do so much more. My
                    {' '}
                    <a href="https://github.com/EliPreston" target="_blank" className="text-red-700 font-bold hover:underline underline-offset-2 decoration-2 decoration-red-600" rel="noreferrer noopener">
                        GitHub
                    </a>
                    {' '} 
                    is where I keep the majority of the code/projects I write, and my 
                    {' '}
                    <a href="http://linkedin.com/in/Eli-Preston" target="_blank" className="text-blue-700 font-bold hover:underline underline-offset-2 decoration-2 decoration-blue-500" rel="noreferrer noopener">
                       LinkedIn 
                    </a>
                    {' '}
                    can give you a general overview/timeline of my work and volunteer 
                    experience. Alternatively, you can find a link to a PDF version
                    of my resume at the bottom of this webpage.
                </p>
                <p className="pt-4">
                    While programming is my main interest, I have a variety of other interests 
                    and hobbies that take up my time. From spending time outdoors playing pickup 
                    soccer and hockey/shinny, to reading, to building a PC as well as 
                    playing around with PC parts and other electronics (I have more of an 
                    interest in older parts/aesthetics - ex. early 2000s IBM products). I also
                    love cars, more so Japanese and German (C63) cars, and would love to be able 
                    to do a complete rebuild and/or restore of a 90s JDM car (S13/14?, NSX?, 
                    Laurel?, Integra?).
                </p>
            </div>
            {/* <span class="material-symbols-outlined">keyboard_arrow_down</span> */}

        </div>
    )

}

export default Intro;
