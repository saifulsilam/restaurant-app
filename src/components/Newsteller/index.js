import React from 'react';
import {
    NewstellerContaner,
    ContactHeading,
    ContactBox,
    Input,
    SubscribeBtn,   
} from './NewstellerElement'

const Newsteller = () => {
    return (
        <NewstellerContaner>
            <ContactHeading>Subscribe Us!!!</ContactHeading>
            <ContactBox>
                <Input  placeholder="example@gmail.com" type="text" />
                <SubscribeBtn>Subscribe</SubscribeBtn>
            </ContactBox>
        </NewstellerContaner>
    )
}

export default Newsteller

