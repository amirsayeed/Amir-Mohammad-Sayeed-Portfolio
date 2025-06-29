import React, { Suspense} from 'react';
import Project from './Project/Project';
import Loading from '../../components/Loading/Loading';

const projectPromise = fetch('/projects.json').then(res=>res.json());
//console.log(projectPromise);
const Portfolio = () => {
    
    return (
        <section className='scroll-mt-24 my-20' id='portfolio'>
            <h2 className="text-3xl font-bold text-center">My Portfolio</h2>
            {/* <div className=' space-y-6 max-w-4xl mx-auto'>
                
                <p className='text-lg font-normal'>I love building web applications that are clean, responsive, and user-friendly.
                Below are a few of my featured projects that showcase my skills in frontend and backend technologies. Each project reflects my dedication to solving real-world problems with modern tools.</p>
            </div> */}
            
            <Suspense fallback={<Loading/>}>   
                <Project projectPromise={projectPromise}/>
            </Suspense>
        </section>
    );
};

export default Portfolio;