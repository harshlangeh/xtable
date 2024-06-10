const { useState } = require("react")


function App(){

  const [xtable, setXtable] = useState(
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ])
    
    const sortedData = [...xtable].sort((a,b) => {
      console.log(new Date(b.date))
      console.log(new Date(a.date))
      console.log(new Date(b.date) - new Date(a.date))
      console.log(new Date(a.date) - new Date(b.date))
      console.log(new Date(b.date).toString() - new Date(a.date).toString())
      // if(a.date === b.date){
      //   return b.views - a.views
      // }
      return new Date(b.date).toString() - new Date(a.date).toString()
    });


    // const sortByDate = () => {

    //   const sortedData = [...xtable].sort((a,b) => {
    //     if(a.date === b.date){
    //       return b.views - a.views
    //     } 
    //     return (new Date(b.date)- new Date(a.date))
    //   })
    //   setXtable(sortedData)
    // }
    const sortByDate = () => {

      const sortedData = [...xtable].sort((a,b) => {
        console.log(new Date(b.date))
        console.log(new Date(a.date))
        console.log(new Date(b.date) - new Date(a.date))
        console.log(new Date(b.date).toString() - new Date(a.date).toString())
        if(a.date === b.date){
          return b.views - a.views
        }
        return (new Date(b.date)- new Date(a.date))
      });
      setXtable(sortedData)
    }


    // const sortByDate = () => {
    //   const sortedData = [...xtable].sort((a, b) => {
    //     if (a.date === b.date) {
    //       return b.views - a.views;
    //     }
    //     return new Date(b.date) - new Date(a.date);
    //   });
    //   setXtable(sortedData);
    // };



    const sortByViews = () => {
      const sortedData = [...xtable].sort((a,b) => {
        if(a.views === b.views){
          return new Date(b.date) - new Date(a.date);
        }
        return b.views - a.views
      })

      setXtable(sortedData)

    }








  return (
    <div>
      <h1>Date and View Tables</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>

      <table>
        <thead>

        <tr> 
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>

        </thead>
        

        {xtable.map((item)=> (

          <tbody key={Math.random()*296}>

          <tr >
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>

          </tbody>

          
            
      ))}


      </table>
    </div>
  )
}

export default App;




































// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   // Initialize the dictionary state
//   const [dictionary] = useState([
//     { word: "React", meaning: "A JavaScript library for building user interfaces." },
//     { word: "Component", meaning: "A reusable building block in React." },
//     { word: "State", meaning: "An object that stores data for a component." },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [result, setResult] = useState('');

//   const handleSearch = () => {
//     // Search for the word in the dictionary (case-insensitive)
//     const foundWord = dictionary.find(
//       item => item.word.toLowerCase() === searchTerm.toLowerCase()
//     );

//     if (foundWord) {
//       setResult(foundWord.meaning);
//     } else {
//       setResult("Word not found in the dictionary.");
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Dictionary App</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a word"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div>
//         <h2>Definition:</h2>
//         <p>{result}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
