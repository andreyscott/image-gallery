import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card';
//26695772-c5c3ba0a2e482cf8b1c58a52b

function App() {
  const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, [term]);


    const onSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
  }

  const onChange = (e) => {
      setTerm(e.target.value);
  }

  return (
    <div className="3xl text-pink-500  mx-auo ">
      <div className="grid grid-cols-4 gap-3 place-items-center">{images.map(image => (
          <Card key={image.id} image={image} />
        ))}
      </div>

    
    
    </div>
  );
}

export default App;
