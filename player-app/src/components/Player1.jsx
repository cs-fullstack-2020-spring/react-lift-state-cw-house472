import React, {Component} from 'react'
class Player1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            player : this.props.player
        }
    }
    updatePlayer = () => {
        
        this.setState({player : this.state.player})
        this.props.updateButton();
    }
    render(){
        return(
            <div>
            <h1>{this.state.player}</h1>
            <button onClick = {this.updatePlayer}>Score</button>
            </div>
        )
    }
}
export default Player1;