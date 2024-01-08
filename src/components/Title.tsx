import React, { useState } from 'react';

function Title() {
  const [selectedTitle, setSelectedTitle] = useState('');

  const titleOptions = [
    'Mr.',
    'Mrs.',
    'Miss',
    'Ms.',
    'Dr.',
    'Prof.',
    'Rev.',
    'Capt.',
    'Lt.',
    'Col.',
    'Major',
    'Cmdr.',
    'Sgt.',
    'Cpl.',
    'Sir',
    'Madam',
    'Lord',
    'Lady',
    'Duke',
    'Duchess',
    'Ambassador',
    'Judge',
    'Justice',
    'Honorable',
  ];

  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  return (
    <div>
      <label htmlFor="title">Select a Title</label>
      <select
        id="title"
        name="title"
        value={selectedTitle}
        onChange={handleTitleChange}
      >
        <option value="">
          -- Select Title --
        </option>
        {titleOptions.map((title) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Title;
