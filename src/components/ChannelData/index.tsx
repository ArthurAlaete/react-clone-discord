import React, { useRef, useEffect } from 'react';

import ChannelMessage , { Mention } from '../ChannelMessage';

import { 
    Container,
    Messages, 
    InputWrapper,
    Input,
    InputIcon
    
} from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=> {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(8)).map((index) => (
                    <ChannelMessage
                        key={index} 
                        content="Hoje é um ótimo dia para praticar :)"
                        author="Arthur Alaete"
                        date="15/04/2021"
                    />
                ))}
                
                <ChannelMessage 
                    content={
                        <>
                            <Mention>@Arthur Alaete</Mention>, Verdade!
                        </>
                    }
                    author="Fulano"
                    date="15/04/2021"
                    hasMention
                />

                <ChannelMessage 
                    content="Bot de música ativado :D"
                    author="Botizinho"
                    date="15/04/2021"
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;