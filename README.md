# Fakeflix

[Fakeflix Site][heroku]

[heroku]: http://fakeflix.herokuapp.com/

Fakeflix is a full-stack web application that allows users to watch trailers from over 225 of IMDB's top 250 movies movies. The back end of the application was built with Ruby on Rails and a PostgreSQL database. All data fetching was done using AJAX and JBuilder for declaring JSON structures. The front end was created with React.js and JavaScript and utilizes the Redux architectural framework for an optimal single-page user-experience.

## Features & Implementation

### Authentication/Splash page

Back-end and front-end user authentication was built from scratch by encrypting user password and creating a unique session token for each user on sign up or login. This allows for secure access to one's account on the single-page application which then renders distinct content based on the current user.

I allowed the user to demo login in three locations, and I have a big high quality gif from one of the trailers in my database so users have an idea of what my site does.

<img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1478892903/pic1_eei2xe.png" />

###Main Index

The main page displays one random movie from IMDB's top 50 movies. I also have movies organized into several different categories including Action, Comedy, and Sci-fi/Fantasy, in a carousel. Each trailer has an a poster which, when clicked, will navigate to a page where the trailer can be played along with information about the movie is displayed.

<img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1478892854/pic2_deqwlj.png" />
<img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1478892879/pic3_iudwfk.png" />



###Trailers

Trailers are fully searchable my a movie title. Instead of manually seeding all of my movies, I created a custom rake task which iterates through a list and creates the movie with data I retrieve from OMDB's API. This data allows me to have a Title, description, genre, and even a movie poster to accompany the trailer. In order to get the trailers to be streamable, I had to give each movie a url through youtube's api. I also did this in my custom rake task. This means, that a movie has all of the information a user would need when it is seeded into the database.

<img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1478892890/pic4_qcb6ww.png" />


The video player was created using the react component react-youtube and other functions from the YouTube IFrame Player API. The tricky part was displaying a video in an appealing manner while also being able to display.

<img src="http://res.cloudinary.com/dqiuefax1/image/upload/v1478892871/pic5_vnsveh.png" />



###Ratings

Users can rate reviews from the series' overview panel on the display page or while writing a review. In order to implement this, all of the validations for creating a review had to be done on the front end. When rating a series from the overview panel, no body is required. However, if a user were on the details panel and tried to create a review, the review will not be submitted unless a body is attached to the rating.


###Additional Work

There are still a couple of features that have yet to be implemented into this application and are listed below:


An ability to Sort trailers by IMDB rating and by Actors
An ability to for all movies an actor has been in.
A user profile page


###Dev

To run the app you run rails server

To run the rake task you run bundle exec rake movies:populate