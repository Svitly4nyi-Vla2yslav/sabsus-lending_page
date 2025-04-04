import React, { useEffect, useState } from 'react';
import {
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  IconOne,
  IconSecond,
  IconThierd,
  IconCreditServices,
  PhoneCreditServices,
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
        if (caseStudyData) setCaseStudy(caseStudyData);
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

      {projects.map((project) => (
        <WorkCardWrapper key={project.id}>
          <WorkCardTitle>{project.title || 'No title'}</WorkCardTitle>
          {project.client && <WorkCardText>Client: {project.client}</WorkCardText>}
          <WorkCardText>{project.description || 'No description'}</WorkCardText>

          {project.imageUrl && project.imageUrl.length === 1 && (
            <WorkShadowContainer>
              <IconCreditServices>
                <PhoneCreditServices
                  src={project.imageUrl[0]}
                  alt="Project image"
                  onError={(e) => {
                    console.error('Failed to load image:', project.imageUrl?.[0]);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </IconCreditServices>
            </WorkShadowContainer>
          )}

          {project.imageUrl && project.imageUrl.length > 1 && (
            <WorkShadowContainer>
              {project.imageUrl[0] && (
                <IconContainerCard>
                  <IconOne src={project.imageUrl[0]} alt="img1" />
                </IconContainerCard>
              )}
              {project.imageUrl[1] && (
                <IconContainerCard1>
                  <IconSecond src={project.imageUrl[1]} alt="img2" />
                </IconContainerCard1>
              )}
              {project.imageUrl[2] && (
                <IconContainerCard2>
                  <IconThierd src={project.imageUrl[2]} alt="img3" />
                </IconContainerCard2>
              )}
            </WorkShadowContainer>
          )}
        </WorkCardWrapper>
      ))}

      {caseStudy && (
        <WorkCardWrapper>
          <WorkCardTitle>{caseStudy.title || 'Case Study'}</WorkCardTitle>
          <WorkCardText>{caseStudy.content || 'No description'}</WorkCardText>
        </WorkCardWrapper>
      )}
    </WorkWrapper>
  );
};

export default OurWork;
