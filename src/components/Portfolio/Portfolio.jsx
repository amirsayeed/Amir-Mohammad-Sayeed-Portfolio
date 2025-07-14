import React, { Suspense} from 'react';
import Project from './Project/Project';
import Loading from '../../components/Loading/Loading';

const projectPromise = fetch('/projects.json').then(res=>res.json());
//console.log(projectPromise);
const Portfolio = () => {
    
    return (
        <section className='scroll-mt-24 my-20' id='projects'>
            <div data-aos="zoom-in-right">
                <h2 className="text-3xl font-bold text-center">Projects</h2>
            
                <Suspense fallback={<Loading/>}>   
                    <Project projectPromise={projectPromise}/>
                </Suspense>
            </div>
        </section>
    );
};

export default Portfolio;