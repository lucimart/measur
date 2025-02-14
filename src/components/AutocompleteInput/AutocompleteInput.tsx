import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Dropdown = styled.ul`
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  height: fit-content;
  list-style: none;
  margin: 0;
  margin-top: 0.5rem;
  max-height: 300px;
  max-width: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  width: fit-content;
  z-index: 10;

  /* Hide scrollbar for Webkit */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
`;

const Option = styled.li<{ active: boolean }>`
  padding: 4px 10px;
  background: ${(props) =>
    props.active ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)'};
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  color: rgb(185, 183, 172);
  &::placeholder {
    color: rgb(185, 183, 172);
  }
`;

export type OptionType = {
  id: string;
  label: string;
};

type AutocompleteInputProps = {
  options: OptionType[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>(options);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter options whenever value changes.
  useEffect(() => {
    const newOptions = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(newOptions);
    setActiveIndex(0);
  }, [value, options]);

  // Scroll the active option into view.
  useEffect(() => {
    const activeOption = document.getElementById(`option-${activeIndex}`);
    if (activeOption) {
      activeOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setShowDropdown(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) =>
        Math.min(prev + 1, filteredOptions.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredOptions[activeIndex]) {
        onChange(filteredOptions[activeIndex].label);
        setShowDropdown(false);
      }
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <div>
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {showDropdown && filteredOptions.length > 0 && (
        <Dropdown>
          {filteredOptions.map((option, index) => (
            <Option
              key={option.id}
              id={`option-${index}`}
              active={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseDown={() => {
                onChange(option.label);
                setShowDropdown(false);
              }}
            >
              {option.label}
            </Option>
          ))}
        </Dropdown>
      )}
    </div>
  );
};
