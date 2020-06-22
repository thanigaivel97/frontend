import React, { Component } from 'react';
import Axios from 'axios';
import Display from '../display/display'

class search extends Component {

    constructor(props){
        super(props);
        this.state = {
            userInput: null,
            items : null,
            pushing : null,
            iy : null
          };
          this.handleChange = this.handleChange.bind(this);
          this.clicklistner = this.clicklistner.bind(this);
    }
    componentDidMount(){
        Axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then(data=>{
            
            this.setState({items:data.data.feed.entry},()=>{
                
            });
           
        })
    }

    clicklistner(event){
        event.preventDefault();
        
        let hi = this.state.userInput ;
        let hello = hi.toUpperCase();
        console.log(hello.trim());
        this.setState({userInput:hello},()=>{
            console.log(this.state.userInput);
        });
        let arr = [];
        
        this.state.items.map(ite => {
           
            return this.state.userInput === ite["im:artist"].label.toUpperCase()? arr.push(ite) : null ;
        })
        console.log(arr);

        this.setState({pushing : arr});
    
        
        

    }

    handleChange(event){
        this.setState({userInput : event.target.value});

    }

    render() {
        let jk;

        if(this.state.pushing){
             jk = this.state.pushing.map(items => {
                return <Display artist={items["im:artist"].label} price={items["im:price"].label} image={items["im:image"][2].label} id={items.id.attributes["im:id"]} key={items.id.attributes["im:id"]} title={items.title.label} />
            })
        }

        return (
            <section>
        <div>
        <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <form >
            <div className="input-group">
                <input onChange={this.handleChange}  type="text" className="form-control" placeholder="search by artists "/>
                <div className="input-group-btn">
                <button onClick={this.clicklistner} className="btn btn-default" type="submit"> 
                    <i >Search</i>
                </button>
                </div>
            </div>
        </form>
                </div>

            </div>
       
        </div>
        
        <div className="row">
                {jk}
        </div>
       
        </section> 
        );
    }
}

export default search;
