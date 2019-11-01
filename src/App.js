import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Div from "./components/Div";
import friends from "./friends.json";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore ===12) {
      alert(`Winner, your score: ${newScore}`);
      this.setState({ rightWrong: "You win!",
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []});
      
    }
    else if (newScore >= this.state.topScore ) {
    
      this.setState({ topScore: newScore });
    }
    
    this.handleShuffle();
  };

  handleReset = () => {
  
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "you lose!",
      clicked: []
    });
    alert(`loser`);
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          Title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Try to click on each character, but don't hit any duplicates
        
        </Title>

        <Div>
            {this.state.friends.map(friend => (
             
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
             
            ))}
          
          </Div>
      </Wrapper>
    );
  }
}

export default App;
