<h1>:: Black-Jack</h1>


The aim of this exercise is to create a simple React-powered game of [Blackjack](http://en.wikipedia.org/wiki/Blackjack). This should be a single-player game played against dealer.

> Your game must follow the following simple set of rules:
>
> 1. There is a standard set of 52 cards. The player is given 2 random cards when the game begins and the dealer is given a single card, which the player can see: 
    -- Numbered cards are worth their face value - 4 of clubs is worth 
       4, 10 of spades is worth 10, and so on.
    -- The ace can be either 1 or 11 
    -- Picture cards are worth 10 points. 
> 2. The player is given the following 2 options:
    -- Hit - The player is dealt another card and it’s value is added to the total
    -- Stick - The player does not want another card at that point
> 3. The player can “hit” until they are either happy with the sum of their cards’ values or the total of their cards is equal to or greater than 21. If the player’s total exceeds 21, they lose.
> 4. If the player chooses to “stick” the dealer will start drawing cards until they either have a total greater than the player’s total or the dealer’s total is greater than 21. If the dealer’s total exceeds 21, the dealer loses. If the dealer sticks on a total greater than the player’s, the dealer wins. 

## Get going

1. Install with `npm install` 
2. Start the dev server with `npm start`
- I've provided a few [atom components](./src/components) for you to get going quickly with.
- I am not expecting an overly-polished UI. The purpose of this exercise is to see how you model the various concepts of the game inside the application and how you design your code.
- I've installed the following packages for your convenience (feel free to use at will or install more)
  - [enzyme](http://airbnb.io/enzyme/)
  - [immutable](http://facebook.github.io/immutable-js/)
  - [lodash](https://lodash.com/)
  - [recompose](https://github.com/acdlite/recompose/)
  - [classnames](https://www.npmjs.com/package/classnames)
  - [deck of cards](https://github.com/notpeter/Vector-Playing-Cards)



  :: Find thie hosted project on this link:: https://youthful-elion-2b145e.netlify.app/
