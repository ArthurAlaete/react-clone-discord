import styled from 'styled-components';

import { Props } from './index';

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 50px;
    height: 50px;

    margin-bottom: 8px;
    border-radius: 50%;

    background-color: ${props => 
        (props.isHome ? 'var(--purple)' : 'var(--primary)')};

    position: relative;
    cursor: pointer;

     > img {
        width: 24px;
        height: 24px;
    }

    transition: border-radius .2s background-color .2s;

    &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;
        
        content: '';
        display: ${props => 
            (props.hasNotifications ? 'inline' : 'none')};
    }

    &::after {
        background-color: var(--notification);
        width: auto;
        height: 16px;
        bottom: -4px;
        right: -4px;
        padding: 0 4px;

        position: absolute;

        border-radius: 12px;
        border: 4px solid var(--quaternary);
        font-size: 13px;      
        font-weight: bold;
        color: var(--white);

        content: '${(props) => props.mentions && props.mentions}';
        display: ${(props) => props.mentions ? 'inline' : 'none'};
    
    }

    &.active, &:hover {
        border-radius: 16px;
        background-color: ${props => 
            props.isHome ? 'var(--purple)': 'var(--discord)'};
    }
    
       
`;