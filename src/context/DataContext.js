import React, { useContext ,createContext} from 'react';
import react from "../assets/img/react.png"
import html from "../assets/img/html.png"
import next from "../assets/img/next.jpg"
import java from "../assets/img/java.jpg"
import aboutme from "../assets/img/aboutme.png"
const Context = createContext();
export function DataContext({children})  {
 
  const educationCardData = [
    {
      name: "PROJECT",
      value: "20",
    
    },
    {
        name: "lIVE",
        value: "5",
      
      },
      {
        name: "CERT",
        value: "25",
      
      },
  ];
  const experienceData = [
    {
      imageURL:{react},
      title: "Social Media",
      title2: "Detail",
    
    },
    {
      imageURL:{react},
      title: "Chat",
      title2: "Detail",
    
    },
    {
      imageURL:{react},
      title: "NotePad",
      title2: "Detail",
    
    },
    {
      imageURL:{react},
      title: "gibteknoloji" ,
      title2: "Detail",
    
    },
    {
      imageURL:{react},
      title: "todoapp" ,
      title2: "Detail",
    
    },
    {
      imageURL:{react},
      title: "cart application" ,
      title2: "Detail",
    
    }, 
    {
      imageURL:{react},
      title: "stock tracking" ,
      title2: "Detail",
    
    }, 
  ];

  const skilssData = [
    {
      name: "HTML",
      value: "50",
    
    },
    {
        name: "JAVA",
        value: "80",
      
      },
      {
        name: "REACT",
        value: "100",
      
      },
      {
        name: "NEXT",
        value: "10",
      
      },
      {
        name: "CSS",
        value: "60",
      
      },
  ];

  const portfolioData = [
    {
        name:"react.png",
        value: "20",
      
      },
      {
          name: {html},
          value: "5",
        
        },
        {
          name: {next},
          value: "25",
        
        },
        {
          name: {java},
          value: "25",
        
        },
      {
        name: {aboutme},
      
      
      },
      
      
  ];
  return (
    <Context.Provider value={{educationCardData ,experienceData,skilssData,portfolioData}}>
    {children}
  </Context.Provider>
  );
}

export function useData(){
  return useContext(Context);
};