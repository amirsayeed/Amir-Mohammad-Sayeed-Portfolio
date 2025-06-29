import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

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

    return (
        <div>
            
        </div>
    );
};

export default ProjectDetails;