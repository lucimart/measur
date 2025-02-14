export type VolumeUnit = {
    id: string;
    name: string[];
    inMilliliters: number;
  };
  
  export const VOLUME_UNITS: VolumeUnit[] = [
    {
      id: 'cup',
      name: ['cup', 'cups', 'us cup', 'us cups'],
      inMilliliters: 236.588,
    },
    {
      id: 'metric_cup',
      name: ['metric cup', 'metric cups'],
      inMilliliters: 250,
    },
    {
      id: 'liter',
      name: ['liter', 'liters', 'l', 'litre', 'litres'],
      inMilliliters: 1000,
    },
    {
      id: 'milliliter',
      name: ['milliliter', 'milliliters', 'ml'],
      inMilliliters: 1,
    },
    {
      id: 'teaspoon',
      name: ['teaspoon', 'teaspoons', 'tsp'],
      inMilliliters: 4.92892,
    },
    {
      id: 'tablespoon',
      name: ['tablespoon', 'tablespoons', 'tbsp'],
      inMilliliters: 14.7868,
    },
  ];
  