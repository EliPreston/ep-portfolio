import React from 'react';

function PortfolioItem({title, imgUrl, description, stack, link}) {
    return (

        <div className="rounded-md shadow-xl overflow-hidden mb-2">
            <div className="flex flex-row ">     
                <img src={imgUrl} alt="portfolio pic here" className="w-full md:w-3/4 h-36 md:h-80 object-cover cursor-pointer"/>
                <div className="w-full p-4">
                    <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                        <a href={link} target="_blank" className=" font-bold hover:underline underline-offset-2 decoration-2 decoration-red-600" rel="noreferrer noopener">{title}</a>
                    </h3>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                        {stack.map(item =>
                            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-sm">{item}</span>
                        )}
                    </p>
                    <p className="hidden md:block pt-5 text-sm font-light text-slate-900">{description}</p>
                </div>
            </div>
            <p className="block md:hidden p-2 px-4 text-xs md:text-sm lg:text-base font-light text-slate-900">{description}</p>
        </div>
    )

}

export default PortfolioItem;
