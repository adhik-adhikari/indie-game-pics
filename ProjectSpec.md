# WEB103 | Advanced Web Development
### Advanced Web Development Fall 2026 (@ Section 1 | Wednesdays 3PM - 5PM PT)
### Personal Member ID#: 136354

Need help? Post on our [Class Slack Channel](http://codepath.slack.com/) or email us at [support@codepath.org](mailto:support@codepath.org)

## Navigation & Course Menu
* [Getting Started](https://courses.codepath.org/courses/web103/pages/getting_started)
* [Learning with AI ✨](https://courses.codepath.org/courses/web103/pages/ai_welcome)
* Course Info
  * [Syllabus](https://courses.codepath.org/snippets/web103/syllabus)
  * [Course Overview](https://courses.codepath.org/courses/web103/pages/course_overview)
  * [Groupings](https://courses.codepath.org/courses/web103/pages/groupings)
  * [Submitting Coursework](https://courses.codepath.org/courses/web103/pages/submitting_coursework)
  * [Grading Rubrics](https://courses.codepath.org/courses/web103/pages/grading)
  * [IDE Setup](https://courses.codepath.org/courses/web103/pages/ide_setup)
* [ Course Progress](https://courses.codepath.org/courses/web103/report)
* Individual
  * [Unit 1 ](https://courses.codepath.org/courses/web103/unit/1#!overview)
  * [Unit 2 ](https://courses.codepath.org/courses/web103/unit/2#!overview)
  * [Unit 3](https://courses.codepath.org/courses/web103/unit/3#!overview)
  * [Unit 4](https://courses.codepath.org/courses/web103/unit/4#!overview)
* Capstone Project
  * [Unit 5](https://courses.codepath.org/courses/web103/unit/5#!overview)
  * [Unit 6](https://courses.codepath.org/courses/web103/unit/6#!overview)
  * [Unit 7](https://courses.codepath.org/courses/web103/unit/7#!overview)
  * [Unit 8](https://courses.codepath.org/courses/web103/unit/8#!overview)
  * [Unit 9](https://courses.codepath.org/courses/web103/unit/9#!overview)
  * [Unit 10](https://courses.codepath.org/courses/web103/unit/10#!overview)
* [ Schedule](https://courses.codepath.org/courses/web103/schedule)

## Unit 1 Menu
* [ Overview](https://courses.codepath.org/courses/web103/unit/1#overview)
* [Lab](https://courses.codepath.org/courses/web103/unit/1#labs)
* [Projects](https://courses.codepath.org/courses/web103/unit/1#projects)
* [ IDE Setup](https://courses.codepath.org/courses/web103/unit/1#ide)
* [ Learning with AI ✨](https://courses.codepath.org/courses/web103/unit/1#ai)
* [ Resources](https://courses.codepath.org/courses/web103/unit/1#resources)
* [ Report](https://courses.codepath.org/courses/web103/unit/1#report)

---

## Unit 1: Project 1 - Listicle Part 1

📬 Submit this assignment by **Monday, September 21st at 1:59AM CDT** using the *Submit* button 👉

### Overview
Who doesn't love a good list? In this project, you'll create a list-based web app that displays content of your choosing. Is it a guidebook to finding the best local music venues? 🎶 Is it a database of tips and tricks for young entrepreneurs? 💼 You'll create a web app that displays some interesting data in a list, building out a complete backend that serves static HTML, as well as a minimal frontend to serve the data.

👋 Keep in mind that in this project, you should *not* use a frontend framework, like React. Instead, use vanilla HTML/CSS/JS and [Picocss](https://picocss.com/) to style your app.

💡 In Unit 2, you'll connect your app to a database. Make sure all items in your Listicle project have a few shared attributes. For example, in the Unearthed lab, each gift has a name, price point, description, and so on. See the examples below for more help.

### Example App 1: Discover Local Music
Love live music? This app helps students find upcoming concerts, open mic nights, and music festivals happening near their college or university. Whether you're into indie, hip-hop, EDM, or acoustic sets, you can filter by genre, ticket price, or venue size. Users can click on an event to see more details, like the artist lineup, date and time, and ticket price.
*Event shared attributes:* event name, artist(s), date & time, venue, genre, ticket price (if applicable)

### Example App 2: Guide to Starting Your Business
No matter what stage you are at opening up a business, we have a tutorial for you! Looking to brainstorm business ideas and find your niche? We can guide you in the right direction! Finding the right partner? Growing your team? Talking to suppliers? We have a short guide for each one of those. Our guides are sorted into different categories (including business models, product development, sales, market research, and funding) so you can browse or filter to personalize your experience.
*Business tip shared attributes:* title, text, category, image, submitted by

### Use AI to brainstorm ideas for your code
If none of the above ideas inspire you and you don't have any ideas of your own, you can also ask Copilot (or ChatGPT) for additional project ideas! Provide Copilot with a description of the project and its requirements as well as a list of your interests. Then ask it to generate a list of possible project themes and shared attributes!

### 🎯 Goals
By the end of this assignment you will be able to...
- [ ] Create a web server to handle incoming requests
- [ ] Create routes and request handlers using Express

### Required Features
- [ ] The web app uses only HTML, CSS, and JavaScript without a frontend framework
- [ ] Front page of web app is functional and appropriately styled
- [ ] The web app displays a title
- [ ] Website displays at least five unique list items
- [ ] Each list item includes at least three displayed attributes, such as a title, description, and image
- [ ] Each list item has a corresponding page
  - [ ] The user can click on each item in the list to see a detailed view of it, including all database fields
  - *e.g., `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`*
- [ ] The web app serves an appropriate 404 page when no matching route is defined
- [ ] The webpage is styled with [Picocss](https://picocss.com/)

### Screenshot
*View an exemplar of the project [here](https://hollow-knight-v1.onrender.com/)!*

### Stretch Features
- [ ] List items are displayed in a unique format
  - *e.g., cards rather than lists or animated list items*

### Resources
- [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Picocss](https://picocss.com/)
- [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Express Routing](https://expressjs.com/en/guide/routing.html)
- [Express Basic Routing](https://expressjs.com/en/starter/basic-routing.html)

### 💡 Hints
**Help! I don't know where to start!**
- After you decide on your topic, decide what information you want to display and how you want to display it on your web app. Then, figure out your routes and structure your pages.
- Look at this week's lab for examples on how to implement similar applications. What code will be similar? What do you need to change?

**I'm stuck on something!**
- Don't just skip the Resources section.
- Review the AI debugging tips in the box below!
- Still need a little extra help getting started or running into an error? Try posting in the [Class Slack Channel](http://codepath.slack.com/).

### Use AI to understand why your code isn't working
Try using GitHub Copilot to debug or get unstuck. You can use the following prompts as a starting point:
* **Prompt 1:** "You are an expert developer. Based on the current code context and the error {error_message}, what are the three most likely causes of this issue in the current or surrounding files? For each, explain how to fix it, referencing relevant lines or patterns in the project."
* **Prompt 2:** "You are a mentor helping a beginner web developer reflect on {topic}. Their understanding is that {state your understanding in your own words}. Ask three follow-up questions that could help them understand what they're missing."

If you are using ChatGPT, remember that ChatGPT will have less context about your project because it won't have access to your codebase. This means you may need to adapt the above prompts to provide context yourself!

### Submission Guidelines
For more details on submission instructions, follow the guidelines on the [Submitting Coursework](https://courses.codepath.org/courses/web103/pages/submitting_coursework) page.
- Make sure you are adding and committing files in git as you complete features and milestones.
- Be sure to *include a README* containing a GIF walkthrough of your project.
- Use this [README TEMPLATE](https://courses.codepath.org/snippets/web103/readme_templates/project1_readme_template?raw=true).
- It is important that you follow the same layout as the README template so that we can easily access your work.
- Be sure to check off each feature that is implemented in your submission by changing `[ ]` to `[x]`. We won't be able to assign points if a feature is unchecked.

*Note:* We highly encourage you submit your project in any state (even if it is not done) by **Monday, September 21st at 1:59AM CDT**. You can continue to work on your project with our *48-hour extension* in which your project will be graded once more once the extension deadline has passed (see "Coursework Submissions" in Syllabus for details). Don't forget to *resubmit through the course portal* with your *updated GIF recording*!