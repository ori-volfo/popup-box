# Popup Box
A simple popup box helper

## Requirements
* JQuery >= 1.5

## Setting up the Environment
1. Clone using git, or copy this directory to a **public directory** in your project
* If you do not wish to add this project to a public directory, remember to update the paths in pupup.js line 8 (to GET th PHP template), and in popup.php line 6 for the stylesheet  
2. Add the popup.js file to the page you would like to use

## Usage
Run the command `popUpBox(msg)` from your JS script where necessary (or console for testing).
the `msg` variable should hold an object with the following params:
*head* - Message header (required)
*body* - Message body (optional)
*btn* - Button text (optional. default is "OK")
*action* - Button action function (optional. default is to close the Popup-box)
*bottom* - Message bottom text (optional)
*customCss* - Adding a custom CSS object to override the default CSS (optional)

## Usage Example
popUpBox({'head':'Hello!','body':'This is my Popup-box','btn':'Confirm','action':'console.log("the Popup-box action works!")','bottom':'Some text under the button','customCss':{"border-radius": "10px","background-color":"gray"}})
