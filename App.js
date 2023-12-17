import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement('h1',{}, "I'm h1 tag");
const heading2 = React.createElement('h2',{}, "I'm h2 tag");
const child = React.createElement('div',{id: 'child'}, [
heading1,heading2
]);
const child2 = React.createElement('div',{id: 'child2'}, [
    heading1,heading2
]);
const parent = React.createElement('div',{id: 'parent'}, [child, child2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);