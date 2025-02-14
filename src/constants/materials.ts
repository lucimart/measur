  export type Material = {
    id: string;
    name: string;
    densityInGramsPerMilliliter: number;
  };
  
  export const MATERIALS: Material[] = [
    {
      id: 'flour',
      name: 'flour',
      densityInGramsPerMilliliter: 0.57,
    },
    {
      id: 'sugar',
      name: 'sugar',
      densityInGramsPerMilliliter: 0.85,
    },
    {
      id: 'water',
      name: 'water',
      densityInGramsPerMilliliter: 1,
    },
    {
      id: 'milk',
      name: 'milk',
      densityInGramsPerMilliliter: 1.03,
    },
    {
      id: 'banana',
      name: 'banana (mashed)',
      densityInGramsPerMilliliter: 0.95,
    },
    {
      id: 'butter',
      name: 'butter',
      densityInGramsPerMilliliter: 0.911,
    },
    {
      id: 'olive_oil',
      name: 'olive oil',
      densityInGramsPerMilliliter: 0.91,
    },
    {
      id: 'honey',
      name: 'honey',
      densityInGramsPerMilliliter: 1.42,
    },
    {
      id: 'rice',
      name: 'rice (uncooked)',
      densityInGramsPerMilliliter: 0.85,
    },
  ];