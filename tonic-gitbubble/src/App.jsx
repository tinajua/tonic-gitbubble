import React from "react";
import ContactCard from "./ContactCard";

const contacts = [
  { 
    id: "sofia",
    name: "Sofia Ranta", 
    title: "UI Designer", 
    email: "info@example.com", 
    phone: "+350400505050",
    image: 'https://randomuser.me/api/portraits/women/44.jpg'  // Woman portrait
  },
  { 
    id: "bob",
    name: "Bob Johnson", 
    title: "Dev Ops Engineer", 
    email: "info@example.com", 
    phone: "+447787202020" ,
    image: 'https://randomuser.me/api/portraits/men/46.jpg'     // Professional man
  },
  {
    id: "charlie", 
    name: "Charlie Brown", 
    title:"Junior Developer", 
    email: "info@example.com", 
    phone: "+353871818181",
    image: './Charlie_Brown.png' // Cartoon
  },
];

function App() {
  
  return (
      <>
      {/* H1 Text Heading shows bold */}
      <div className="bg-transparent text-slate-900 text-center py-4">
          <h1 className="text-cyan-500 font-bold text-2xl text-center font-bold">
          The Team
          </h1>
     </div>
     <div className="flex justify-center">
      <div className="bg-[#80b121] p-6 rounded-lg shadow-lg flex flex-wrap gap-6 justify-center items-center max-w-6xl"> 
      {contacts.map((person, idx) => (
        <ContactCard key={idx} {...person} />
      ))}
      </div>
    </div>
    {/* <div className="p-1 min-h-screen flex flex-wrap gap-6 justify-center items-center" style={{ backgroundColor: '#57eb16' }}> */}
      {/* Above line had been a div-class style definition for the cards to fine tune corners of cards when they flip over */} 
        
    {/* Footer with href attributions */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <footer className="text-center text-cyan-500 text-base mt-6">
          <p style={{ fontSize: '0.8rem' }}>
          Images: &rdquo;Charlie of Peanut Snoopy icon&rdquo; © by contributors at{" "}
            <a
            href="https://all-free-download.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underLine hover:text-cyan-300"
            >
            all-free-download.com
            </a>, licensed under{" "}
            <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="noopener noreferrer"
	    className="underline hover:text-cyan-300"
            >
            CC BY 3.0
            </a>
          </p>
        </footer>
        </div>
      </>
  );
}

export default App;
// bg-[#2f8109] this is backgroundColor used in one other of the projects

