import React from 'react';

const date= new Date();

export default function Footer(){
    return(
        <footer>
            <small>
            © {date.getFullYear()} Harry Ammon
            </small>
        </footer>
    );
}