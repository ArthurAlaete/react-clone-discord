import React from 'react';

import ServerButton from '../ServerButton';

import { 
    Container,
    Separator,
} from './styles';

const ServerList: React.FC = () => {
    return (
        <Container> 
            <ServerButton  isHome/>

            <Separator />

            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton  mentions={2}/>
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={10}/>
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton  mentions={5}/>
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={2}/>
            <ServerButton />
        </Container>
    )
}

export default ServerList;