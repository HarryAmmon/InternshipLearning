import React from 'react';

const doThisThing = _ => alert("This is an alert!");

const ShowNavBarButton = _ => (
    <button onClick={doThisThing}> click me</button>
)

export default ShowNavBarButton;