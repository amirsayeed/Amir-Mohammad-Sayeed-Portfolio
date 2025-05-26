import React from 'react';

const Project = ({project}) => {
    const {name,image,description,github,live,technologies} = project;

    return (
        <div className="card bg-base-200 shadow-md p-4 hover:scale-105">
                    <figure>
                        <img
                        src={image}
                        alt="Shoes"
                        className="object-cover rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center space-y-4">
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p className='text-base'>{description}</p>
                        <div className="flex flex-col md:flex-row justify-between gap-5">
                            <button onClick={()=>{
                                window.open(live, '_blank')
                            }} className="btn btn-primary">Live</button>
                            <button onClick={()=>{
                                window.open(github, '_blank')
                            }} className="btn btn-primary">Github</button>
                        </div>
                        <div>
                            <p className='flex flex-wrap gap-3'>
                            {
                                technologies.map((tech,idx)=><span key={idx}>#{tech}</span>)
                            }
                            </p>
                        </div>
                    </div>
                    </div>
    );
};

export default Project;