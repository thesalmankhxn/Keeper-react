import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../note";


function App(){
    return <div>
        <Header />
    {note.map(card =>
        <Note 
        key={card.key}
        heading={card.title}
        content={card.content}
        />
)}
        <Footer />
    </div>
}

export default App;