import React, { Component } from 'react'
import axios from 'axios';
import './detailedview.css'

export default class detailedview extends Component {
    state = {
        itemslist : [],
        title  : "",
        rights : "",
        releaseDate : "",
        price : "",
        image : "",
        artist : ""
    }

    componentDidMount(){
        console.log(this.props.match.params.id);
        let ite;
        axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then(data=>{
           ite =  data.data.feed.entry.map(items => {
                if (items.id.attributes["im:id"] === this.props.match.params.id){
                    this.setState({itemslist : items},() => {
                        this.setState({title:this.state.itemslist.title.label});
                        this.setState({rights:this.state.itemslist.rights.label });
                        this.setState({releaseDate:this.state.itemslist["im:releaseDate"].label});
                        this.setState({price:this.state.itemslist["im:price"].label});
                        this.setState({image:this.state.itemslist["im:image"][2].label});
                        this.setState({artist:this.state.itemslist["im:artist"].label})
                       

                    })
                } 
            })
            
        })
       
    }
    render() {

        return (
            <div>
            <div className="padd">
                <h4 className="text-sm-center text-lg-center text-md-center text-uppercase">{this.state.title}</h4>
            </div>
            <div className="row">
                
                <div className="col-lg-4 col-md-4">
                        <img src={this.state.image} alt="Denim Jeans" style={{width:'100%'}}/>

                </div>
                <div className="col-lg-4 col-md-4 ">
                    <div className="padd">
                    <p className="text-sm-center text-lg-center text-md-center text-uppercase" >Artist - {this.state.artist}</p>
                    <p className="text-sm-center text-lg-center text-md-center text-uppercase" >releaseDate - {this.state.releaseDate}</p>
                    <p className="text-sm-center text-lg-center text-md-center text-uppercase" >price - {this.state.price}</p>
                    <p className="text-sm-center text-lg-center text-md-center text-uppercase" >rights - {this.state.rights}</p>


                    </div>
                   
                </div>
                <div className="col-lg-4 col-md-4">
                </div>
                
               
                
            </div>
        </div>
        )
    }
}
