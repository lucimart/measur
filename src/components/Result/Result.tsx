import { MaterialEnum } from "../Material";
import { MeasurementType } from "../Measurement";
import styled from '@emotion/styled';

const Span = styled.span`
color: rgb(185 183 172);
`;

type ResultProps = {
    amount: number;
    material: MaterialEnum;
    measurement: MeasurementType;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Result = ({amount, material, measurement}: ResultProps) => {
    const isPlural = amount !== 1;

    return(
    <Span>{amount} {measurement ? measurement: "nothing"}{isPlural ? "s": ""}</Span>
    );
}