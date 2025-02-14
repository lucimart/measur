import React from 'react';
import { AutocompleteInput, OptionType } from '../AutocompleteInput';
import { MATERIALS } from '../../constants';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: inline-block;
`;

type MaterialProps = {
  material: string;
  setMaterial: (material: string) => void;
};

export const Material = ({ material, setMaterial }: MaterialProps) => {
  const options: OptionType[] = MATERIALS.map((m) => ({
    id: m.id,
    label: m.name,
  }));

  return (
    <Wrapper>
      <AutocompleteInput
        options={options}
        value={material}
        onChange={setMaterial}
        placeholder="Select material"
      />
    </Wrapper>
  );
};
