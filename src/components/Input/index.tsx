import React from 'react';

import { Container, InputField, Label } from './styles';

interface InputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, label, value, placeholder, onBlur, onChange }) => (
  <Container>
    <Label>{label}</Label>
    <InputField
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
    />
  </Container>
);

export default Input;
