 
import  { useState } from 'react';


 const Home = () => {
    // let name = "Nasim";
    const [name, setName] = useState('Nasim');
    const [age, setAge] = useState('69');

    const handleClick = () => {
        setName('Qamar');
        setAge('58');
    }
    
    return (
        <div className='home'>
            <h1>Home Page</h1>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};
export default Home;