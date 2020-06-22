import React, { Component } from 'react'
import axios from 'axios'
import Display from '../display/display'

export default class displaysongs extends Component {
    state = {
        songsarray : []
    }
    componentDidMount(){
        axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then(data => {
            console.log(data.data.feed.entry);
            this.setState({songsarray:data.data.feed.entry},()=>{
                
               
            })
        })
    }

    render() {
        const eachsong = this.state.songsarray.map(items => {
            return <Display artist={items["im:artist"].label} price={items["im:price"].label} image={items["im:image"][2].label} id={items.id.attributes["im:id"]} key={items.id.attributes["im:id"]} title={items.title.label} />
        })
        
        return (
            <div className="row">
                {eachsong}
            </div>
        )
    }
}
