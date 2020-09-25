import React from 'react';
import './SearchBar';

class SearchBar extends React.Component{
    state={
        city:''
    };
    // componentDidUpdate(prevProps,prevState){
    //         if(prevState!==this.state.city){
    //             this.setState({city:this.state.city})
    //         }
    // }
    onSubmit = e =>{
        e.preventDefault();
        if(this.state.city===""){
            alert("city not be empty.")
        }else{
            this.props.searchCity(this.state.city);
        }
        this.setState({city:''})
    }
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <div className="searchBar">
                <div className="searchBarChild">
                    <h5>search weather on your city</h5>

                    <form onSubmit={this.onSubmit} className="formSearchCity">
                        <input 
                        type="text"
                        name="city"
                        id="inputSearchCity"
                        onChange={this.onChange}
                        placeholder="search city..."
                        />
                        <button type="submit"> search </button>
                        </form>
                </div>

            </div>
        )
    }
}
export default SearchBar ;