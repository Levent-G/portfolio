import React, { useContext ,createContext} from 'react';
import react from "../assets/img/react.png"
import todoapp from '../assets/img/todoapp.PNG';
import notpad from '../assets/img/notpad.PNG';
import chat from '../assets/img/chat.PNG';
import stock from '../assets/img/stock.PNG';
import sepet from '../assets/img/sepet.PNG';
import gibteknoloji from '../assets/img/gibteknoloji.PNG';
import sosyalmedya from '../assets/img/sosyalmedya.PNG';
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
  const myProjectData = [
    {
      imageURL:{react},
      title: "Social Media",
      title2: "Detail",
      title3:"React.js",
      title4:"It is a project that covers all the features of known social media projects.",

    },
    {
      imageURL:{react},
      title: "Chat",
      title2: "Detail",
      title3:"React.js",
      title4:"It is a chat application made using Firebase that allows chatting and has user login and logout.",

    },
    {
      imageURL:{react},
      title: "NotePad",
      title2: "Detail",
      title3:"React.js",
      title4:"It is an application with user input and output where you can add and delete notes.",

    },
    {
      imageURL:{react},
      title: "gibteknoloji" ,
      title2: "Detail",
      title3:"React.js",
      title4:"I converted the design of https://teknoloji.gib.gov.tr/teknoloji/ to react.js without changing it.",
    
    },
    {
      imageURL:{react},
      title: "todoapp" ,
      title2: "Detail",
      title3:"React.js",
      title4:"It is a Todo app application. Listing, adding and subtracting is an application.",

    },
    {
      imageURL:{react},
      title: "cart application" ,
      title2: "Detail",
      title3:"React.js",
      title4:"It is an application with user login and logout, where products are listed and we can add products to the cart.",

    }, 
    {
      imageURL:{react},
      title: "stock tracking" ,
      title2: "Detail",
      title3:"React.js",
      title4:"It is a stock tracking application",

    }, 
  ];

  const portfolioData = [
    {
      img: gibteknoloji,
      title: 'I converted the design of https://teknoloji.gib.gov.tr/teknoloji/ to react.js without changing it.',
     
    },
    {
      img: sosyalmedya,
      title: 'It is a project that covers all the features of known social media projects.',
    },
    {
      img: todoapp,
      title: 'It is a Todo app application. Listing, adding and subtracting is an application.',
    },
    {
      img: notpad,
      title: 'It is an application with user input and output where you can add and delete notes.',
      
    },
    {
      img: chat,
      title: 'It is a chat application made using Firebase that allows chatting and has user login and logout.',
     
    },
    {
      img: stock,
      title: 'It is a stock tracking application',
   
    },
    {
      img: sepet,
      title: 'It is an application with user login and logout, where products are listed and we can add products to the cart.',
    },
  
  ];

  const skilssData = [
    {
      name: "HTML",
      value: 90,
    
    },
    {
      name: "CSS",
      value: 80,
    
    },
    {
      name: "JAVASCRIPT",
      value: 75,
    
    },
      {
        name: "REACT.JS",
        value: 85,
      
      },
      {
        name: "NEXT.JS",
        value: 10,
      
      },
      {
        name: "PHP",
        value: 25,
      
      },
      {
        name: "LARAVEL",
        value: 28,
      
      },
      {
        name: "JAVA",
        value: 40,
      
      },
      {
        name: "C#",
        value: 43,
      
      },
     
  ];

  

  const blogData = [
    {
      id:"1",    
      blogBaslik: "Blog baslik1",
      yazarName: " Levent ",
      blogTarihi:"16.10.2023",
      starts:2.5,
      blogIcerik:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " 
    },
    {    
      id:"2",  
      blogBaslik: "Blog baslik2",
      yazarName: " Levent ",
      blogTarihi:"16.10.2023",
      starts:1.5,
      blogIcerik:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " 
    },
    {    
      id:"3",  
      blogBaslik: "Blog baslik3",
      yazarName: " Levent ",
      blogTarihi:"16.10.2023",
      starts:3.5,
      blogIcerik:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " 
    },
    {    
      id:"4",  
      blogBaslik: "Blog baslik4",
      yazarName: " Levent ",
      blogTarihi:"16.10.2023",
      starts:4.5,
      blogIcerik:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " 
    },
    {    
      id:"5",  
      blogBaslik: "Blog baslik5",
      yazarName: " Levent ",
      blogTarihi:"16.10.2023",
      starts:5.5,
      blogIcerik:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " 
    },
    {    
      id:"6",  
      blogBaslik: "Blog baslik6",
      yazarName: " Levent ",
      blogTarihi:"16.10.2023",
      starts:6.5,
      blogIcerik:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " 
    },
    {    
      id:"7",  
      blogBaslik: "Blog baslik",
      yazarName: " Levent ",
      blogTarihi:"16.10.2023",
      starts:7.5,
      blogIcerik:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " 
    },
  ];
  const categories = [
    "React İle İlgili Bloglar",
  "Next.js İle İlgili Bloglar",
  "Java İle İlgili Bloglar",
  "C# İle İlgili Bloglar",
  "PHP İle İlgili Bloglar",
  "Laravel İle İlgili Bloglar",
  "React Hataları Bloglar",

];



  
  return (
    <Context.Provider value={{educationCardData ,myProjectData,skilssData,portfolioData,blogData,categories}}>
    {children}
  </Context.Provider>
  );
}

export function useData(){
  return useContext(Context);
};