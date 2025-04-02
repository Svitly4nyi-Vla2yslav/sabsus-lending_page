import React, { useEffect, useState } from 'react';
import {
  IconContainerCard,
  IconOne,
  OurWorkText,
  OurWorkTitel,
  WorkCardText,
  WorkCardTitle,
  WorkCardWrapper,
  WorkShadowContainer,
  WorkWrapper,
} from './OurWork.styled';
import { getProjects, Project } from '../../firabase';

const OurWork: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await getProjects();
        console.log('Loaded projects:', projectsData);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };
    loadProjects();
  }, []);

  const renderProjectImage = (imageUrl?: string) => {
    if (!imageUrl) {
      console.log('No image available');
      return <div>No image available</div>;
    }

    console.log('Rendering image:', imageUrl);

    return (
      <WorkShadowContainer>
        <IconContainerCard>
          <IconOne
            src={imageUrl}
            alt="Project image"
            onError={(e) => {
              console.error('Failed to load image:', imageUrl);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </IconContainerCard>
      </WorkShadowContainer>
    );
  };

  return (
    <WorkWrapper>
      <OurWorkText>Our Work</OurWorkText>
      <OurWorkTitel>Discover our projects showcasing expertise in custom IT solutions.</OurWorkTitel>

      {projects.map((project) => (
        <WorkCardWrapper key={project.id}>
          <WorkCardTitle>{project.title || 'No title'}</WorkCardTitle>
          {project.client && <WorkCardText>Client: {project.client}</WorkCardText>}
          <WorkCardText>{project.description || 'No description'}</WorkCardText>
          {renderProjectImage(project.imageUrl)}
        </WorkCardWrapper>
      ))}
    </WorkWrapper>
  );
};

export default OurWork;
