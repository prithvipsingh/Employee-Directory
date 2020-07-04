# Employee Directory

Homework assignment where the goal is make an employee directory using React.js, populating it with random employees from an api, and allowing the user to search/sort the results.

## Description

Primary goal of app was to use React for the first time. The app takes in a set of random employees from the API Random User Generator (randomuser.me). It stores the random employees in context. The employees are mapped over and displayed in a table format. The user is able to sort the employees by first name or age by clicking on the column name. The user is also able to search by the users first name with the search input.

## Deployed App Link

https://prithvipsingh.github.io/Employee-Directory/

## GIF demonstrating the Employee Directory

[Home Page](Images/Homepage.png)

[Search](Images/Search.png)

## Installation

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Usage

This was primarily made to meet the requirements of a homework assignment. It could be used as the basis for a to-do app.

## Contributing

I was the only one to work on this project, but of course I had help from my instructor, TA's, and classmates.

## Challenges

The major challenge was using React for the first time. Figuring out how to properly implement the hook useEffect was a struggle for me for awhile. I built out my components before thinking about how I would pass values around through components, which resulted in me having to learn how to implement the handle useContext. This allowed me to pass around the employees and update them without having to worry about parent child relationships to allow for prop passing.

## License

[MIT](https://choosealicense.com/licenses/mit/)
