import {
  CloudIcon,
  CloudWrapper,
  FormWrapper,
  RadioCustom,
} from './ContactUs.styled';
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firabase';
import {
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  FormRadioGroup,
  FormRadioLabel,
  FormRadioInput,
  FormFileUpload,
  FormSubmitButton,
} from './ContactUs.styled';
import {
  CustomSelect,
  ErrorInput,
  ErrorText,
  ErrorTextarea,
} from './CustomSelect';

import Cloud from '../../assets/icons/cloud🌥.svg';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  budget?: string;
  contactMethod?: string;
  contact?: string;
  description?: string;
  files?: string;
}
interface FormData {
  firstName: string;
  lastName: string;
  budget: string;
  contactMethod: string;
  contact: string;
  description: string;
  files: FileList | null;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    budget: '',
    contactMethod: '',
    contact: '',
    description: '',
    files: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

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
    setFormData(prev => ({ ...prev, files: e.target.files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валідація форми
    const isValid = validateForm();
    if (!isValid) return;

    try {
      // Отправка текстовых данных в Firestore
      const docRef = await addDoc(collection(db, 'contactSubmissions'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        budget: formData.budget,
        contactMethod: formData.contactMethod,
        contact: formData.contact,
        description: formData.description,
        createdAt: new Date(),
      });

      console.log('Document written with ID: ', docRef.id);
      alert('Form submitted successfully!');

      // Сброс формы
      setFormData({
        firstName: '',
        lastName: '',
        budget: '',
        contactMethod: '',
        contact: '',
        description: '',
        files: null,
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting form. Please try again.');
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
        <FormFileUpload>
          <input type="file" onChange={handleFileChange} multiple />
          <CloudWrapper>
            <CloudIcon src={Cloud} alt="☁️" />
          </CloudWrapper>
          <span>Click here to upload or drop files here</span>
        </FormFileUpload>
      </FormGroup>

      <FormSubmitButton type="submit">Submit</FormSubmitButton>
    </FormWrapper>
  );
};

export default ContactForm;
function setErrors(newErrors: FormErrors) {
  throw new Error('Function not implemented.');
}
