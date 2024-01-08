import React from 'react';
import CountryFlag from './CountryFlag';

interface CountrySelectProps {
  id: string;
  label: string;
  countries: readonly { label: string; code: string; phone?: string }[];
  showPhone?: boolean;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ id, label, countries, showPhone = true }) => {
  return (
    <div className="autocomplete-container">
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {countries.map((option) => (
          <option key={option.label} value={option.label}>
            <CountryFlag label={option.label} countryCode={option.code} />
            {option.label} {showPhone && option.phone && `+${option.phone}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
