import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import Loading from '../../components/Loading/Loading';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Slider from './Slider';

const ProjectDetails = () => {
    const { id } = useParams();
    const detailsData = useLoaderData();
    const [project, setProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const serviceDetail = detailsData.find(detail => detail.id == id);
        setProject(serviceDetail);
        console.log(serviceDetail);
    }, [detailsData, id]);

    if (!project) {
        return <Loading />;
    }

    const {
        name,
        slides,
        details,
        technologies,
        github,
        live,
        challenges,
        future
    } = project;

    return (
        <>
        <title>Sayeed | Project Details </title>
        <div className="my-10 max-w-5xl mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 text-lg text-[#1D4ED8] flex items-center gap-2"
            >
                <FaArrowLeft /> Back to Home
            </button>

            <div className="space-y-8">
                
                <div>
                    <Slider slides={slides}/>
                </div>

                <h1 className="text-3xl font-bold">{name}</h1>

                <p className="text-lg">{details}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                    {technologies.map((tech, idx) => (
                        <span
                        key={idx}
                        className="badge badge-outline px-3 py-2 rounded-xl text-sm font-medium"
                        >
                        #{tech}
                        </span>
                    ))}
                </div>

               <div className="flex flex-wrap gap-4 mt-6">
                <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-[#1D4ED8] gap-2 text-white rounded-xl"
                >
                    Live Site <FaExternalLinkAlt />
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline gap-2 rounded-xl"
                >
                    GitHub <FaGithub />
                </a>
                </div>

                <div>
                <h2 className="text-xl font-semibold mt-10 mb-2">Challenges Faced</h2>
                <ul className="list-disc pl-6 space-y-1">
                    {challenges.map((point, idx) => (
                    <li key={idx}>{point}</li>
                    ))}
                </ul>
                </div>

                <div>
                <h2 className="text-xl font-semibold mt-8 mb-2">Future Improvements</h2>
                <ul className="list-disc pl-6 space-y-1">
                    {future.map((point, idx) => (
                    <li key={idx}>{point}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectDetails;