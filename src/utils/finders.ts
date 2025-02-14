import { VolumeUnit, VOLUME_UNITS, WeightUnit, WEIGHT_UNITS, MATERIALS, Material } from "@/constants";

export function findVolumeUnit(unitName: string): VolumeUnit | undefined {
    const lowerName = unitName.toLowerCase();
    return VOLUME_UNITS.find(u =>
      u.name.some(name => name.toLowerCase() === lowerName)
    );
  }
  
  export function findWeightUnit(unitName: string): WeightUnit | undefined {
    const lowerName = unitName.toLowerCase();
    return WEIGHT_UNITS.find(u =>
      u.name.some(name => name.toLowerCase() === lowerName)
    );
  }
  
  export function findMaterial(materialName: string): Material | undefined {
    const lowerName = materialName.toLowerCase();
    return MATERIALS.find(
      m => m.id.toLowerCase() === lowerName || m.name.toLowerCase() === lowerName
    );
  }
  
  export function getMeasurementCategory(unitName: string): 'volume' | 'weight' | undefined {
    if (findVolumeUnit(unitName)) return 'volume';
    if (findWeightUnit(unitName)) return 'weight';
    return undefined;
  }