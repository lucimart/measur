import { useCallback } from "react";
import styled from '@emotion/styled';

const Input = styled.input`
color: rgb(185 183 172);
`;

export enum MaterialEnum {
    Flour = "flour",
    Sugar = "sugar",
}

type MaterialProps = {
    material: MaterialEnum;
    setMaterial: (material: MaterialEnum) => void;
};


export const Material = ({material, setMaterial}: MaterialProps) => {
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMaterial(e.target.value as MaterialEnum);
    }, [setMaterial]);

    return(
    <Input value={material} onChange={onChange} />
        // <option value="flour">flour</option>
        // <option value="sugar">sugar</option>
    );
};