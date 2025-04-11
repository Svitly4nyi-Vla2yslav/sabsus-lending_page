import React, { useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface Question {
  question: string;
  answer: string;
  answer2: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();


  AOS.init({
    // Основні налаштування:
    duration: 1600,             // Коротша тривалість
    offset: -320,               // Раніше спрацьовування
    easing: 'ease-out-quad',   // Оптимальна функція плавності
    once: false,                // Анімація тільки один раз
    mirror: true,             // Без повтору при скролі назад
    
    // Важливі фікси:
    disableMutationObserver: true, // Вимикає автоматичний перерахунок
    debounceDelay: 50,         // Затримка для resize подій
    throttleDelay: 99,         // Затримка для scroll подій
    
    // Адаптація:
    disable: function() {
      return window.innerWidth < 1024;
    }
  });

  const toggleAnswer = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const questions: Question[] = [
    {
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer'),
      answer2: t('faq.questions.q1.answer2'),
    },
    {
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer'),
      answer2: t('faq.questions.q2.answer2'),
    },
    {
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer'),
      answer2: t('faq.questions.q3.answer2'),
    },
    {
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer'),
      answer2: t('faq.questions.q4.answer2'),
    },
    {
      question: t('faq.questions.q5.question'),
      answer: t('faq.questions.q5.answer'),
      answer2: t('faq.questions.q5.answer2'),
    },
  ];

  return (
    <Element name="faq">
      <FAQSection>
        <FAQText  data-aos="fade-right" >{t('faq.sectionTitle')}</FAQText>
        <FAQTitle  data-aos="fade-right" >{t('faq.mainHeading')}</FAQTitle>
        <div   data-aos="fade-up"
            data-aos-duration="3000">
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
