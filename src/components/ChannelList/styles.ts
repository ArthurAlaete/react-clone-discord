import styled from 'styled-components';
import { Add } from '../../styles/Icons';


export const Container = styled.div`
    grid-area: channelList;

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary);
`;

export const Category = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 6px;
    
    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray)
    }
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--symbol);
    cursor: pointer;

`;

export const ChannelButton = styled.div`

`;
