import React from 'react';
import {
  AboutTitle,
  AboutWrapper,
  AllProjectsSpann,
  AllProjectsSpannGray,
  AllProjectsText,
  AllProjectsTitle,
  ComprehensiveContainer,
  ComprehensiveText,
  ComprehensiveTitle,
  ComputerIcon,
  ContainerProjects,
  ContainerTabl,
  Div,
  DollarIcon,
  DollarSpan,
  GrafikIcon,
  GrafikIconRed,
  GrafikWrapp,
  IconContainer,
  ListIcon,
  PriseText,
  ProgressBar,
  ProgressBarContainer,
  ProjectsOverviewText,
  ProzentIcon,
  ProzentIconContainer,
  ProzentText,
  TaskText,
  TextAboutUs,
  TotalDepositContainer,
  TotalDepositText,
} from './About.styled';
import Comp from '../../assets/icons/about/compIcon.svg';
import { PriseContainer } from './About.styled';
import $ from '../../assets/icons/about/$-icon.svg';
import Graf from '../../assets/icons/about/depositGrafik.svg';
import Prozent from '../../assets/icons/about/prozent-icon.svg';
import Grafik from '../../assets/icons/about/TotalExpensesIcon.svg';
import List from '../../assets/icons/about/listIcon.svg';

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
              <ProgressBarContainer> <ProgressBar/></ProgressBarContainer>
            </TotalDepositContainer>
          </ContainerTabl>
        </ComprehensiveContainer>
      </AboutWrapper>
    </>
  );
};

export default About;
