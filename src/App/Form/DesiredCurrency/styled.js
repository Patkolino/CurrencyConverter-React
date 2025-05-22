import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin: 5px 0 5px 0;
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);        
    }
`;

export const StyledText = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Radios = styled.input`
    appearance: none;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 70%;
    width: 20px;
    height: 20px;
    border: 3px solid ${({ theme }) => theme.color.black};
    margin: 0 3px 3px 0;


    &:checked {
    border: 2.5px solid ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.green}
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px){
        width: 15px;
        height: 15px;
    }
`;