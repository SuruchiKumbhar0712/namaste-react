const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h2", {}, "Suruchi"),
        React.createElement("h2", {}, "Aniket")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h2", {}, "Pratik"),
        React.createElement("h2", {}, "Shravni")
    ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);