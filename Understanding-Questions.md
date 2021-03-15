# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the onlick handler handles the click and directs in towards the addOne action being imported
* the addone function from actions is also being imported in reducer.js where using switch it receives its value
the value is then passed through props to TotalDisplay.js to be rendered
...

* TotalDisplay shows the total plus 1.
