import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import  './index1.css';
//import StringToHTML from './stringToHTML';


// let ty = '';

const PostList = () => {
  

  const [posts, setPosts] = useState([]);
 
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
  
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      
        setPosts(response.data);
        
        // for (const 6   key in response.data){          
        //   ty += "<tr><td>" + response.data[key].id +"</td>" + "<td>" + response.data[key].title +"</td>"+ "<td>" + response.data[key].body + "</td>" +"</tr>"
        // }
        
      } catch (error) {
        
        setError(error.message);
      } finally {
        
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  // // htmld = sanitizeHTML(htmld)
  // let tl;
  
  // tl = "<table border=2px><thead><tr><th>Id</th><th>Title</th><th>Body</th></tr></thead><tbody>"+ ty +"</tbody></table>"
  return (
    
    // <div>
    //   <h2>Post List</h2>
    //       <StringToHTML htmlString={tl} />
    // </div>
    <div>
    <h2>Post List</h2>
    <table class="table table-dark table-striped-columns">
  <thead>
  <tr class="table-info">
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
             <td class="table-secondary">{post.id}</td>
             <td class="table-secondary">{post.title}</td>
             <td class="table-secondary">{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    
  );
};

export default PostList;
