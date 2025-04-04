import React, { useState } from 'react';
import {
  AnswerText,
  FAQSection,
  FAQText,
  FAQTitle,
  QuestionButton,
  QuestionItem,
  QuestionWrapper,
  StarIcon,
  XIcon,
} from './FAQ.styled';
import { Element } from 'react-scroll';
import Star from '../../assets/icons/faq/faqStar.svg';
import X from '../../assets/icons/faq/+.svg';

interface Question {
  question: string;
  answer: string;
  answer2: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const questions: Question[] = [
    {
      question: 'What services do you offer?',
      answer: 'Yes, new mockups are released every month.',
      answer2:
        'We specialize in developing CRM systems, mobile applications, and custom IT solutions. We also provide database creation, server setup on AWS, and UI/UX design.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Yes, timelines vary depending on the project scope.',
      answer2:
        'Simple projects can take 1–2 weeks, while more complex systems like CRM or mobile apps may take 1–2 months.',
    },
    {
      question: 'Can I customize the features of my CRM system or application?',
      answer:
        'Yes, all features can be tailored to your specific business needs. ',
      answer2:
        'We develop fully custom logic, dashboards, and workflows based on your requirements.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer maintenance and updates after launch.',
      answer2:
        'This includes bug fixing, performance optimization, and feature upgrades upon request.',
    },
    {
      question: 'How much do your services cost?',
      answer: 'Yes, prices depend on the complexity of the project.',
      answer2:
        'Basic websites start from €500, while custom systems like CRMs or apps are estimated individually after a consultation.',
    },
  ];

  return (
    <Element name="faq">
      <FAQSection>
        <FAQText>FAQ</FAQText>
        <FAQTitle>Everything You Need to Know Before Getting Started</FAQTitle>
        <div>
          {questions.map((q, index) => (
            <QuestionItem key={index}>
              <QuestionWrapper>
                <StarIcon src={Star} alt="⭐" />
                <QuestionButton onClick={() => toggleAnswer(index)}>
                  {q.question}
                  <XIcon src={X} alt="❌" $rotate={activeIndex === index} />
                </QuestionButton>
              </QuestionWrapper>
              <AnswerText $isOpen={activeIndex === index}>
                {q.answer} <br />
                {q.answer2}
              </AnswerText>
            </QuestionItem>
          ))}
        </div>
      </FAQSection>
    </Element>
  );
};

export default FAQ;
