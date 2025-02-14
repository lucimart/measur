import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  color: rgb(185, 183, 172);
`;

type ResultProps = {
  amount: number;
  material: string;
  measurement: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Result = ({ amount, material, measurement }: ResultProps) => {
  const isPlural = amount !== 1;
  return (
    <Span>
      {amount.toPrecision(3)} {measurement}{isPlural ? 's' : ''}
    </Span>
  );
};
