import React from 'react';
import {
  AboutTitle,
  AboutWrapper,
  AllProjectsSpann,
  AllProjectsSpannGray,
  AllProjectsText,
  AllProjectsTitle,
  CompleteContainer,
  CompleteText,
  ComprehensiveContainer,
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  ContainerProjects,
  ContainerTabl,
  DataContainer,
  DataContainerText,
  DataText,
  DeleteIcon,
  DeleteIconBox,
  Div,
  DivProjects,
  DollarIcon,
  DollarSpan,
  EditorIcon,
  GrafikIcon,
  GrafikIconRed,
  GrafikWrapp,
  IconContainer,
  IconTabl,
  IconWarning,
  ListIcon,
  MyToDoBoxContainer,
  MyToDoHeaderContainer,
  MyToDoItems,
  MyToDoItemsContainer,
  MyToDoItemsTitel,
  MyToDoListBoxCheck,
  PointIcon,
  PriseText,
  ProgressBar,
  ProgressBarContainer,
  ProjectsOverviewContainer,
  ProjectsOverviewSpan,
  ProjectsOverviewSpanContainer,
  ProjectsOverviewSpanRed,
  ProjectsOverviewText,
  ProjectsOverviewTextContainer,
  ProzentIcon,
  ProzentIconContainer,
  ProzentText,
  ShadowContainer,
  TaskText,
  TextAboutUs,
  ToDoContainer,
  TotalDepositContainer,
  TotalDepositText,
  WarningOrangContainer,
  WarningOrangText,
  WriteOrangeBox,
} from './About.styled';
import Comp from '../../assets/icons/about/compIcon.svg';
import { PriseContainer } from './About.styled';
import $ from '../../assets/icons/about/$-icon.svg';
import Graf from '../../assets/icons/about/depositGrafik.svg';
import Prozent from '../../assets/icons/about/prozent-icon.svg';
import Grafik from '../../assets/icons/about/grafik1.svg';
import List from '../../assets/icons/about/listIcon.svg';
import Tabl from '../../assets/icons/about/projects-tabl.svg';
import Warn from '../../assets/icons/about/WarningIcon.svg';
import Point from '../../assets/icons/about/pointIcon.svg';
import Delete from '../../assets/icons/about/delete.svg';
import Editor from '../../assets/icons/about/editor.svg';
import Card from './Card';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <AboutWrapper>
        <TextAboutUs>{t('about.sectionTitle')}</TextAboutUs>
        <AboutTitle>{t('about.mainHeading')}</AboutTitle>

        <ComprehensiveContainer>
          <IconContainer>
            <ComputerIcon src={Comp} alt={t('about.icons.computer')} />
          </IconContainer>
          <ComprehensiveTitle>{t('about.crm.title')}</ComprehensiveTitle>
          <ComprehensiveText>{t('about.crm.description')}</ComprehensiveText>

          <ContainerTabl>
            <TotalDepositContainer>
              <Div>
                <PriseContainer>
                  <TotalDepositText>
                    {t('about.deposit.total')}
                  </TotalDepositText>
                  <PriseText>$1200.00</PriseText>
                </PriseContainer>
                <DollarSpan>
                  <DollarIcon src={$} alt={t('about.icons.dollar')} />
                </DollarSpan>
              </Div>
              <GrafikWrapp>
                <GrafikIcon src={Graf} alt={t('about.icons.chart')} />
              </GrafikWrapp>
            </TotalDepositContainer>

            <ContainerProjects>
              <ProzentIconContainer>
                <ProzentText>
                  <p>62</p>
                  <span>{t('about.projects.completed')}</span>
                  <ProzentIcon src={Prozent} alt={t('about.icons.percent')} />
                </ProzentText>
              </ProzentIconContainer>

              <PriseContainer>
                <AllProjectsTitle>{t('about.projects.all')}</AllProjectsTitle>
                <AllProjectsText>
                  <AllProjectsSpann></AllProjectsSpann>{' '}
                  {t('about.projects.status.completed')}
                </AllProjectsText>
                <AllProjectsText>
                  <AllProjectsSpann></AllProjectsSpann>{' '}
                  {t('about.projects.status.pending')}
                </AllProjectsText>
                <AllProjectsText>
                  <AllProjectsSpannGray></AllProjectsSpannGray>
                  {t('about.projects.status.notStarted')}
                </AllProjectsText>
              </PriseContainer>
            </ContainerProjects>

            <TotalDepositContainer>
              <Div>
                <PriseContainer>
                  <TotalDepositText>
                    {t('about.expenses.total')}
                  </TotalDepositText>
                  <PriseText>$1200.00</PriseText>
                </PriseContainer>
                <DollarSpan>
                  <DollarIcon src={$} alt={t('about.icons.dollar')} />
                </DollarSpan>
              </Div>
              <GrafikWrapp>
                <GrafikIconRed src={Grafik} alt={t('about.icons.chart')} />
              </GrafikWrapp>
            </TotalDepositContainer>

            <TotalDepositContainer>
              <Div>
                <PriseContainer>
                  <ProjectsOverviewText>
                    {t('about.tasks.total')}
                  </ProjectsOverviewText>
                  <PriseText>20</PriseText>
                </PriseContainer>
                <DollarSpan>
                  <ListIcon src={List} alt={t('about.icons.list')} />
                </DollarSpan>
              </Div>
              <TaskText>{t('about.tasks.unfinished')}</TaskText>
              <ProgressBarContainer>
                <ProgressBar />
              </ProgressBarContainer>
            </TotalDepositContainer>
          </ContainerTabl>

          <ShadowContainer>
            <DivProjects>
              <ProjectsOverviewContainer>
                <ProjectsOverviewTextContainer>
                  <ProjectsOverviewText>
                    {t('about.projects.overview')}
                  </ProjectsOverviewText>
                  <ProjectsOverviewSpanContainer>
                    <ProjectsOverviewSpanRed>
                      {t('about.time.week')}
                    </ProjectsOverviewSpanRed>
                    <ProjectsOverviewSpan>
                      {t('about.time.month')}
                    </ProjectsOverviewSpan>
                    <ProjectsOverviewSpan>
                      {t('about.time.year')}
                    </ProjectsOverviewSpan>
                    <ProjectsOverviewSpan>
                      {t('about.time.all')}
                    </ProjectsOverviewSpan>
                  </ProjectsOverviewSpanContainer>
                </ProjectsOverviewTextContainer>
                <IconTabl src={Tabl} alt={t('about.icons.table')} />
              </ProjectsOverviewContainer>

              <MyToDoItemsContainer>
                <MyToDoHeaderContainer>
                  <MyToDoItemsTitel>{t('about.todo.title')}</MyToDoItemsTitel>
                  <MyToDoItemsTitel>{t('about.todo.viewAll')}</MyToDoItemsTitel>
                </MyToDoHeaderContainer>

                <MyToDoItems>
                  <ToDoContainer>
                    <WarningOrangContainer>
                      <IconWarning src={Warn} alt={t('about.icons.warning')} />
                      <WarningOrangText>
                        {t('about.todo.latest')}
                      </WarningOrangText>
                    </WarningOrangContainer>
                    <CompleteContainer>
                      <DataContainer>
                        <PointIcon src={Point} alt={t('about.icons.point')} />
                        <MyToDoListBoxCheck></MyToDoListBoxCheck>
                        <CompleteText>
                          {t('about.todo.taskExample')}
                        </CompleteText>
                        <MyToDoBoxContainer>
                          <DeleteIconBox>
                            <DeleteIcon
                              src={Delete}
                              alt={t('about.icons.delete')}
                            />
                          </DeleteIconBox>
                          <WriteOrangeBox>
                            <EditorIcon
                              src={Editor}
                              alt={t('about.icons.edit')}
                            />
                          </WriteOrangeBox>
                        </MyToDoBoxContainer>
                      </DataContainer>
                      <DataContainerText>
                        <DataText>2023-12-26 07:15:00</DataText>
                      </DataContainerText>
                    </CompleteContainer>
                  </ToDoContainer>

                  {/* Повторювані ToDo елементи з однаковим перекладом */}
                  {[1, 2].map(item => (
                    <ToDoContainer key={item}>
                      <WarningOrangContainer>
                        <IconWarning
                          src={Warn}
                          alt={t('about.icons.warning')}
                        />
                        <WarningOrangText>
                          {t('about.todo.latestFinished')}
                        </WarningOrangText>
                      </WarningOrangContainer>
                      <CompleteContainer>
                        <DataContainer>
                          <PointIcon src={Point} alt={t('about.icons.point')} />
                          <MyToDoListBoxCheck></MyToDoListBoxCheck>
                          <CompleteText>
                            {t('about.todo.taskExample')}
                          </CompleteText>
                          <MyToDoBoxContainer>
                            <DeleteIconBox>
                              <DeleteIcon
                                src={Delete}
                                alt={t('about.icons.delete')}
                              />
                            </DeleteIconBox>
                            <WriteOrangeBox>
                              <EditorIcon
                                src={Editor}
                                alt={t('about.icons.edit')}
                              />
                            </WriteOrangeBox>
                          </MyToDoBoxContainer>
                        </DataContainer>
                        <DataContainerText>
                          <DataText>2023-12-26 07:15:00</DataText>
                        </DataContainerText>
                      </CompleteContainer>
                    </ToDoContainer>
                  ))}
                </MyToDoItems>
              </MyToDoItemsContainer>
            </DivProjects>
          </ShadowContainer>
        </ComprehensiveContainer>

        <Card />
      </AboutWrapper>
    </>
  );
};

export default About;
