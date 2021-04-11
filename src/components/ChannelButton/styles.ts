import styled from 'styled-components';

import { 
    Hashtag,
    PersonAdd,
    Settings
} from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;
    transition: background-color .2s;

    > div {
        display: flex;
        align-items: center;
    }

    > div + div { 
        display: none;
        transition: display .2s;
    }

    > div span {
        margin-left: 5px;
        color: var(--senary);
    }

    &:active, &:hover {
      background-color: var(--quinary);

      > div span {
          color: var(--white);
      }

      > div + div {
          display: inline;
      }  
    } 
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    margin-left: 3px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

