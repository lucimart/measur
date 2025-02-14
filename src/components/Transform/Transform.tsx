import React, { useState, useEffect } from 'react';
import { Amount } from '../Amount';
import { Material } from '../Material';
import { Measurement } from '../Measurement';
import { Result } from '../Result';
import {
  convertVolumeToWeight,
  convertWeightToVolume,
  convertVolume,
  convertWeight,
  getMeasurementCategory,
  findMaterial,
} from '@/utils';
import { useDebounce } from '@/hooks';



export const Transform = () => {
  const [amount, setAmount] = useState(1);
  const [measurementFrom, setMeasurementFrom] = useState<string>('cup');
  const [material, setMaterial] = useState<string>('flour');
  const [measurementTo, setMeasurementTo] = useState<string>('gram');
  const [result, setResult] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState<string>('');

  const debouncedMaterial = useDebounce(material, 300);

  useEffect(() => {
    try {
      const currentMaterial = findMaterial(debouncedMaterial);
      if (!currentMaterial) {
        setErrorMessage(`Material "${debouncedMaterial}" not found.`);
        setResult(0);
        return;
      } else {
        setErrorMessage('');
      }

      const fromCategory = getMeasurementCategory(measurementFrom);
      const toCategory = getMeasurementCategory(measurementTo);

      if (!fromCategory || !toCategory) {
        setResult(0);
        return;
      }

      let converted = 0;
      if (fromCategory === 'volume' && toCategory === 'weight') {
        converted = convertVolumeToWeight(amount, measurementFrom, debouncedMaterial, measurementTo);
      } else if (fromCategory === 'weight' && toCategory === 'volume') {
        converted = convertWeightToVolume(amount, measurementFrom, debouncedMaterial, measurementTo);
      } else if (fromCategory === 'volume' && toCategory === 'volume') {
        converted = convertVolume(amount, measurementFrom, measurementTo);
      } else if (fromCategory === 'weight' && toCategory === 'weight') {
        converted = convertWeight(amount, measurementFrom, measurementTo);
      }
      setResult(converted);
    } catch (error) {
      console.error('Conversion error:', error);
      setResult(0);
    }
  }, [amount, measurementFrom, debouncedMaterial, measurementTo]);

  return (
    <div>
      <Amount amount={amount} setAmount={setAmount} />
      &nbsp;
      <Measurement
        measurement={measurementFrom}
        setMeasurement={setMeasurementFrom}
        placeholder="From Unit"
      />
      <span>&nbsp;of&nbsp;</span>
      <Material material={material} setMaterial={setMaterial} />
      {/* {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} */}
      <span>&nbsp;in&nbsp;</span>
      <Measurement
        measurement={measurementTo}
        setMeasurement={setMeasurementTo}
        placeholder="To Unit"
      />
      <span>&nbsp;is&nbsp;</span>
      <Result amount={result} material={material} measurement={measurementTo} />
    </div>
  );
};
