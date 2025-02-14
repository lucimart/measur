  export type WeightUnit = {
    id: string;
    name: string[];
    inGrams: number;
  };
  
  export const WEIGHT_UNITS: WeightUnit[] = [
    {
      id: 'gram',
      name: ['gram', 'grams', 'g'],
      inGrams: 1,
    },
    {
      id: 'kilogram',
      name: ['kilogram', 'kilograms', 'kg'],
      inGrams: 1000,
    },
    {
      id: 'ounce',
      name: ['ounce', 'ounces', 'oz'],
      inGrams: 28.3495,
    },
    {
      id: 'pound',
      name: ['pound', 'pounds', 'lb', 'lbs'],
      inGrams: 453.592,
    },
  ];