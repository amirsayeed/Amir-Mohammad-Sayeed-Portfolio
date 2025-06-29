import React from 'react';

const SkillCard = ({skill}) => {
    const {image,name} = skill;
    
    return (
        <div className="bg-base-200 shadow-md hover:scale-105 transition-transform duration-200 rounded-2xl p-6 w-full max-w-[220px]">
            <figure className="flex justify-center mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-16 object-contain rounded-xl"
                />
            </figure>
            <div className="text-center">
                <h2 className="text-lg font-semibold">{name}</h2>
            </div>
        </div>
    );
};

export default SkillCard;