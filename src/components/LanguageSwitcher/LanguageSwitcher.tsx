import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ENG from "../../assets/icons/US.svg"
import ESP from "../../assets/icons/ES.svg"
import RUS from "../../assets/icons/RU.svg"

// Дані мов
const languages = [
  { code: 'en', label: 'ENG', flag: ENG },
  { code: 'es', label: 'ESP', flag: ESP },
  { code: 'ru', label: 'RUS', flag: RUS },
];

// Styled Components
const Wrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const Button = styled.button`
margin-top: 8px ;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 28px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #444;

    background-color: rgba(249, 249, 249, 0.28);
  }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  width: 90px;
  background-color: rgba(249, 249, 249, 0.28);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const DropdownItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;

const Icons = styled.img`
width: 20px;
`

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <Wrapper>
      <Button onClick={toggleMenu}>
        <span>{selectedLang.label}</span>
         <Icons src={selectedLang.flag} alt={selectedLang.label}/>
      </Button>

      {/* Випадаючий список мов */}
      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map(lang => (
              <DropdownItem
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang);
                  setIsOpen(false);
                }}
              >
                
                {lang.label}<Icons src={lang.flag}/>
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default LanguageSwitcher;
