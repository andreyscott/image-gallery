import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card';
import Search from './components/Search';
//26695772-c5c3ba0a2e482cf8b1c58a52b

function App() {
  const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    const fetchImages = async () => {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
        const data = await response.json();
        setImages(data.hits);
        setIsLoading(false);
    }
    useEffect(() => {
      fetchImages();
  }, [term]);


    const onSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      fetchImages();
  }

  const onChange = (e) => {
      setTerm(e.target.value);
  }

  return (
    <div className="3xl  mx-auto  ">
    <Search  searchText={(text) => setTerm(text)}  />

   {
     !isLoading && images.length === 0 &&  
        <h1 className='text-6xl text-center text-blue-500 mx-auto  mt-32' >Dude What are You Searching? 😜</h1>
   }

      {
        isLoading ? <h1 className="text-5xl text-center text-gray-600 mx-auto  mt-28">Loading...</h1> :
        
        <div className="flex flex-col  space-y-3 md:grid md:grid-cols-3 md:gap-3 place-items-center">
      {
        images.map(image => {
          console.log(image)
          return <Card image={image} key={image.id} />
        }
        )
      }
      </div>
        }
    
    </div>
  );
}

export default App;
