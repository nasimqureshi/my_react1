// @flow 
import  { useState, useEffect } from 'react';
import BlogList from './BlogList';


 const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new websit', body: 'lorem ipsum...', author: 'Nasim', id: 1},
        { title: 'Welcome part', body: 'lorem ipsum...', author: 'Qamar', id: 2},
        { title: 'Wev dev top tips', body: 'lorem ipsum...', author: 'Samreen', id: 1},
    ]);
    const [name, setName] = useState('Nasim Qureshi');


    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !==id) ;
       setBlogs(newBlogs);
    }
    useEffect(() => {
      console.log('use effect ran');
      console.log(name);
    },[name]);


    return (
        <div className='home'>
          {/* <BlogList blogs={blogs} title="All Blogs!"/>   
          <BlogList blogs={blogs.filter((blog) => blog.author === "Qamar")} title="Qamr's logs!"/>    */}
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
          <button onClick={() => setName('Qamar Qureshi')}>Change Name</button>
          <p>{ name }</p>
        </div>
    );
};
export default Home;