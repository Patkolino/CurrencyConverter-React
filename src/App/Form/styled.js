import styled, { css } from "styled-components";

export const Wrapper = styled.form`
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.aquamarineBlue};
    border-radius: 25px;
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.color.jacksonsPurple};
    overflow-x: auto;
    font-size: ${({ theme }) => theme.fontSizes.big};
    max-width: 700px;  

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: ${({ theme }) => theme.fontSizes.medium}
    }
`;

export const Field = styled.fieldset`
    border: none;
    padding: 20px;
    margin: 0;
`;

export const Title = styled.legend`
    text-align: center;
    padding: 0 0 10px 0;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.large};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        font-size: ${({ theme }) => theme.fontSizes.big};
    }
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

export const Button = styled.button`
    border-radius: 10px;
    padding: 5px 10px;
    letter-spacing: 1.5px;
    border-style: double;
    width: 100%;
    border-color: ${({ theme }) => theme.color.black};

    ${({ $convert }) => $convert && css`
        background-color: ${({ theme }) => theme.color.malachite};
    `}

    ${({ $clear }) => $clear && css`
        background-color: ${({ theme }) => theme.color.thunderbird};
        transition: filter 0.5s ease;
    `}

    &:hover {
        filter: brightness(110%);
    }
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-items: center;
`;

export const FormField = styled.input`
    border-radius: 5px;
    border: none;
    text-align: center;
    width: 100%;
    padding: 0;
`;