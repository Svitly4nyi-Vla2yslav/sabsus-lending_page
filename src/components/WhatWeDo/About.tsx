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
import Grafik from '../../assets/icons/about/TotalExpensesIcon.svg';
import List from '../../assets/icons/about/listIcon.svg';
import Tabl from '../../assets/icons/about/projects-tabl.svg';
import Warn from '../../assets/icons/about/WarningIcon.svg';
import Point from '../../assets/icons/about/pointIcon.svg';
import Delete from '../../assets/icons/about/delete.svg';
import Editor from '../../assets/icons/about/editor.svg';

const About: React.FC = () => {
  return (
    <>
      <AboutWrapper>
        <TextAboutUs>What We Do</TextAboutUs>
        <AboutTitle>
          We create IT solutions, from CRM to custom apps, to streamline your
          business
        </AboutTitle>
        <ComprehensiveContainer>
          <IconContainer>
            {' '}
            <ComputerIcon src={Comp} alt="🖥️" />
          </IconContainer>
          <ComprehensiveTitle>Comprehensive CRM Systems</ComprehensiveTitle>
          <ComprehensiveText>
            Develop robust CRM systems tailored to your business needs. Automate
            workflows and deliver a seamless customer experience.
          </ComprehensiveText>
          <ContainerTabl>
            <TotalDepositContainer>
              <Div>
                <PriseContainer>
                  <TotalDepositText>Total Deposit</TotalDepositText>
                  <PriseText>$1200.00</PriseText>
                </PriseContainer>{' '}
                <DollarSpan>
                  {' '}
                  <DollarIcon src={$} alt="💲" />
                </DollarSpan>
              </Div>
              <GrafikWrapp>
                <GrafikIcon src={Graf} />
              </GrafikWrapp>
            </TotalDepositContainer>
            <ContainerProjects>
              {' '}
              <ProzentIconContainer>
                {' '}
                <ProzentText>
                  {' '}
                  <p>62</p> <span>Compete</span>
                  <ProzentIcon src={Prozent} alt="🍾" />
                </ProzentText>
              </ProzentIconContainer>
              <PriseContainer>
                <AllProjectsTitle>All Projects</AllProjectsTitle>
                <AllProjectsText>
                  {' '}
                  <AllProjectsSpann></AllProjectsSpann> Compete{' '}
                </AllProjectsText>
                <AllProjectsText>
                  {' '}
                  <AllProjectsSpann></AllProjectsSpann> Pending
                </AllProjectsText>
                <AllProjectsText>
                  <AllProjectsSpannGray> </AllProjectsSpannGray>
                  Not Start
                </AllProjectsText>
              </PriseContainer>
            </ContainerProjects>
            <TotalDepositContainer>
              <Div>
                <PriseContainer>
                  <TotalDepositText>Total Expenses</TotalDepositText>
                  <PriseText>$1200.00</PriseText>
                </PriseContainer>{' '}
                <DollarSpan>
                  {' '}
                  <DollarIcon src={$} alt="💲" />
                </DollarSpan>
              </Div>
              <GrafikWrapp>
                <GrafikIconRed src={Grafik} />
              </GrafikWrapp>
            </TotalDepositContainer>
            <TotalDepositContainer>
              <Div>
                <PriseContainer>
                  <ProjectsOverviewText>Total Deposit</ProjectsOverviewText>
                  <PriseText>20</PriseText>
                </PriseContainer>
                <DollarSpan>
                  <ListIcon src={List} />
                </DollarSpan>
              </Div>
              <TaskText>Tasks Not Finished</TaskText>
              <ProgressBarContainer>
                {' '}
                <ProgressBar />
              </ProgressBarContainer>
            </TotalDepositContainer>
          </ContainerTabl>
          <ShadowContainer>
            <DivProjects>
              <ProjectsOverviewContainer>
                <ProjectsOverviewTextContainer>
                  <ProjectsOverviewText>Projects Overview</ProjectsOverviewText>{' '}
                  <ProjectsOverviewSpanContainer>
                    <ProjectsOverviewSpanRed>Week</ProjectsOverviewSpanRed>
                    <ProjectsOverviewSpan>Month</ProjectsOverviewSpan>
                    <ProjectsOverviewSpan>Year</ProjectsOverviewSpan>
                    <ProjectsOverviewSpan>All</ProjectsOverviewSpan>
                  </ProjectsOverviewSpanContainer>{' '}
                </ProjectsOverviewTextContainer>
                <IconTabl src={Tabl} />
              </ProjectsOverviewContainer>{' '}
              <MyToDoItemsContainer>
                <MyToDoHeaderContainer>
                  <MyToDoItemsTitel>My To Do Items</MyToDoItemsTitel>
                  <MyToDoItemsTitel>View All + Add To Do</MyToDoItemsTitel>
                </MyToDoHeaderContainer>
                <MyToDoItems>
                  <ToDoContainer>
                    <WarningOrangContainer>
                      <IconWarning src={Warn} alt="⚠️" />
                      <WarningOrangText>Latest to do's</WarningOrangText>
                    </WarningOrangContainer>
                    <CompleteContainer>
                      {' '}
                      <DataContainer>
                        <PointIcon src={Point} />
                        <MyToDoListBoxCheck></MyToDoListBoxCheck>
                        <CompleteText>
                          Compete this projects Monday
                        </CompleteText>
                        <MyToDoBoxContainer>
                          <DeleteIconBox>
                            <DeleteIcon src={Delete} alt="🛑" />
                          </DeleteIconBox>
                          <WriteOrangeBox>
                            <EditorIcon src={Editor} alt="✍️" />
                          </WriteOrangeBox>
                        </MyToDoBoxContainer>
                      </DataContainer>
                      <DataContainerText>
                        <DataText>
                          2023-12-26 07:15:00{' '}
                        </DataText>
                      </DataContainerText>
                    </CompleteContainer>
                  </ToDoContainer>
                  <ToDoContainer>
                  <WarningOrangContainer>
                      <IconWarning src={Warn} alt="⚠️" />
                      <WarningOrangText>Latest finished to do's</WarningOrangText>
                    </WarningOrangContainer>
                    <CompleteContainer>
                      {' '}
                      <DataContainer>
                        <PointIcon src={Point} />
                        <MyToDoListBoxCheck></MyToDoListBoxCheck>
                        <CompleteText>
                          Compete this projects Monday
                        </CompleteText>
                        <MyToDoBoxContainer>
                          <DeleteIconBox>
                            <DeleteIcon src={Delete} alt="🛑" />
                          </DeleteIconBox>
                          <WriteOrangeBox>
                            <EditorIcon src={Editor} alt="✍️" />
                          </WriteOrangeBox>
                        </MyToDoBoxContainer>
                      </DataContainer>
                      <DataContainerText>
                        <DataText>
                          2023-12-26 07:15:00{' '}
                        </DataText>
                      </DataContainerText>
                    </CompleteContainer>
                  </ToDoContainer>
                  <ToDoContainer>
                  <WarningOrangContainer>
                      <IconWarning src={Warn} alt="⚠️" />
                      <WarningOrangText>Latest to do's</WarningOrangText>
                    </WarningOrangContainer>
                    <CompleteContainer>
                      {' '}
                      <DataContainer>
                        <PointIcon src={Point} />
                        <MyToDoListBoxCheck></MyToDoListBoxCheck>
                        <CompleteText>
                          Compete this projects Monday
                        </CompleteText>
                        <MyToDoBoxContainer>
                          <DeleteIconBox>
                            <DeleteIcon src={Delete} alt="🛑" />
                          </DeleteIconBox>
                          <WriteOrangeBox>
                            <EditorIcon src={Editor} alt="✍️" />
                          </WriteOrangeBox>
                        </MyToDoBoxContainer>
                      </DataContainer>
                      <DataContainerText>
                        <DataText>
                          2023-12-26 07:15:00{' '}
                        </DataText>
                      </DataContainerText>
                    </CompleteContainer>
                  </ToDoContainer>
                </MyToDoItems>
              </MyToDoItemsContainer>
            </DivProjects>
          </ShadowContainer>
        </ComprehensiveContainer>
      </AboutWrapper>
    </>
  );
};

export default About;
