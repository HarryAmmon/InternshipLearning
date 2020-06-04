import React from 'react';
import Card from './Card.js';
import NextPage from './NextPage.js';
import Article from './Article.js';

export default function AboutMe(){
    return( 
        <Card>
            <Article title="About Me">
                <p>Hi! 👋 I'm Harry and I'm a software developer. I'm an Intern for The Pensions Regulator and have spent the last year absorbing as much knowledge as possible!</p>
                <p>Based in South-East England, I can be found cooking, cycling or in a beer garden!</p>
                <p>I have learnt a lot over the last year. I built this site to demonstrate what I know and what I have learnt.</p>
                <NextPage location="/DotNetCore" content="Start Learning Journey"/>
            </Article>
        </Card>  
    );
}