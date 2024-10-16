import React, {useEffect, useState} from 'react';
import ImageCard from './components/ImageCard'; 
import Searchbar from './components/Searchbar';
import SearchFailLoader from './components/SearchFailLoader';
import Loader from './components/Loader';
import process from 'process';

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
      console.log(data.hits);
    })
    .catch(err => console.log(err));
  },[term]);


  const clearSearchbarAndSetTerm = (text) => {
    setTerm(text);
    document.getElementById('search').value = text;
  }


  return (
    <div className="container mx-auto">
      <Searchbar searchText={(text) => setTerm(text)}/>
      
      {!isLoading && images.length === 0 && <SearchFailLoader/>}
      
      {isLoading ? <Loader/> : 
        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-y-4 md:gap-x-4 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8 justify-items-center">
          {images.map(image => (
            <ImageCard key={image.id} image={image} searchTag={(text) => clearSearchbarAndSetTerm(text)}/>
          ))}
        </div>
      }
    </div>   
); 
} 

export default App;