import styled from "styled-components";
import { Wrapper } from '../BurgerMenu/BurgerMenu.styled';


export const ContactUsWrapper = styled.section`
  display: flex;
    width: 343px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin: 80px auto 0px auto;
`;

export const ContactUsText = styled.h3`
font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 135%;
background: linear-gradient(168deg, #fff 0%, #fe5b14 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-bottom: 10px;
`;

export const ContactUsTitle = styled.h2`
 font-family: "Mulish", sans-serif;
font-weight: 700;
font-size: 28px;
line-height: 115%;
letter-spacing: -0.04em;
color: var(--white);
padding-bottom: 20px;
`;

export const FormWrapper = styled.form`
position: relative;
border: 1px solid var(--line);
border-radius: 16px;
width: 100%;
height: auto;
box-shadow: 0 0 0 0 var(--white), 
0 0 0 1px rgba(244, 244, 245, 0.1),
 0 0 0 0 rgba(0, 0, 0, 0), 
 0 6px 9px 0 rgba(0, 0, 0, 0.25);
background: var(--substrate);
    z-index: 0;
    margin-bottom: 60px;
    padding: 16px;
     overflow: hidden;
`;

export const FormTitle = styled.h3`
 font-family: var(--font-family);
font-weight: 500;
font-size: 20px;
color: var(--white);
  margin-bottom: 12px;
`;

export const FormGroup = styled.div`
  margin-bottom: 8px;
`;

export const FormLabel = styled.label`
  display: block;
  font-family: var(--font-family);
  font-size: 14px;
  color: var(--gray-500);
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-family: var(--font-family);
font-weight: 500;
font-size: 20px;
color: var(--gray-500);
  transition: border 0.3s ease;
  box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);

  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-family: var(--font-family);
  appearance: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

export const OptionContainer = styled.div`

`;


export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
font-family: var(--font-family);
font-weight: 500;
font-size: 20px;
color: var(--gray-500);
  min-height: 120px;
  resize: vertical;
  transition: border 0.3s ease;
  height: 90px;
box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

export const FormRadioGroup = styled.div`
position: relative;
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  width: 100%;
      justify-content: space-between;
`;

export const FormRadioLabel = styled.label`
  display: flex;
  align-items: center;
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 175%;
text-align: center;
`;

export const FormRadioInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:checked + span {
    /* Стилі для вибраного стану */
    background: var(--primary);
    color: var(--dark);
  }

  &:focus + span {
    /* Стилі для фокусу */
    box-shadow: 0 0 0 2px var(--primary);
  }
`;

export const RadioCustom = styled.span`
  display: inline-block;
  padding: 6px;
  border: 1px solid var(--line);
  border-radius: 8px;
  transition: all 0.3s ease;
  color: var(--white);
  cursor: pointer;
  border-radius: 6px;
width: 95px;
height: 44px;

box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
`;


export const FormFileUpload = styled.div`
  position: relative;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 50px 32px;
  text-align: center;
  cursor: pointer;
  transition: border 0.3s ease;
  box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover {
    border-color: var(--primary);
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }

  span {
    font-family: var(--font-family);
    color: var(--gray-500);
  }
`;

export const CloudIcon = styled.img`
  width: 28px;
  height: 28px;
  
 
  }
`;

export const CloudWrapper = styled.div`
border-radius: 8px;
padding: 8px 36px;
box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
`

export const FormSubmitButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(168deg, #fff 0%, #fe5b14 100%);
  color: var(--dark);
  border: none;
  border-radius: 8px;
  font-family: var(--font-family);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(254, 91, 20, 0.3);
  }
`;

// !-------------------------------_________________

export const FilePreviewContainer = styled.div`
  border-radius: 8px;
  padding: 11px 16px;
  width: 100%;
  height: 48px;
  box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 #525154;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 30%, rgba(255, 255, 255, 0.02) 100%);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const FileIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const FileInfo = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const FileName = styled.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--gray-800);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileSize = styled.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 10px;
  color: var(--gray-800);
`;

export const FilePreviewLink = styled.a`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--orange-500);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const RemoveFileButton = styled.button`
  background: none;
  border: none;
  color: var(--gray-500);
  cursor: pointer;
  font-size: 14px;
  padding: 0 8px;
  &:hover {
    color: var(--primary);
  }
`;