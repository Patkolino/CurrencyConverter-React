import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: right;
    font-family: monospace;
    padding: 20px;
    font-size: ${({ theme }) => theme.fontSizes.small};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px)
    {
        text-align: center;
    }
`