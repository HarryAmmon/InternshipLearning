import React from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';
import Styles from './Content.module.scss';
import Article from '../components/Article.jsx';
import CodeBlock from '../components/CodeBlock.jsx';
import CodeInline from '../components/CodeInline.jsx';
import { Link } from 'react-router-dom';

const FrontEnd = props => (
    <div className="frontEndPage">
        <PageHeader title="Front-end" subTitle="JavaScript, CSS & React" toggleNavBar={props.toggleNavBar} displayNav={props.displayNav} hideNavBar={props.hideNavBar}/>    
        <hr/>
        <div className={Styles.root}>
            <Card>
                <Article title="Starting from Scratch">
                    <p>During my first year of university I learnt about the basics of web development. I learnt about HTML5 tags, some simple CSS and touched on JavaScript that allowed us to manipulated the Document-Object-Model (DOM).</p>
                    <p>I completed 2 assessments. The first was to create a static site, to demonstrate what I knew about HTML5 and CSS. The site was designed to be responsive and used media queries to achieve this. Whilst the site was functional it was developed in quite an old fashion way. Check it out on my <a href={`https://github.com/HarryAmmon/responsiveWebsite/`}>GitHub</a></p>
                    <p>The second was an exam where I was tasked with manipulating the DOM using JavaScript. This included tasks such as changing the class of an element, adding functionality to buttons and event handling.</p>
                    <p>Whilst I gained a good understanding of the basics of web development, I did not learn much about modern web development techniques. For me to remove old web development habits and to ensure no gaps in my knowledge, I am starting from square one and assuming no knowledge about web development.</p>
                    <p>There is lots to learn.</p>
                </Article>
            </Card>
            <Card>
                <Article title="Assuming no Knowledge">
                    <p>The first stop in my tour of web development is some big picture stuff covering the very basics of HTML, CSS & JavaScript.</p>
                    <p>HTML is a markup language used to define the structure of web page. It use an XML like syntax. The current version of HTML is HTML5 released in 2015. This file is served by servers to your web browser.</p>
                    <p>CSS is a language used to style HTML documents. It uses various CSS selectors to target HTML elements and change their appearance. The CSS document is referred to as the stylesheet. A reference to the stylesheet must be added in the HTML document. Both HTML and CSS are declarative languages, we tell it what to do, not how to do it.</p>
                    <p>JavaScript is a imperative, interpreted programming language, we tell it what to do with code which is interpreted at run-time by the browser. JavaScript is used to add functionality to a website. A script tag should be added to the HTML file.</p>
                    
                </Article>
            </Card>
            <Card>
                <Article title="HTML5">
                    <p>HTML5 is the latest version of HTML. Released in 2015 it allows for more expressive markup of documents.</p>
                    <p>HTML allows you to describe the structure of a website. It does this by having a variety of tags that describe their content.</p>
                    <ul>
                        <li><CodeInline>{`<p>This is a paragraph</p>`}</CodeInline> - Tells the browser that this is a paragraph </li>

                    </ul>
                    
                    
                    <CodeBlock>
                        {`<!DOCTYPE html>
                        Adding many lines
                        
just to make sure that the lines render correctly
just to make sure that the lines render correctly
just to make sure that the lines render correctly
just to make sure that the lines render correctly
just to make sure that the lines render correctly
        just to make sure that the lines render correctly
            just to make sure that the lines render correctly to make sure that the lines render correctly to make sure that the lines render correctly to make sure that the lines render correctly
                just to make sure that the lines render correctly
                ust to make sure that the lines render correctly
                ust to make sure that the lines render correctly
                ust to make sure that the lines render correctly
                ust to make sure that the lines render correctly

                





                        `}    
                    </CodeBlock>
                    <p>This code should be shown <CodeInline>{`Inline`}</CodeInline></p>
                </Article>
            </Card>
        </div>
    </div>
);

export default FrontEnd;