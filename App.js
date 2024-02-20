/*
<div id="parent">
  <div id="child">
        <h1>hell h1</h1>
        <h2>hello h2</h2>
    </div>
    <div id="child2">
        <h1>hell h1</h1>
        <h2>hello h2</h2>
    </div>
</div>
*/
//Render method will take ReactElementt(Object) => HTML(Browser undestands)

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"hello h1",
        React.createElement("h2",{},"Hello h2"))]
        ),
        React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"hello h1",
        React.createElement("h2",{},"Hello h2"))]
        )
    ]
);





// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React");
    console.log(parent); //create Object
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);