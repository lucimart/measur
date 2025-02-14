import React from 'react';
import { AutocompleteInput, OptionType } from '../AutocompleteInput';
import { VOLUME_UNITS, WEIGHT_UNITS } from '../../constants';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: inline-block;
`;

export type MeasurementProps = {
  measurement: string;
  setMeasurement: (measurement: string) => void;
  placeholder?: string;
};

export const Measurement = ({ measurement, setMeasurement, placeholder }: MeasurementProps) => {
  const volumeOptions: OptionType[] = VOLUME_UNITS.map((u) => ({
    id: u.id,
    label: u.name[0],
  }));
  const weightOptions: OptionType[] = WEIGHT_UNITS.map((u) => ({
    id: u.id,
    label: u.name[0],
  }));
  const options: OptionType[] = [...volumeOptions, ...weightOptions];

  return (
    <Wrapper>
      <AutocompleteInput
        options={options}
        value={measurement}
        onChange={setMeasurement}
        placeholder={placeholder || 'Select unit'}
      />
    </Wrapper>
  );
};
