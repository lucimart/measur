import { useCallback } from "react";
import styled from '@emotion/styled';

const Input = styled.input``;

type MeasurementProps = {
    measurement: MeasurementType;
    setMeasurement: (measurement: MeasurementType) => void;
    isPlural: boolean;
};

export enum MeasurementType {
    Cup = "cup",
    Gram = "gram"
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Measurement = ({measurement, setMeasurement, isPlural}: MeasurementProps) => {

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMeasurement(e.target.value as MeasurementType);
    }, [setMeasurement]);
    
    return(
        <Input value={measurement} onChange={onChange} />
            // <option value="cup">cup{isPlural ? "s" : ""}</option>
            // <option value="gram">gram{isPlural ? "s" : ""}</option>
    );
};