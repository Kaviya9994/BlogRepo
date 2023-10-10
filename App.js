import 'bootstrap/dist/css/bootstrap.min.css';
import agni from './agni.jpg'
import lifedevine from './lifedevine.jpg'
import utopia from './utopia.jpg'
import passage from './passage.jpg'
import devine from './devine.jpg'
import BlogPost from './Blog'
import { useState } from 'react';
export default function App(){
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
const blogs=[
{image:agni,
id:1,
title:"Wings of Fire",
author:"Dr.APJ Abdul Kalam",
Content:"Dr. Kalam's iconic biography Wings of Fire (Agni Siragugal) demonstrates his humble beginning and extraordinary life was a true testament to his perseverance. Born and raised in a tiny coastal village in Tamil Nadu, he did not let his circumstances hold him back."},

{image:lifedevine,
id:2,
title:"The Life Divine",
author:"Sri Aurbindo Ghosh",
Content:"The Life Divine is a major philosophical work of Sri Aurobindo. Sri Aurobindo presents a theory of evolution,which will culminate in the transformation of the human being and the advent of a divine life upon earth."
},

{image:passage,
id:3,
title:"A passage to India",
author:" E.M.Forster",
Content:"The novel examines racism and colonialism as well as a theme Forster developed in many earlier works, namely, the need to maintain both ties to the earth and a cerebral life of the imagination."
},
{image:utopia,
id:4,
title:"Utopia",
author:"Sir Thomas Moor",
Content:"Utopia presents many themes such as wealth, power, slavery, and causes of injustice. The overarching theme throughout the book is the ideal nature of a Utopian society. In Utopia, there is no greed, corruption, or power struggles due to the fact that there is no money or private property."
},
{image:devine,
id:5,
title:"Divine Comedy",
author:"Dante",
Content:"The main theme of The Divine Comedy is the spiritual journey of man through life. In this journey he learns about the nature of sin and its consequences. And comes to abhor it (sin) after understanding its nature and how it corrupts the soul and draws man away from God"
}
  ];
  const filteredBlogs = blogs.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
  
        <div className='bar'>
        <h1 style={{color:"White"}}>BOOK BLOG</h1>
          <input type="text"placeholder="Search with the title..." value={searchQuery}
           onChange={handleSearchChange} style={{width:'70%',borderRadius:'20px'}}
          />
          
    
    {filteredBlogs.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          author={post.author}
          Content={post.Content}
          image={post.image}
        />
        ))}
      </div>
    );
  }