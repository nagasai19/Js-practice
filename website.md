//How does the website gets painted in the browser?

//?=> 

//?The server sends HTML as a response and it starts building the DOM tree.

//?And in the process it gets some CSS links, now the DOM building gets halted and waits for the server response. 

//?Once the CSS file arrives, DOM building starts and so does the tree for CSS (CSSOM) as well. 

//?In the process, it might get some JS links. 

//?The above process comes to halt and wait for the JS file. 

//?And once the browser receives the JS file.

//?It starts the execution of scripts. 

//?And the DOM and CSSOM tree completes. 

//?Combining two the browser creates something called a render tree. 

//?Based on the render tree, the layout is being set and we get a beautifully painted web page.