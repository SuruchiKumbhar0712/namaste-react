

 
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },[
        React.createElement("h1", {}, "Hello Aniket Deshmukh"),
    React.createElement("h1", {}, "Hello Aniket Deshmukh from bynaric")]
    )
);  
  

   console.log(parent)

   const root = ReactDOM.createRoot(document.querySelector(".rootN"));

   root.render(parent);





