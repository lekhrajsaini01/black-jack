import React, { Component } from 'react';
import Card from '../card';
import Text from '../text';
import Button from '../button';
import './game.css';

class Game extends Component {

  constructor(props) {

    super(props);
    this.state = {
      humanCards: [],
      computerCards: [],
      deck: [...props.cards],
      humanScore: 0,
      computerScore: 0,
      humanStuck: false,
      humanBust: false,
      computerBust: false,
      winner: null,
      gameOver: false,
    };

    this.hitHuman = this.hitHuman.bind(this);
    this.stickHuman = this.stickHuman.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount() {


    this.startGame();
  }

  resetGame() {
    this.setState({
      humanCards: [],
      computerCards: [],
      deck: [...this.props.cards],
      humanScore: 0,
      computerScore: 0,
      humanStuck: false,
      humanBust: false,
      computerBust: false,
      winner: null,
      gameOver: false,
    });
    this.startGame();
  }

  startGame() {

    const { deck } = this.state;
    const dealOne = this.dealCard(deck);
    const dealTwo = this.dealCard(dealOne.cards);
    const dealThree = this.dealCard(dealTwo.cards);

    this.setState({
      humanCards: [dealOne.card, dealThree.card],
      computerCards: [dealTwo.card],
      fullDeck: dealThree.cards,
      humanScore: this.calculateScore([dealOne.card, dealThree.card]),
      computerScore: isNaN(dealTwo.card.value) ? 10 : dealTwo.card.value
    });
  }

  hitHuman() {
    const { deck, humanBust } = this.state;
    const deal = this.dealCard(deck);
    const score = this.calculateScore([...this.state.humanCards, deal.card]);

    if(!humanBust) {
      this.setState({
        humanCards: [...this.state.humanCards, deal.card],
        fullDeck: deal.cards,
        humanScore: this.calculateScore([...this.state.humanCards, deal.card])
      });
    }

    if(score > 21) {
      this.setState({
        humanBust: true,
        winner: 'Computer',
        gameOver: true
      })
    }
  }

  stickHuman() {

    const intervalId = setInterval(() => {
        const { deck, humanScore, gameOver } = this.state;
        const deal = this.dealCard(deck);
        const score = this.calculateScore([...this.state.computerCards, deal.card]);

        if(!gameOver) {
          this.setState({
            computerCards: [...this.state.computerCards, deal.card],
            fullDeck: deal.cards,
            computerScore: this.calculateScore([...this.state.computerCards, deal.card]),
            humanStuck: true
          });
        }

        if(score > 21) {
          this.setState({
            computerBust: true,
            winner: 'Human',
            gameOver: true
          });

          clearInterval(intervalId);

        } else if(score > humanScore) {
          this.setState({
            winner: 'Computer',
            gameOver: true
          });

          clearInterval(intervalId);
        }
    }, 1000);
  }

  dealCard(cards) {
      const randomNumber = Math.floor(Math.random() * cards.length);
      const card = cards[randomNumber];
      cards.splice(randomNumber, 1);

      return {
        card,
        cards
      };
  }

  calculateScore(cards) {
    let score = cards.map(card => {
      return card.value === 'ace' ? 11 :
        isNaN(card.value) ? 10 :
        card.value;
    }).reduce((a, b) => {
        return parseInt(a, 10) +  parseInt(b, 10);
    });

    //handle ace
    const cardValues = cards.map(card => {
      return card.value;
    });

    if(score > 21 && cardValues.includes('ace')) {
      score -= 10;
    }

    return score;

  }

  render() {
    const {
      humanCards,
      computerCards,
      humanScore,
      computerScore,
      humanBust,
      computerBust,
      winner
    } = this.state;

    return (

      <div className='game-container'>

          <div className='computer-cards-container'>
            <div className='score-container'>
              <Text type={'score-text'}>{computerBust ? 'Bust' : computerScore}</Text>
            </div>
            {computerCards.map((card, index) => {
              return (
                <div className='computer-cards' key={index}>
                  <Card suit={card.suit} value={card.value} />
                </div>
              )
            })}

            {winner === 'Computer' && (
              <div className='winner'>WIN</div>
            )}

          </div>

          <div className='human-cards-container'>
            <div className='score-container'>
              <Text type={'score-text'}>{humanBust ? 'Bust' : humanScore}</Text>
            </div>

            {humanCards.map((card, index) => {
              return (
                <div className='human-cards' key={index}>
                  <Card suit={card.suit} value={card.value} />
                </div>
              )
            })}

            {winner === 'Human' && (
              <div className='winner'>WIN</div>
            )}

          </div>



          <div className='button-container'>
            <Button type={'btn hit-btn'} clickHandler={this.hitHuman}>HIT</Button>
            <Button type={'btn stick-btn'} clickHandler={this.stickHuman} color={'tertiary'}>STICK</Button>
            <Button type={'btn reset-btn'}  clickHandler={this.resetGame}>RESET</Button>
          </div>
      </div>
    );
  }
}

export default Game;
