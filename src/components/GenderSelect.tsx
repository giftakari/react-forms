import React, { useState } from 'react';

interface GenderSelectProps {
    onGenderChange: (selectedGender: string) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ onGenderChange }) => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newGender = event.target.value;
        setSelectedGender(newGender);
        onGenderChange(newGender);
    };

    return (
        <div >
            <label >
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={selectedGender === 'male'}
                    onChange={handleGenderChange}
                    required
                />
                Male
            </label>

            <label >
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={selectedGender === 'female'}
                    onChange={handleGenderChange}
                    required
                />
                Female
            </label>


        </div>
    );
};

export default GenderSelect;

