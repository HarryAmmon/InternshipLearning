import React from 'react';
import Card from './Card.js';

export default function AboutMe(){
    return(
        <Card 
            title="About Me!"
            subTitle="👋"
            paragraphs={[
                "Hi! I'm Harry and I'm a software developer. I currently am an Intern for The Pensions Regulator and have spent the last year absorbing as much knowledge as possible!",
                "Based in South-East England, I can be found cooking, cycling or in a beer garden!",
                "I have learnt a lot over the last year and here I will talk about what I have learnt, projects I have been involved with and challenges faced!"
            ]}    
        />   
    );
}