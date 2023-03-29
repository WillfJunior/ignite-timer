import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' 

interface ButtonContainerProps  {
    variant: ButtonVariant;
}

const buttonVariants = {
    'primary': 'purple',
    'secondary': 'green'
}


export const ButtonContainer = styled.button<ButtonContainerProps> `
    width: 100px;
    height: 100px;

    ${props => css`background-color: ${buttonVariants[props.variant]}`};
    color: ${props => props.theme.secondary};
`