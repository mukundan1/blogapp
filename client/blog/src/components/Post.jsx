// Post1.js

import { Card, CardBody } from "react-bootstrap";

import React, { useState, useEffect } from 'react';

function Post() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

    return (
    <div>
      {/* <h1>My List of Items</h1> */}
      <ul>
        {data.map((item) => (
          <ul>  
            <h5>{item.title}</h5>
          
            {item.blog}
          </ul>
        ))}
      </ul>
    </div>
  );
}



//   return (
//     // <Card>
//     //     <CardBody> data.blog </CardBody>data.title
//     // </Card>

    
//     <div>
//       <h3>Data from Localhost:</h3>
//       {/* Render your fetched data here */}
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

export default Post;

// const Post = () => {
//     return (
//         <Card>
//             <Card.Body>
//                 <Card.Title></Card.Title>
//                 <Card.Text>
//                 </Card.Text>
//                 {/* <a href="#" className="btn btn-primary">Read More</a> */}
//             </Card.Body>
//         </Card>
//     );
// };

// export default Post;