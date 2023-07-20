## Available Script

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Used libraries

- [axios](https://github.com/axios/axios) for handling API calls
- [react-router-dom](https://reactrouter.com/en/main) for navigation
- [sass](https://github.com/sass/sass) for SASS support

---

## Design decisions

#### Favorite articles

- One of my favorite design decisions for articles involves utilizing local storage to store the articles, providing a seamless user experience. To achieve this, I implemented the useContext hook for global state storage, enabling easy updates to the user interface. Adding an article to favorites is as simple as clicking a button located in the top right corner of the article, which dynamically changes its appearance based on whether the article is already marked as a favorite or not. This feature offers a quick and intuitive way for users to curate their preferred content. To access their favorite articles, I added a NavLink named "Favorites" next to the "News" section, ensuring effortless navigation and enabling users to conveniently view and manage their saved articles. Overall, these design decisions enhance user engagement and satisfaction by making the process of storing and accessing favorite articles both efficient and enjoyable.
