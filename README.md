# Project Overview

## Project Name

[Watch Party](https://watch-party-by-stefanie-nussbaum.netlify.app/)

## Project Description

Watch party will keep track of the movies or shows you would like to watch soon. When you think of a movie or show you would like to watch just add it to the list. When it is time for you to pick something to watch, you can just use Watch Party to view everything you've submitted. You can also narrow down your choice to just shows or just movies.

## Wireframes

![Wireframe - Home Desktop](https://user-images.githubusercontent.com/85084394/125379736-aaf7ef00-e356-11eb-81c6-10598c103fda.png)
![Wireframe - Details Desktop](https://user-images.githubusercontent.com/85084394/125379800-ca8f1780-e356-11eb-83f3-05f4c5a9c07e.png)
![WireFrame - Add New Desktop](https://user-images.githubusercontent.com/85084394/125459524-0f8d9c56-0858-4f90-b6e5-bbc82384d4a0.png)
![Wireframe - Home Mobile](https://user-images.githubusercontent.com/85084394/125379837-da0e6080-e356-11eb-9570-3d99dd8ed055.png)
![Wireframe - Details Mobile](https://user-images.githubusercontent.com/85084394/125379854-e5618c00-e356-11eb-98e6-f979c3632df3.png)
![Wireframe - Add New Mobile](https://user-images.githubusercontent.com/85084394/125459477-bfed7311-815e-49ec-881f-3c49c72f290d.png)

## Component Hierarchy

![Component Structure](https://user-images.githubusercontent.com/85084394/125381173-0fb44900-e359-11eb-9a85-e8a79a1e3bed.png)

## API and Data Sample

```json
{
  "id": "reccniENsTeNmZrlZ",
  "fields": {
    "title": "Bob's Burgers",
    "genre": "animation",
    "year": "2011",
    "movie": "false",
    "netflixOrHulu": "2",
    "poster": "https://fanart.tv/fanart/tv/194031/tvposter/bobs-burgers-55e43d58c600b.jpg",
    "imdbLink": "https://www.imdb.com/title/tt1561755/"
  },
  "createdTime": "2021-07-13T01:11:03.000Z"
},
```

### MVP/PostMVP

#### MVP

- Create Airtable Database to fit needs of the project.
- Build a React app with at least 6 components, and using links and routes.
- Use axios to access access and render Airtable data.
- Allow user to post new data to the Airtable.
- Use flexbox or grid to create a responsive design for at least 2 screen sizes.

#### PostMVP

- Add loading animations
- Give user indication that they have successfully added an item
- Give user ability to delete or check off items

## Project Schedule

| Day        | Deliverable                                                      | Status     |
| ---------- | ---------------------------------------------------------------- | ---------- |
| July 10-12 | Prompt / Wireframes / Priority Matrix / Timeframes               | Complete   |
| July 13    | Project Approval                                                 | Complete   |
| July 14    | Core App Structure / build out components                        | Complete   |
| July 15    | All routing and linking / get and post requests / render to page | Complete   |
| July 16    | Style all components                                             | Complete   |
| July 19    | Additional Styling / Post MVP                                    | Complete   |
| July 20    | Presentations                                                    | Incomplete |

## Timeframes

| Component                                            | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create app structure                                 |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Get airtable info and keys established               |    H     |      2hrs      |     1hrs      |    1hrs     |
| Create some starting Airtable data                   |    M     |      2hrs      |     2hrs      |    2hrs     |
| Create component files                               |    H     |     0.5hrs     |    0.5hrs     |   0.5hrs    |
| Set up browser router/link capability                |    H     |     0.5hrs     |    0.5hrs     |   0.5hrs    |
| Populate and link components                         |    H     |      2hrs      |    1.5hrs     |   1.5hrs    |
| Successful get request of data                       |    H     |      2hrs      |     1hrs      |    1hrs     |
| Render data from get request to the page             |    H     |      2hrs      |     3hrs      |    3hrs     |
| Filter movie data                                    |    H     |      2hrs      |    1.5hrs     |   1.5hrs    |
| Filter show data                                     |    H     |      2hrs      |     1hrs      |    1hrs     |
| create submit form component                         |    H     |      1hrs      |     3hrs      |    3hrs     |
| Successful post request to data                      |    H     |      1hrs      |     3hrs      |    3hrs     |
| Style navbar/header                                  |    M     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Style movie component                                |    M     |      3hrs      |     3hrs      |    3hrs     |
| Style lists of shows/movies                          |    M     |      3hrs      |     4hrs      |    4hrs     |
| Responsive Design                                    |    H     |      3hrs      |     3hrs      |    3hrs     |
| Loading animations                                   |    L     |      2hrs      |     2hrs      |    2hrs     |
| (Removed) Indication of successful new item creation |    L     |      3hrs      |     0hrs      |    0hrs     |
| Delete feature                                       |    L     |      2hrs      |    1.5hrs     |   1.5hrs    |
| (Added) Rerouting with useHistory after post/delete  |    L     |      N/A       |    1.5hrs     |   1.5hrs    |
| (Added) Creating/styling footer                      |    L     |      N/A       |     1hrs      |    1hrs     |
| Total                                                |    H     |     37hrs      |     37hrs     |    37hrs    |

## SWOT Analysis

### Strengths:

I feel like I have a good grasp on all the basics and setup of a React application so I expect to be able to accomplish this part easily.

### Weaknesses:

I have the least practice with styling in CSS and it is usually the hardest part for me so this will likely take the most time and be difficult for me.

### Opportunities:

I am excited to build my own React app from scratch because I have actually really grown to like React a lot. I am also excited to be able to show off what I've learned and even learn something new in my post MVP goal of letting the user know a post is successful.

### Threats:

I have a tendency to just keep working at a problem until I can figure it out so I will need to watch my time management and make myself take breaks while working on this project.
