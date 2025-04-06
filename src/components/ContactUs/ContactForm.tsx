import {
  CloudIcon,
  CloudWrapper,
  FileIcon,
  FileInfo,
  FileName,
  FilePreviewContainer,
  FilePreviewLink,
  FileSize,
  FormWrapper,
  RadioCustom,
  RemoveFileButton,
} from './ContactUs.styled';
import { toast } from 'react-toastify';

import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firabase';
import {
  FormTitle,
  FormGroup,
  FormRadioGroup,
  FormRadioLabel,
  FormRadioInput,
  FormFileUpload,
} from './ContactUs.styled';
import {
  CustomSelect,
  ErrorInput,
  ErrorText,
  ErrorTextarea,
} from './CustomSelect';

import Cloud from '../../assets/icons/cloud🌥.svg';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { MagicButton } from '../MagicButton/MagicButton';
import { IconsStars } from '../BurgerMenu/BurgerMenu.styled';
import { SuccessModal } from './SuccessMessage';
import IconStars from '../../assets/icons/Icon-stars.svg';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  budget?: string;
  contactMethod?: string;
  contact?: string;
  description?: string;
  files?: string;
}
interface FilePreview {
  name: string;
  size: number;
  type: string;
  url?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  budget: string;
  contactMethod: string;
  contact: string;
  description: string;
  files: FileList | null;
  filePreviews: FilePreview[];
}

const ContactForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    budget: '',
    contactMethod: '',
    contact: '',
    description: '',
    files: null,
    filePreviews: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isUploading, setIsUploading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select budget range';
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod = 'Please select contact method';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact information is required';
    } else if (
      formData.contactMethod === 'Email' &&
      !/^\S+@\S+\.\S+$/.test(formData.contact)
    ) {
      newErrors.contact = 'Please enter valid email';
    } else if (
      formData.contactMethod === 'Phone' &&
      !/^[\d\s\-+]{10,}$/.test(formData.contact)
    ) {
      newErrors.contact = 'Please enter valid phone number';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
      }));

      setFormData(prev => ({
        ...prev,
        files: e.target.files,
        filePreviews: filesArray,
      }));
    }
  };

  const removeFile = (index: number) => {
    const newPreviews = [...formData.filePreviews];
    newPreviews.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      filePreviews: newPreviews,
      files: null, // Очищаємо files, оскільки ми не можемо видалити конкретний файл з FileList
    }));
  };

  const uploadFiles = async (
    files: FileList
  ): Promise<Record<string, string>> => {
    const urls: Record<string, string> = {};

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > 10 * 1024 * 1024) {
          throw new Error(`File ${file.name} is too large (max 10MB)`);
        }

        const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        urls[file.name] = url; // Зберігаємо URL за ім'ям файлу
      }
      return urls;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const isValid = validateForm();
    if (!isValid) return;
  
    try {
      setIsUploading(true);
  
      // Завантажуємо файли, якщо вони є
      let fileUrls: string[] = [];
      if (formData.files) {
        const fileUrls = await uploadFiles(formData.files);
        
        // Оновлюємо filePreviews з URL
        const updatedPreviews = formData.filePreviews.map((file, index) => ({
          ...file,
          url: fileUrls[index] // Додаємо URL до відповідного файлу
        }));
        
        setFormData(prev => ({
          ...prev,
          filePreviews: updatedPreviews
        }));
      }
  
      // Відправляємо дані у Firestore
      const docRef = await addDoc(collection(db, 'contactSubmissions'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        budget: formData.budget,
        contactMethod: formData.contactMethod,
        contact: formData.contact,
        description: formData.description,
        fileUrls,
        createdAt: new Date(),
      });
  
      console.log('Document written with ID: ', docRef.id);
      setIsModalOpen(true);
  
      // Скидаємо форму
      setFormData({
        firstName: '',
        lastName: '',
        budget: '',
        contactMethod: '',
        contact: '',
        description: '',
        files: null,
        filePreviews: [],
      });
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'Error submitting form. Please try again.';
      if (error instanceof Error) {
        if (error.message.includes('CORS')) {
          errorMessage = 'Server configuration error. Please contact support.';
        } else if (error.message.includes('too large')) {
          errorMessage = error.message;
        }
      }
      toast.error(errorMessage, {
        position: 'top-center',
        style: {
          border: '1px solid #ff4d4f',
          padding: '16px',
          color: '#ff4d4f',
          background: 'var(--substrate)'
        }
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handlePreview = (file: FilePreview) => {
    if (file.url) {
      window.open(file.url, '_blank');
    } else {
      // Якщо файл ще не завантажено на сервер
   
      toast.error('File is not uploaded yet. Please submit the form first.', {
        position: 'top-center',
        style: {
          border: '1px solid #ff4d4f',
          padding: '16px',
          color: '#ff4d4f',
          background: 'var(--substrate)',
          zIndex: 3,
        }
      });
    }
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>Select your budget range</FormTitle>

      <FormRadioGroup>
        <FormRadioLabel>
          <FormRadioInput
            type="radio"
            name="budget"
            value="Up to $10K"
            checked={formData.budget === 'Up to $10K'}
            onChange={handleChange}
          />
          <RadioCustom>Up to $10K</RadioCustom>
        </FormRadioLabel>

        <FormRadioLabel>
          <FormRadioInput
            type="radio"
            name="budget"
            value="$10K-$30K"
            checked={formData.budget === '$10K-$30K'}
            onChange={handleChange}
          />
          <RadioCustom>$10K-$30K</RadioCustom>
        </FormRadioLabel>

        <FormRadioLabel>
          <FormRadioInput
            type="radio"
            name="budget"
            value="$30K+"
            checked={formData.budget === '$30K+'}
            onChange={handleChange}
          />
          <RadioCustom> $30K+</RadioCustom>
        </FormRadioLabel>
        {errors.budget && <ErrorText>{errors.budget}</ErrorText>}
      </FormRadioGroup>

      <FormGroup>
        <ErrorInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          $hasError={!!errors.firstName}
        />
        {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <ErrorInput
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          $hasError={!!errors.lastName}
        />
        {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <CustomSelect
          options={[
            { value: 'Email', label: 'Email' },
            { value: 'Phone', label: 'Phone' },
            { value: 'WhatsApp', label: 'WhatsApp' },
            { value: 'Telegram', label: 'Telegram' },
          ]}
          value={formData.contactMethod}
          onChange={value => setFormData({ ...formData, contactMethod: value })}
          placeholder="Way to Connect"
          $hasError={!!errors.contactMethod}
        />
        {errors.contactMethod && <ErrorText>{errors.contactMethod}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <ErrorInput
          placeholder={
            formData.contactMethod === 'Email'
              ? 'Your email'
              : formData.contactMethod === 'Phone'
              ? 'Your phone number'
              : formData.contactMethod === 'WhatsApp'
              ? 'Your WhatsApp'
              : formData.contactMethod === 'Telegram'
              ? 'Your Telegram'
              : 'Choose a contact method…'
          }
          type={formData.contactMethod === 'Email' ? 'email' : 'text'}
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          $hasError={!!errors.contact}
        />
        {errors.contact && <ErrorText>{errors.contact}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <ErrorTextarea
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          $hasError={!!errors.description}
        />
        {errors.description && <ErrorText>{errors.description}</ErrorText>}
      </FormGroup>

      <FormGroup>
        {formData.filePreviews.length > 0 ? (
          formData.filePreviews.map((file, index) => (
            <FilePreviewContainer key={`${file.name}-${index}`}>
              <FileIcon>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66673 23.1473H17.3339C19.4133 23.1473 20.4479 22.0926 20.4479 20.0033V10.8829H13.1754C11.8897 10.8829 11.2872 10.27 11.2872 8.98429V1.61157H6.66673C4.59759 1.61157 3.55273 2.67614 3.55273 4.76586V20.0033C3.55273 22.1024 4.59759 23.1473 6.66673 23.1473ZM13.2059 9.50672H20.3373C20.267 9.09486 19.9756 8.69286 19.5037 8.20086L13.9589 2.566C13.4969 2.08386 13.0752 1.79243 12.653 1.72172V8.96457C12.653 9.32586 12.8442 9.50672 13.2059 9.50672Z"
                    fill="#FE5B14"
                  />
                </svg>
              </FileIcon>
              <FileInfo>
                <FileName>{file.name}</FileName>
                <FileSize>{(file.size / (1024 * 1024)).toFixed(2)} MB</FileSize>
              </FileInfo>
              <FilePreviewLink onClick={() => handlePreview(file)}>
                Preview
              </FilePreviewLink>
              <RemoveFileButton onClick={() => removeFile(index)}>
                ×
              </RemoveFileButton>
            </FilePreviewContainer>
          ))
        ) : (
          <FormFileUpload>
            <input type="file" onChange={handleFileChange} multiple />
            <CloudWrapper>
              <CloudIcon src={Cloud} alt="☁️" />
            </CloudWrapper>
            <span>Click here to upload or drop files here</span>
          </FormFileUpload>
        )}
      </FormGroup>

      <FormGroup>
        <MagicButton type="submit" disabled={isUploading}>
          <IconsStars src={IconStars} alt="Stars" />{' '}
          {isUploading ? 'Uploading...' : 'Submit'}
        </MagicButton>
      </FormGroup>
      {isModalOpen && <SuccessModal onClose={() => setIsModalOpen(false)} />}
    </FormWrapper>
  );
};

export default ContactForm;
function setErrors(newErrors: FormErrors) {
  throw new Error('Function not implemented.');
}
