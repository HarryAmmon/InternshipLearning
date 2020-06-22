import React from 'react';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';
import Styles from './Content.module.scss';
import Article from '../components/Article.jsx';
import CodeBlock from '../components/CodeBlock.jsx';
import CodeInline from '../components/CodeInline.jsx';
import { Link } from 'react-router-dom';
import List from '../components/List.jsx';

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
                    <p>HTML5 is the latest version of HTML. Released in 2015 it allows for more expressive markup of documents than previous versions.</p>
                    <p>HTML allows you to describe the structure of a website. It does this by having a variety of tags that describe their content.</p>
                    <List listItems={
                        [
                            <div><CodeInline>{`<p>This is a paragraph</p>`}</CodeInline> - Defines a paragraph</div>,
                            <div><CodeInline>{`<h1>Title</h1>`}</CodeInline> - Defines a heading. You can use <CodeInline>{`<h1>`}</CodeInline> to <CodeInline>{`<h6>`}</CodeInline> to markup different sized headings</div>,
                            <div><CodeInline>{`<body></body>`}</CodeInline> - Defines the documents body. Content to be shown to the user should be placed inside these tags.</div>,
                        ]
                    }/>
                    <p>A complete list of tags can be found <a href="#">here</a>.</p>
                    <p>Below is a template for a HTML document</p> 
                    
                    <CodeBlock>
                        {`<!DOCTYPE html>
<html lang="en-GB">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style.css"/>
        <title>Your Site Title</title>
    </head>
    <body>
        <h1>Site Content</h1>
    </body>
    <script src="index.js"><script>
</html>`}    
                    </CodeBlock>
                    <List listItems={[
                        <div>Line 1 is required to tell the browser that this is a HTML5 document.</div>,
                        <div>Line 2 tells the browser that this is the root of the document and that the language to use is english.</div>,
                        <div>The <CodeInline>{`<meta>`}</CodeInline> tags show that we should use the UTF-8 character set and there is some set up that allows us to use media queries in our CSS.</div>,
                        <div><CodeInline>{`<title>`}</CodeInline> defines the title of your page. This is the text that is shown at the top of your web browser.</div>,
                        <div>Line 12 adds a reference to a JavaScript document that we want to use.</div>
                    ]}/>
                    <p>HTML elements can be assigned ids and classes to help target them with your CSS and JavaScript. An element can have one id and multiple classes.</p>
                    <List listItems={[
                        <div><CodeInline>{`<p id="firstParagraph"></p>`}</CodeInline>- adds the id "firstParagraph"</div>,
                        <div><CodeInline>{`<p class="articleContent"></p>`}</CodeInline>- adds the class "articleContent"</div>,
                        <div><CodeInline>{`<p class="articleContent smallText`}</CodeInline>- adds both "articleContent" and "smallText" as classes</div>
                    ]}/>
                </Article>
            </Card>
            <Card>
                <Article title="CSS">
                    <p>CSS3 is the latest version of CSS and stands for Cascading Stylesheets. CSS uses selectors to target sections of the HTML document to change how they look. You can use selectors to target elements based on their class, id or element name.</p>
                    <p>There are 3 ways to implement CSS in your document:</p>
                    <h3 className={Styles.sectionHeader}>External CSS</h3>
                    <p>Creating a <CodeInline>{`.CSS`}</CodeInline> file and adding a reference to it in your HTML document is the most common way of adding styling to your site. To do this ensure <CodeInline>{`<link rel="stylesheet" href="fileName.css"/>`}</CodeInline> is in the <CodeInline>{`<head>`}</CodeInline> section of your HTML document.</p>
                    <h3 className={Styles.sectionHeader}>Internal CSS</h3>
                    <p>To do this add a <CodeInline>{`<style></style>`}</CodeInline>tag within the <CodeInline>{`<head>`}</CodeInline> section. You can then write CSS like you would in an separate stylesheet within those <CodeInline>{`<style></style>`}</CodeInline> tags.</p>
                    <h3 className={Styles.sectionHeader}>Inline CSS</h3>
                    <p>Use the <CodeInline>{`style`}</CodeInline> attribute directly in the HTML element. This will add styling to this element only. e.g.<CodeInline>{`<h1 style="color:red;"`}</CodeInline></p>                  
                    
                </Article>
            </Card>
        </div>
    </div>
);

export default FrontEnd;