import React from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';
import Styles from './Content.module.scss';
import Article from '../components/Article.jsx';
import CodeBlock from '../components/CodeBlock.jsx';
import CodeInline from '../components/CodeInline.jsx';

const FrontEnd = props => (
    <div className="frontEndPage">
        <PageHeader title="Front-end" subTitle="JavaScript, CSS & React" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>    
        <hr/>
        <div className={Styles.root}>
            <Card>
                <Article title="Starting from Scratch">
                    <p>During my first year at university I completed a module called 'An Introduction to Web Development'. I learnt about HTML5 tags, some simple CSS and JavaScript that allowed me to manipulate the DOM. For my assessment, I created a static site to demonstrate what I knew about HTML5 tags and CSS. The site was designed to be responsive and used media queries to achieve this. Whilst the site was functional it was developed in quite an old fashion way.</p>
                    <p>My knowledge of JavaScript was also very basic and I was only taught how to manipulate the DOM. There wasn't even a nod towards ay JS Frameworks or libraries.</p>
                    <p>For me to remove old web development habits and to ensure no gaps in my knowledge, I am starting from square one and assuming I have zero knowledge about web development. There is lots to learn.</p>
                </Article>
            </Card>
            <Card>
                <Article title="Big Picture" subTitle="Assume Nothing">
                    <p>The first stop in my web development tour is some big picture stuff covering the very basics of HTML, CSS & JavaScript.</p>
                    <p>HTML is a markup language used to define the structure of web page. It use an XML like syntax. The current version of HTML is HTML5 released in 2015. This file is served by servers to your web browser.</p>
                    <p>CSS is a language used to style HTML documents. It uses various CSS selectors to target HTML elements and change how they appear. The CSS document is referred to as the stylesheet. A reference to the stylesheet must be added in the HTML document. Both HTML and CSS are declarative languages, we tell it what to do, not how to do it.</p>
                    <p>JavaScript is a imperative, interpreted programming language, we tell it what to do with code which is interpreted at run-time by the browser. JavaScript is used to add functionality to a website. A script tag should be added to the HTML file.</p>

                </Article>
            </Card>
            <Card>
                <Article title="HTML5">
                    <p>This is some text and that should be shown inline</p>
                    <p>Here is some more text</p>
                    <CodeBlock>
                        {`<!DOCTYPE html>`}    
                    </CodeBlock>
                    <p>This code should be shown <CodeInline>{`Inline`}</CodeInline></p>
                </Article>
            </Card>
        </div>
    </div>
);

export default FrontEnd;