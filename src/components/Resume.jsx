import React from 'react';
import Title from './Title';

function Resume() {
    return (
        <div className="flex flex-col pt-10 mb-10 mx-auto items-center justify-center width-500">
            <Title>Resume</Title>
            <div className="flex flex-row mt-3">
                <a href="assets/pdf/Resume.pdf" target="_blank" className="inline-block px-2 mx-2 py-1 font-semibold border-2 border-stone-900 rounded-sm hover:bg-red-600">View</a>
                <a href="assets/pdf/Resume.pdf" download="Eli-Preston-Resume" className="inline-block px-2 mx-2 py-1 font-semibold border-2 border-stone-900 rounded-sm hover:bg-red-600">Download</a>
            </div>
            
        </div>
    )

}

export default Resume;
