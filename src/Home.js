// @flow 
import  { useState } from 'react';
import BlogList from './BlogList';


 const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new websit', body: 'lorem ipsum...', author: 'Nasim', id: 1},
        { title: 'Welcome part', body: 'lorem ipsum...', author: 'Qamar', id: 2},
        { title: 'Wev dev top tips', body: 'lorem ipsum...', author: 'Samreen', id: 1},
    ]);

    return (
        <div className='home'>
          <BlogList blogs={blogs}/>   
        </div>
    );
};
export default Home;