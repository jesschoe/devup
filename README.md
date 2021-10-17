# devup


## Deployed Site
[DevUpApp](https://devupapp.netlify.app)

## Project Description

DevUp is an inventory application that recommends quality furniture, gadgets, and accessories for developers to improve the quality of their work space. On the home screen, users are given different categories to explore, and once on a category page, users can sort further by keywords. Users can also choose to view all categories to get access to the full library of products. Upon clicking on a specific product, users can get detailed information, read reviews (and leave their own), and add the item to their wishlist. For more information, check out our Team, Blog, and Resources links!


## Wireframes
The following wireframes depict desktop screen layouts for the app.
![imageAlt](./assets/HOME.png)
![imageAlt](./assets/PRODUCTS.png)
![imageAlt](./assets/SIGNIN.png)


## Component Hierarchy

![imageAlt](./assets/COMPHIERARCHY.png)

## API and Data Sample



MongoDB is returning the data for this base as follows:

```
{
"_id": "616b37257e30d62fe22a8a1a",
"name": "Airpod Max",
"category": "Gear",
"keywords": "Audio",
"imgURL": "https://res.cloudinary.com/devupapp/image/upload/v1633728954/devup/airpods_u4jmhg.png",
"description": "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.",
"details": "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music./nTransparency mode for hearing and interacting with the world around you./nTwenty hours of listening, movie watching, or talk time with Active Noise Cancellation and spatial audio enabled./nMagical experience with effortless setup, on-head detection, and seamless switching between devices.",
"price": "499.95",
"productURL": "https://www.apple.com/airpods-max/",
"reviews": [
{
"userId": "616b37257e30d62fe22a8a0d",
"author": "Gary",
"rating": 5,
"content": "Using these headphones with Apple devices is pretty much as expected, seamless. I will say that you will need to ensure that you devices are updated to the latest operating system in order to fully enjoy all of the features. Battery life so far is very good! The smart case helps maintain battery life when not in use. From regular use I can go about three days before I need to charge them again. Now that is not travel days. If you travel a lot you may have to charge them more often. Everyones use case is different.",
"_id": "616b37257e30d62fe22a8a1b"
}
],
"__v": 0,
"createdAt": "2021-10-16T20:33:41.790Z",
"updatedAt": "2021-10-16T20:33:41.790Z",
"avgRating": 5,
"id": "616b37257e30d62fe22a8a1a"
}


```

### MVP/PMVP



#### MVP
- Set up and deploy backend to heroku
- Set up and deploy front end to netlify
- Full CRUD on backend and front end
- Authentication
- Responsive styling with tailwind

#### PMVP
- Add Reviews and Ratings
- Add Wishlist
- Add Blog
- Restricted routes with admin/user privileges


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Oct 7| Wire Frame building and approval | Complete
|Oct 8| Component  hierarchy/ Repo Approval | Complete
|Oct 9-10 | Pseudocode / structure components and set up backend  | Complete
|Oct 10 | Initial Clickable Model  | Complete
|Oct 11| functional screens | Complete
|Oct 12| syling and cleaning code | Complete
|Oct 12| syling and cleaning code | Complete
|Oct 13| Styling MVP| Complete
|Oct 14| Post MVP | Complete
|Oct 15| Post MVP | Complete
|Oct 18| Project Presentation | Incomplete

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal Approval         |    H     |      1hr       |     1hr      |    1hr     |
| Create Database           |    H     |      3hr       |     3hrs      |   3hrs      |
| Set up Routes/Controllers for Backend|    H   | 3hrs   |    3hrs       |   3hrs      |
| Create and Seed Data      |    H     |      2hr       |     3hrs      |     3hrs    |
| Set up front end          |    H     |      4hrs      |     4hrs      |     4hrs    |
| Set up front end routes   |    H     |      4hrs      |      4hrs     |     4hrs    |
| Create/test API calls     |    H     |      3hrs      |     3hrs      |     3hrs    |
| Create products component |    H     |      3hr       |     5hrs      |     5hrs    |
| Create details component  |    H     |      3hrs      |     5hrs      |     5hrs    |
| Create/Edit component     |    H     |      3hrs      |     5hrs      |     5hrs    |
| Sign In/Sign Up screen    |    H     |      3hrs      |     3hrs      |     3hrs    |
| Basic styling             |    H     |      6hrs      |     6hrs      |     6hrs    |
| Categories/sorting        |    M     |      3hrs      |     3hrs      |     3hrs    |
| Advanced CSS              |    H     |      6hrs      |     10hrs     |     10hrs    |
| Reviews and Ratings       |    L     |      3hrs      |     3hrs      |     3hrs    |
| Wishlist                  |    L     |      3hrs      |     5hrs      |     5hrs    |
| Blog full CRUD            |    L     |      3hrs      |     5hrs      |     5hrs    |
| Team/Resources            |    L     |      3hrs      |     3hrs      |     3hrs    |
| Debug/clean up code       |    H     |      3hrs      |     5hrs      |     5hrs    |
| Total                     |          |to MVP 53hrs    |     82 hrs      |         |




