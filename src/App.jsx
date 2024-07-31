import React, { useState } from 'react';
import ImageGallery from './Component/ImageGallery';
import SearchBar from './Component/SearchBar';
import CategoryButtons from './Component/CategoryButton';
import './App.css';

const images=[
{id: 1, title: 'Cat', category:'Animal', url:'https://i.pinimg.com/236x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg'},
 { id: 2, title: 'Peony', category: 'Flower', url:'https://i.pinimg.com/564x/94/fa/71/94fa717d0143c478d6c75fe022d82960.jpg'},
 { id: 3, title: 'Dog', category: 'Animal', url:'https://i.pinimg.com/236x/f5/22/88/f5228807af8f315ac0d88ec2f7d6e8cc.jpg'},
 { id: 4, title: 'Tulip', category: 'Flower', url: 'https://i.pinimg.com/736x/a1/a3/a0/a1a3a0e2f7000697378f0f812707d850.jpg'},
 {id: 5, title: 'Capybara', category: 'Animal', url:'https://i.pinimg.com/736x/9f/66/ed/9f66ed81cb9880edc25633ad7ecf0b77.jpg' },
 {id: 6, title: 'Kim Mingyu', category: 'Mingyu', url:'https://i.pinimg.com/736x/77/2f/f9/772ff9a1ecbe505967958f8aa66a9b5c.jpg'},
 {id: 7, title: 'Cherry Blossom', category: 'Flower', url:'https://i.pinimg.com/236x/a8/e0/e4/a8e0e49d0301f8812eb150cdc6bb95e8.jpg'},
 {id: 8, title: 'Fashion Week', category: 'Mingyu', url:'https://i.pinimg.com/736x/25/bf/b4/25bfb41bf62dfa97fe3a975ddc7d14d7.jpg'},
 {id: 9, title: 'Lotus', category: 'Flower', url:'https://i.pinimg.com/736x/1b/f0/f3/1bf0f398df092844108ca95ef1589d42.jpg'},
 {id: 10, title: 'Mingyu', category: 'Mingyu', url:'https://i.pinimg.com/564x/ba/89/e7/ba89e7c813956a273625e42a41d10694.jpg'},
 {id: 11, title: 'Lamb', category: 'Animal', url:'https://i.pinimg.com/564x/d8/02/3a/d8023ab9388e3dcacbb6c8c0c2185408.jpg'},
 {id: 12, title: 'Lily of the valley', category: 'Flower', url:'https://i.pinimg.com/564x/f7/63/6b/f7636b330747b209222712382e4da21b.jpg'}
]

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredImages = images.filter(image => {
    return (
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? image.category === selectedCategory : true)
    );
  });

  return (
    <div className="app">
      <h1>My Gallery</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <CategoryButtons setSelectedCategory={setSelectedCategory} />
      <ImageGallery images={filteredImages} />
    </div>
  );
}

export default App;
