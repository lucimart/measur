import { MaterialEnum } from "../Material";
import { MeasurementType } from "../Measurement";

type ResultProps = {
    amount: number;
    material: MaterialEnum;
    measurement: MeasurementType;
};

export const Result = ({amount, material, measurement}: ResultProps) => {
    const isPlural = amount !== 1;

    return(
    <span>{amount} {measurement}{isPlural ? "s": ""}</span>
    );
}