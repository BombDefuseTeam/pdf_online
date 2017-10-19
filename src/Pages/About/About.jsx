import React, { Component } from 'react';
import { Button, Image, Item } from 'semantic-ui-react';
import './About.css';

import { ControlledHeader } from '../../Components/Header Component';
import { Footer } from '../../Components/Footer';
import { Comment } from '../../Components/Comment';

import img from './img.png';

const para = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar nisi lacus, eget elementum odio rhoncus sit amet.Quisque eget ullamcorper nulla, non dictum metus. Nunc tempus vehicula ornare.Integer odio nibh, lacinia vel malesuada quis, finibus at urna. Donec eu ultricies nisl.Praesent a vestibulum justo.';

const About = () => {
    return (
        <div>
            <ControlledHeader />
            <div id="about-us-box">
                <Item.Group relaxed>
                    {
                        Array(4).fill(null).map((val, idx) => {
                            return (
                                <Item>
                                    <Item.Image size='small' src={img} />

                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header>Member{idx}</Item.Header>
                                        <Item.Description>
                                            {para}
                                        </Item.Description>
                                        <Item.Extra>
                                            <Button floated='right'>
                                                Like
                                            </Button>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            );
                        })
                    }
                </Item.Group>
            </div>
            <Footer />
        </div>
    );
};

export { About };