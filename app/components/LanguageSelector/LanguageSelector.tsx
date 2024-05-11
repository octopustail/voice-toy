import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'zh_ch', name: 'Chinese' },
]

type Prop = {
  onSelect: (language: string) => void;
  disabled: boolean;
}

export const LanguageSelector = ({ onSelect, disabled }: Prop) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    onSelect(language);
  };

  return (
    <select
      className="block min-w-48 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      value={selectedLanguage}
      onChange={handleChange}
      disabled={disabled}
      aria-label='Select language'
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
};

