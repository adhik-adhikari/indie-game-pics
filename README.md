# WEB103 Project 1 - *Indie Game Picks*

Submitted by: **Adhik (Member ID: 136354)**

About this web app: **A listicle of the best indie video games you should play right now. Each game has its own detail page with info like genre, developer, release year, platform, rating, and a personal recommendation blurb.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as `localhost:3000/games/hollow-knight` and `localhost:3000/games/hades`**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation*
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Each game card shows a cover image, star rating, genre, year, and developer
- [x] The detail page shows a full attribute table (genre, developer, year, platforms, rating)
- [x] An `/about` page explains what was learned building the project
- [x] Responsive layout — cards stack on mobile screens

## Video Walkthrough

**Note: please be sure to show the unique URL for each detail page in the walkthrough!**

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/yblGOaG.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ... [LICEcap](https://www.cockos.com/licecap/)

## Notes

Challenges I ran into:
- Figuring out how to use URL parameters (`req.params.slug`) to serve individual game pages — I kept mixing up route order at first
- Getting the card image to display at a consistent size with `object-fit: cover` took some trial and error
- Understanding why the 404 catch-all route has to come *last* in `server.js` — Express checks routes in order, so if you put it first it matches everything

## License

Copyright 2026 Adhik

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
