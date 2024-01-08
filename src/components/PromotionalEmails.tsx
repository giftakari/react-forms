import React, { useState } from 'react';

interface AgreeCheckboxProps {
  onAgreeChange: (isChecked: boolean) => void;
}

const PromotionalEmails: React.FC<AgreeCheckboxProps> = ({ onAgreeChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    onAgreeChange(newValue);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Yes,I want to receive promotional emails 
      </label>
    </div>
  );
};

export default PromotionalEmails;
