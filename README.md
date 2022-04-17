# KAIMONOTE

KAIMONOTE is a simple web application to save shopping list in order not to miss anything to buy.

![KAIMONOTE_screen](https://user-images.githubusercontent.com/67501734/163690681-2a8602f2-8cd9-4525-8aa6-15a2644284d1.png)

Project Link: [https://cheery-horse-4128f4.netlify.app/]

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [References](#references)

## Description

### Why I created this project

I wanted a shopping list app like this because I used to use the default note app on my smartphone to make lists when shopping.  
And I wanted to make a simple application using typescript because I had only made pure reactapp.  
I thought that creating a simple CRUD app like this was a good opportunity to try the test code.

### What problem this app solved

Prevent missing anything to buy.
You don't need to use paper or note app.

### what I learned through this project

I reviewed how to create web application with TypeScript. Errors occurred several times when passing props, because I forgot to define interfaces. I felt I need to create more projects to get used to TypeScript. It was also a good review of testing with Jest.  
For use on mobile devices, the item list was designed to be in edit mode by simply clicking on it.　 This has complicated state management. When adding a new item, the state was changed by clicking on another item, so I created state for switching to edit and add new mode

## Built With

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

## Features

- Add new item
- Mark item as you bought or not
- Edit item
- Delete item
- Delete all items

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Kazumakr/Kaimonote
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. start
   ```sh
   npm start
   ```

## Usage

### Add new item

![additem mov](https://user-images.githubusercontent.com/67501734/163690999-33a08644-eba8-462e-a08a-26f61faf00db.gif)

### Mark item as you bought / not

![markitem mov](https://user-images.githubusercontent.com/67501734/163691029-9cf93642-3c19-4c98-987b-acddcd8ae443.gif)

### Edit item

![edititem mov](https://user-images.githubusercontent.com/67501734/163691024-e6eb79b1-7e2a-4641-bbcc-bd12f059b05f.gif)

### Delete item

![deleteitem mov](https://user-images.githubusercontent.com/67501734/163691023-6eb3e363-a0b5-449b-83a1-e7f6ae9343ad.gif)

### Delete all items
![deleteall mov](https://user-images.githubusercontent.com/67501734/163691000-1a27c21e-9b3d-4a9d-9e61-a957a470c9a5.gif)

## License

License under the [MIT License](LICENSE)

## References

- [React.Js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [DEV Community](https://dev.to/)
- [Styled-Components](https://styled-components.com/)
- [stackoverflow](https://stackoverflow.com/)
- [mdn_webDocs](https://developer.mozilla.org/)
- [w3school](https://www.w3schools.com/)
