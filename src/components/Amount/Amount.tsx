import React, { useCallback } from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  color: rgb(185, 183, 172);
`;

type AmountProps = {
  amount: number;
  setAmount: (amount: number) => void;
};

export const Amount = ({ amount, setAmount }: AmountProps) => {
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  }, [setAmount]);

  return <Input type="number" value={amount || 0} onChange={onChange} />;
};
