import { findVolumeUnit, findMaterial, findWeightUnit } from "./finders";

export function convertVolumeToWeight(
    amount: number,
    fromVolumeUnit: string,
    materialName: string,
    toWeightUnit: string
  ): number {
    const volumeUnit = findVolumeUnit(fromVolumeUnit);
    if (!volumeUnit) {
      throw new Error(`Volume unit "${fromVolumeUnit}" not found.`);
    }
    const material = findMaterial(materialName);
    if (!material) {
      throw new Error(`Material "${materialName}" not found.`);
    }
    const weightUnit = findWeightUnit(toWeightUnit);
    if (!weightUnit) {
      throw new Error(`Weight unit "${toWeightUnit}" not found.`);
    }
  
    const totalMilliliters = amount * volumeUnit.inMilliliters;
    const weightInGrams = totalMilliliters * material.densityInGramsPerMilliliter;
    return weightInGrams / weightUnit.inGrams;
  }
  
  export function convertWeightToVolume(
    amount: number,
    fromWeightUnit: string,
    materialName: string,
    toVolumeUnit: string
  ): number {
    const weightUnit = findWeightUnit(fromWeightUnit);
    if (!weightUnit) {
      throw new Error(`Weight unit "${fromWeightUnit}" not found.`);
    }
    const material = findMaterial(materialName);
    if (!material) {
      throw new Error(`Material "${materialName}" not found.`);
    }
    const volumeUnit = findVolumeUnit(toVolumeUnit);
    if (!volumeUnit) {
      throw new Error(`Volume unit "${toVolumeUnit}" not found.`);
    }
  
    const weightInGrams = amount * weightUnit.inGrams;
    const volumeInMilliliters = weightInGrams / material.densityInGramsPerMilliliter;
    return volumeInMilliliters / volumeUnit.inMilliliters;
  }
  
  export function convertVolume(
    amount: number,
    fromVolumeUnit: string,
    toVolumeUnit: string
  ): number {
    const source = findVolumeUnit(fromVolumeUnit);
    if (!source) {
      throw new Error(`Volume unit "${fromVolumeUnit}" not found.`);
    }
    const target = findVolumeUnit(toVolumeUnit);
    if (!target) {
      throw new Error(`Volume unit "${toVolumeUnit}" not found.`);
    }
  
    const amountInMl = amount * source.inMilliliters;
    return amountInMl / target.inMilliliters;
  }
  
  export function convertWeight(
    amount: number,
    fromWeightUnit: string,
    toWeightUnit: string
  ): number {
    const source = findWeightUnit(fromWeightUnit);
    if (!source) {
      throw new Error(`Weight unit "${fromWeightUnit}" not found.`);
    }
    const target = findWeightUnit(toWeightUnit);
    if (!target) {
      throw new Error(`Weight unit "${toWeightUnit}" not found.`);
    }
  
    const amountInGrams = amount * source.inGrams;
    return amountInGrams / target.inGrams;
  }
  