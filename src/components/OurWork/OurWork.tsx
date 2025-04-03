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
import { getProjects, Project, getCaseStudy } from '../../firabase';

const OurWork: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [caseStudy, setCaseStudy] = useState<any | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    const loadCaseStudy = async () => {
      try {
        const caseStudyData = await getCaseStudy();
        if (caseStudyData) {
          setCaseStudy(caseStudyData);
        }
      } catch (error) {
        console.error('Error loading case study:', error);
      }
    };

    loadProjects();
    loadCaseStudy();
  }, []);

  return (
    <WorkWrapper>
      <OurWorkText>Our Work</OurWorkText>
      <OurWorkTitel>
        Discover our projects showcasing expertise in custom IT solutions.
      </OurWorkTitel>

      {projects.map(project => (
        <WorkCardWrapper key={project.id}>
          <WorkCardTitle>{project.title || 'No title'}</WorkCardTitle>
          {project.client && (
            <WorkCardText>Client: {project.client}</WorkCardText>
          )}
          <WorkCardText>{project.description || 'No description'}</WorkCardText>
          {project.imageUrl ? (
            <WorkShadowContainer>
              <IconContainerCard>
                <IconOne
                  src={project.imageUrl}
                  alt="Project image"
                  onError={e => {
                    console.error('Failed to load image:', project.imageUrl);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </IconContainerCard>
            </WorkShadowContainer>
          ) : (
            <div>Image not available</div>
          )}
        </WorkCardWrapper>
      ))}

      {caseStudy && (
        <WorkCardWrapper>
          <WorkCardTitle>{caseStudy.title || 'Case Study'}</WorkCardTitle>
          <WorkCardText>
            {caseStudy.description || 'No description'}
          </WorkCardText>
        </WorkCardWrapper>
      )}
    </WorkWrapper>
  );
};

export default OurWork;
