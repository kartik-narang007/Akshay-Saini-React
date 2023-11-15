import React from "react";
import reactDOM from "react-dom/client";

const heading = (
    <h1 id="title" key="h2">
        Namaste React
    </h1>
);

//React Component
//Functional Component
// Name Starts with a capital letter

const HeaderComponent = () =>{
    return (
        <div>
            {heading}
            <h1>Namaste React Functional Component</h1>
            <h2>This is an h2 tag</h2>
        </div>
    );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);



// when we have to render react element we just write name of the element in render
//but when we have to render the react fuctional component we have to write the name of that component as self closing tag