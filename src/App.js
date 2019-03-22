import React, { Component } from 'react';
import Card from './components/Card';
import friends from './friends.json';
import Wrapper from './components/wrapper';
import Title from './components/Title';


// import Nav from './components/Nav';


//Game starts with a score of 0
//Score increases if image is clicked
//Score resets if same image is clicked twice
//Images resuffle after a image is clicked
//Game restarts if Score is 0




class App extends Component {

  state = {
    friends,
    clickedPics: [],
    score: 0,
    goal: 12,
    message: "",
  };

  shufflePics = id => {
    let clickedPics = this.state.clickedPics;

    if (clickedPics.includes(id)) {
      this.setState({ clickedPics: [], score: 0, message: "You lose!"});
      return;
    } else {
        clickedPics.push(id)

        if (clickedPics.length === 12){
          this.setState({ score: 12, message: "You Win! Click on another picture to play again", clickedPics: [] })
          return;
        }
        this.setState({ friends, clickedPics, score: clickedPics.length, message: ""});

        for (let i = friends.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [friends[i], friends[j]] = [friends[j], friends[i]];
        }
 
      }
    } 
  
  render() {
    
    return (
      
      <Wrapper>
      <Title> 
        total={this.state.score}
        goal={12}
        message={this.state.message}
      </Title>
        
          {this.state.friends.map(friends => (
            <Card
                 shufflePics={this.shufflePics}
                 id={friends.id}
                 key={friends.id}
                 image={friends.image}
              />
            
          ))}
        
          </Wrapper>
         
         
        
    )
  }

}

export default App;
