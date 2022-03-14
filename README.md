# Fruit Market Game
A little game to practise objects and some DOM manipulation. 

**Link to project:** https://fruit-market-game.netlify.app

![Project Screenshot](https://d33wubrfki0l68.cloudfront.net/622f029fda4a554151c1759c/screenshot_2022-03-14-08-53-57-0000.png)

## How It's Made: This app uses DOM manipulation and objects passed around with functions. The coolest thing is the fruit being deleted from the inventory when it is more than 3 days old. This was made using an array where I add the day the fruit was bought and every day I check if the fruit at the beginning of the array is too old and expired. 
Fun things for me were adding the timer to increase the day every 5 seconds. Some neat little tricks with changing text colours for short amounts of time when things are bought/sold too!

**Tech used:** HTML, CSS, JavaScript


## Optimizations
*(optional)*

Originally the players fruits inventory were 3 values. This worked but I wanted to add the ability to delete fruit after 3 days have passed in game.
So these values were changed to an array instead, and instead of reading the value to see how many fruit the player has, it just reads the length of the array. 


## Lessons Learned:

One tough thing I learned with this is how to pass objects through functions and accessing object values from another function. Example when the player clicks to buy a fruit, the function run is buyFruit and it passes through the object that correlates to that fruit. That is then accessed in the function by accessing fruit[name] or fruit[price]. DOM manipulation was fun and I learnt some things about setTimeout as well as getTime

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Tic-Tac-Toe: ** https://app.netlify.com/sites/tictactoepractise

**Solar-Opposites-Episode-Checker:** https://solaropposites.netlify.app/

