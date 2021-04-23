import {Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInput : ''
        }
    }

    resetUserInput =() =>{
        this.setState({userInput: ''})
    }

    render(){

        return(
            <div className='search-bar'>
                <input value={this.state.userInput} onChange={(e)=> this.setState({userInput: e.target.value})} />
                <button onClick={()=>this.props.search(this.state.userInput)}>search</button>
                <button onClick={this.props.clear}>clear search</button>
            </div>
        )
    }
}

export default SearchBar;