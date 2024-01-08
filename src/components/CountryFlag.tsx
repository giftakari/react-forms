import React from 'react';

type CountryFlagProps = {
  countryCode: string;
  label: string;
};


function getUnicodeFlagIcon(countryCode: string): string {
  return countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

const CountryFlag: React.FC<CountryFlagProps>=({ countryCode, label}) =>{
  return (
    <>
    
        {getUnicodeFlagIcon(countryCode)}
     
     
    </>
  );
}

export default  CountryFlag
