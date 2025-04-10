import React, { useEffect, useState } from 'react';
import {
  IconContainerCard,
  IconContainerCard1,
  IconContainerCard2,
  IconContainerCard3, // Додано новий контейнер
  IconOne,
  IconSecond,
  IconThierd,
  IconFourth, // Додано нову іконку
  IconCreditServices,
  PhoneCreditServices,
  OurWorkText,
  OurWorkTitel,
  WorkCardText,
  WorkCardTitle,
  WorkCardWrapper,
  WorkShadowContainer,
  WorkWrapper,
  ImagesRow,
  WorkCardsWrapper,
} from './OurWork.styled';
import { getProjects, Project, getCaseStudy } from '../../firabase';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'; // Додано для медіа-запитів

const OurWork: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [caseStudy, setCaseStudy] = useState<any | null>(null);
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 744px)' }); // Визначаємо великі екрани

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error(t('ourWork.errors.loadProjects'), error);
      }
    };

    const loadCaseStudy = async () => {
      try {
        const caseStudyData = await getCaseStudy();
        if (caseStudyData) setCaseStudy(caseStudyData);
      } catch (error) {
        console.error(t('ourWork.errors.loadCaseStudy'), error);
      }
    };

    loadProjects();
    loadCaseStudy();
  }, [t]);

  return (
    <Element name="case">
      <WorkWrapper>
        <OurWorkText>{t('ourWork.sectionTitle')}</OurWorkText>
        <OurWorkTitel>{t('ourWork.mainHeading')}</OurWorkTitel>
<WorkCardsWrapper>
        {projects.map(project => (
          <WorkCardWrapper key={project.id}>
            <WorkCardTitle>
              {project.title || t('ourWork.defaults.noTitle')}
            </WorkCardTitle>
            {project.client && (
              <WorkCardText>
                {t('ourWork.clientLabel')}: {project.client}
              </WorkCardText>
            )}
            <WorkCardText>
              {project.description || t('ourWork.defaults.noDescription')}
            </WorkCardText>

            {project.imageUrl && project.imageUrl.length === 1 && (
              <WorkShadowContainer>
                <IconCreditServices>
                  <PhoneCreditServices
                    src={project.imageUrl[0]}
                    alt={t('ourWork.imageAlt')}
                    onError={e => {
                      console.error(
                        t('ourWork.errors.imageLoad', {
                          url: project.imageUrl?.[0],
                        })
                      );
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </IconCreditServices>
              </WorkShadowContainer>
            )}

            {project.imageUrl && project.imageUrl.length > 1 && (
              <WorkShadowContainer>
                <ImagesRow>
                  {project.imageUrl[0] && (
                    <IconContainerCard>
                      <IconOne
                        src={project.imageUrl[0]}
                        alt={t('ourWork.imageAlt')}
                      />
                    </IconContainerCard>
                  )}
                  {project.imageUrl[1] && (
                    <IconContainerCard1>
                      <IconSecond
                        src={project.imageUrl[1]}
                        alt={t('ourWork.imageAlt')}
                      />
                    </IconContainerCard1>
                  )}
                  {project.imageUrl[2] && (
                    <IconContainerCard2>
                      <IconThierd
                        src={project.imageUrl[2]}
                        alt={t('ourWork.imageAlt')}
                      />
                    </IconContainerCard2>
                  )}
                  {isDesktop && project.imageUrl[3] && (
                    <IconContainerCard3>
                      <IconFourth
                        src={project.imageUrl[3]}
                        alt={t('ourWork.imageAlt')}
                      />
                    </IconContainerCard3>
                  )}
                </ImagesRow>
              </WorkShadowContainer>
            )}
          </WorkCardWrapper>
        ))}</WorkCardsWrapper>

        {caseStudy && (
          <WorkCardWrapper>
            <WorkCardTitle>
              {caseStudy.title || t('ourWork.defaults.caseStudyTitle')}
            </WorkCardTitle>
            <WorkCardText>
              {caseStudy.content || t('ourWork.defaults.noDescription')}
            </WorkCardText>
          </WorkCardWrapper>
        )}
      </WorkWrapper>
    </Element>
  );
};

export default OurWork;
