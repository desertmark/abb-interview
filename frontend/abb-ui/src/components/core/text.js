import styled from 'styled-components';

const Text = styled.p`
    font-size: 1rem;
    margin: 0;
    text-align: ${props => props.align};
    ${props => props.secondary && `
        color: white;
        text-shadow: 0 0 black;
    `};

    ${props => props.upper && `
        text-transform: uppercase;
    `};

    ${props => props.bold && `
        font-weight: bold;
    `};

    
`;

export default Text;
