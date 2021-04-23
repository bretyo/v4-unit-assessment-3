import React, {Component} from 'react'
import './App.css';
import Data from './data'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Shelf from './components/Shelf';

class App extends Component {
  constructor(props){
    super(props);

    this.searchBarElement = React.createRef();
    this.state = {
      books: [],
      shelf: []
    }
    this.clear = this.clear.bind(this);
    this.search = this.search.bind(this);
    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
}

clear(){
    this.searchBarElement.current.resetUserInput();
    this.setState({ books: [...Data]})
}

search(value){
  const filtered = Data.filter((element, index)=>{
    let str = `${element.title} ${element.author}`
    return str.toLowerCase().includes(value.toLowerCase())
  })
  this.setState({ books: filtered})
}

addToShelf(title){

  const book = Data.filter(element=> element.title.includes(title))
  if(!this.state.shelf.includes(...book)){
    const arr = [...this.state.shelf, ...book]
    this.setState({ shelf: arr })

  }
}

clearShelf(){
  this.setState({ shelf: []})
}

  componentDidMount(){
    this.setState({ books: [...Data]})
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBar ref={this.searchBarElement} search={this.search} clear={this.clear}/>
        <section className='list-n-shelf'>
          <BookList data={this.state.books} addToShelf={this.addToShelf}/>
          <Shelf books={this.state.shelf} clear={this.clearShelf}/>
        </section>
      </div>
    );

  }
}

export default App;
