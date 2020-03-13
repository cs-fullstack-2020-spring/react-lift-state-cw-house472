import React, {Component} from 'react'
import Player1 from './Player1'
class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state ={
           playerClick : 0
        }
    }
    updateButton = () => {
        // the value that ur setting playerclick to should be a param passed into your callback
        let updateButton = this.state.playerClick
        this.setState({playerClick : updateButton})
    }
    render(){
        let player_one = "Player 1"
        let player_two =  "Player 2"
        return(
            <div>
                <h1>You were the last one to click the button {this.state.playerClick} </h1>
             <Player1 player = {player_one}></Player1>
             <Player1 player = {player_two}></Player1>
             
                
            </div>
        )
    }
}


export default AppContainer;
