import styled from "styled-components";

export const Select = styled.select`
    border-radius: 5px;
    text-align: center;
    border: none;
`;

export const LabelText = styled.label`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 5px;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        grid-template-columns: 1fr;
        text-align: center;
    }
`;