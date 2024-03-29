# Facts From the Past
- developed by Arthur Ambalov

![Image of website on different sized screens](docs/am-i-responsive.png)

[Link to live webpage](https://github.com/artambdev/facts-from-the-past/)

## Table of Contents

1. [Overview](#overview)
2. [User Stories](#user-stories)
3. [Design](#design)
    1. [Colour](#colour)
    2. [Font](#font)
4. [Features](#features)
    1. [Pages](#pages)
5. [Validation](#validation)
    1. [HTML](#html)
    2. [CSS](#css)
    3. [Javascript](#javascript)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Browser Compatibility](#browser-compatibility)
    7. [Device Compatibility](#device-compatibility)
    8. [Testing User Stories](#testing-user-stories)
6. [Bugs](#bugs)
7. [Deployment](#deployment)
8. [Credits](#credits)

## Overview

Facts From the Past is an interactive website that aims to teach fun facts about history in an appealing way. Visitors are given a ten-question quiz on a variety of topics with a choice of four answers to pick from. Correct or incorrect, they are also offered tidbits of explanation behind the event or fact in question. Encouraging messages accompany their progress. The quiz can be replayed, with questions and answers shuffled into a new order to keep the player on their toes.

## User Stories
The website is designed for two possible users and 14 user stories:

### User: Visitor
- 1. As a visitor, I want an explanation on what the website is about
- 2. As a visitor, I want to be able to easily navigate between pages
- 3. As a visitor, I want to be presented questions in an appealing way
- 4. As a visitor, I want to be congratulated for correct answers
- 5. As a visitor, I want to see how I'm doing on the quiz so far
- 6. As a visitor, I want answering questions to be easy and intuitive
- 7. As a visitor, I want feedback on whether my answers are correct or not
- 8. As a visitor, I want to easily play the quiz again to get a better score
- 9. As a visitor, I want to have a different experience when repeating the quiz

### User: Site Owner
- 10. As the site owner, I want the site's brand to stand out and be memorable
- 11. As the site owner, I want people to understand the purpose of the site and quiz
- 12. As the site owner, I want to encourage visitors to play the quiz multiple times
- 13. As the site owner, I want visitors to be encouraged to continue even if they fail
- 14. As the site owner, I want to tell people who created the website

## Design
A few wireframes were made in advance of starting development to plan out the most important features and the structure of code that would be required to accompany them.

The wireframes are presented below:

![Image of the index's mobile wireframe](docs/wireframes/wireframe-index.png)
![Image of the quiz's mobile wireframe](docs/wireframes/wireframe-quiz.png)
![Image of the quiz's mobile wireframe with the quiz completion popup](docs/wireframes/wireframe-quiz2.png)
![Image of the quiz's desktop wireframe](docs/wireframes/wireframe-desktop.png)

### Colour
- A pleasant pattern of light lilac with pink highlights is meant to evoke a kind feeling to the quiz rather than a stressful one, a fun game rather than a test. Answer buttons are given different colours to distinguish them, with popups using gold colouration to indicate forwards progress.

### Font
- Headings use the Noto Sans font while other text uses the Lato font. Both are popular sans-serif fonts that are easy to read and suitable for viewing on screens. In case of a failure to load, they both default to the browser's default sans-serif font.

## Features
The website has 3 pages and 10 features across them.

### Pages
The three pages are:
- A homepage that users to the site are automatically brought to, explaining the website's purpose and the quiz ahead with a button to begin
- A quiz page that contains the interactive quiz itself
- A custom 404 page that users are brought to when sent to an invalid page on the website, which offers a button to return to the homepage

### Header
![Image of the header on desktop](docs/features/header.png)
![Image of the header on mobile](docs/features/header-mobile.png)
- The header is visible on all pages, displaying the site's name.
- On desktop, it appears as a pink box with the site's logo.
- On mobile, it appears as a pink banner over the top of the screen.
- User stories: 10

### Introduction
![Image of the introduction](docs/features/intro.png)
- A few paragraphs of text explain the site's purpose and the quiz ahead.
- User stories: 1, 11

### Take Quiz Button
![Image of the take quiz button](docs/features/take-quiz-button.png)
- A golden button on the front page invites the user to take the quiz.
- Clicking it brings them to the quiz page and begins the quiz.
- User stories: 2

### Footer
![Image of the footer](docs/features/footer.png)
- The footer simply displays a line of text with the site creator's name.
- On mobile, the footer does not appear on the quiz page to make space for the answer buttons.
- User stories: 14

### Back Button
![Image of the back button](docs/features/back.png)
![Image of the back button on mobile](docs/features/back-mobile.png)
- On the quiz and 404 pages, a button appears to go back to the index.
- On mobile, it is folded into the header alongside the logo.
- On tablets or larger screens, it appears as a standalone pink button.
- On laptops or larger screens, it also smoothly highlights white when hovered.
- User stories: 2

### Question Progress
![Image of the question progress indicators](docs/features/progress.png)
- Under the header, a header and score counter are visible.
- The header tracks the question the player is on.
- The score counter shows how many questions have been gotten correct of those answered.
- User stories: 5

### Question Information
![Image of the question information](docs/features/question-info.png)
- Under the question progress, an image related to the question is displayed along with the question itself.
- The image never spoils the answer of the question (including its automatically-changed aria label)
- Questions are randomly reshuffled each time the quiz is played
- User stories: 3, 9

### Answer Buttons
![Image of the answer buttons on desktop](docs/features/answer-buttons.png)
![Image of the answer buttons on mobile](docs/features/answer-buttons-mobile.png)
- Four buttons offer the answers to each question.
- The answers are shuffled randomly each time the quiz is played.
- On mobile, the buttons are stacked upon each other across the bottom of the screen.
- On tablets or larger, the buttons appear in a 2x2 grid format.
- On laptops or larger, the buttons also highlight white when hovered.
- Buttons can't be clicked again until the next question is displayed.
- User stories: 6

### Answer Popup
![Image of the answer popup](docs/features/answer-popup.png)
- A popup appears when clicking an answer button, confirming if the answer was correct or not.
- Some encouraging text appears if the answer was wrong.
- The correct answer is displayed if the player chose incorrectly.
- An extra factoid is displayed.
- A button is offered to go to the next question.
- User stories: 4, 7, 13

### Quiz Completion Popup
![Image of the quiz completion popup](docs/features/completion-popup.png)
- When the last answer popup is closed, another popup appears to mark the end of the quiz.
- The text changes to reflect if the quiz was answered entirely incorrect, mostly incorrect, mostly correct or with a perfect score.
- A button is offered to return to the homepage.
- A gold button offers to retry the quiz, and reloads the page when clicked to restart the quiz with a new random sequence.
- User stories: 8, 12

## Validation

### HTML
All pages on the site are validated with the W3C's Markup Validation Service and show no errors or warnings. See each page below:
<details><summary>Homepage</summary>
<img src="docs/validation/html/validation-html-index.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/validation/html/validation-html-quiz.png">
</details>
<details><summary>404 Page</summary>
<img src="docs/validation/html/validation-html-404.png">
</details>

### CSS
The CSS style used by the site was validated with the W3C's CSS Validation Service, and showed no errors. There is one warning for the external stylesheet of Google Fonts which cannot be checked. See below:
<details><summary>No errors</summary>
<img src="docs/validation/css/validation-css-noerrors.png">
</details>
<details><summary>Warning</summary>
<img src="docs/validation/css/validation-css-warning.png">
</details>

### JavaScript
The JavaScript code used by the quiz was validated with the JSHint Code Quality Tool, showing no errors or warnings.
<details><summary>Image</summary>
<img src="docs/validation/validation-js.png">
</details>

### Accessibility
All pages on the site are checked with the WAVE Website Accessibility Evaluation Tool, and none show any errors. See each page below:
<details><summary>Homepage</summary>
<img src="docs/validation/access/validation-access-index.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/validation/access/validation-access-quiz.png">
</details>
<details><summary>404 Page</summary>
<img src="docs/validation/access/validation-access-404.png">
</details>

### Performance
Google Chrome's Lighthouse feature was used to check every page for performance issues, and each returned a high score in all categories. See each page's result below:
<details><summary>Homepage</summary>
<img src="docs/validation/lighthouse/validation-lighthouse-index.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/validation/lighthouse/validation-lighthouse-quiz.png">
</details>
<details><summary>404 Page</summary>
<img src="docs/validation/lighthouse/validation-lighthouse-404.png">
</details>

### Browser Compatibility
Each page has been tested to work on:
- Mozilla Firefox
- Google Chrome
- Microsoft Edge
- Safari for iOS

### Device Compatibility
Each page was tested on Mozilla Firefox and Google Chrome's developer tools for responsive design. Testing was done on a desktop PC running Windows 11 and a Galaxy A50 phone.

### Testing User Stories
Below is a list of user stories and the process by which they are fulfilled:

1. As a visitor, I want an explanation on what the website is about

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Introduction | Navigate to the homepage, locate the introduction section | Find a description of the website and quiz | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-1.png">
</details>

2. As a visitor, I want to be able to easily navigate between pages

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Take Quiz button | Navigate to the homepage, click the Take Quiz button | Go to the quiz | Works as expected |
| Back button | On the quiz page, click the left chevron | Go back to the homepage | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-2.png">
</details>

3. As a visitor, I want to be presented questions in an appealing way

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Question information | Navigate to the quiz page, find the question image and text | Find a question and an accompanying image | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-3.png">
</details>

4. As a visitor, I want to be congratulated for correct answers

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Answer popup | Navigate to the quiz page, click the correct answer | Get a congratulation blurb and increased score | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-4.png">
</details>

5. As a visitor, I want to see how I'm doing on the quiz so far

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Quiz progress | Navigate to the quiz page, find the question counter and score counter | Find how many questions have been answered and how many were correct | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-5.png">
</details>

6. As a visitor, I want answering questions to be easy and intuitive

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Answer buttons | Navigate to the quiz page, click on a button | Immediately select an answer to the question | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-4.png">
</details>

7. As a visitor, I want feedback on whether my answers are correct or not

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Answer popup | Navigate to the quiz page, click on a button | Receive feedback on if the answer was correct and if not, what it should have been | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-4.png">
</details>

8. As a visitor, I want to easily play the quiz again to get a better score

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Quiz completion popup | Navigate to the quiz page, answer 10 questions | Have a button to click to replay the quiz | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-8.png">
</details>

9. As a visitor, I want to have a different experience when repeating the quiz

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Quiz page | Navigate to the quiz page, back to the index via the back button, then back to the quiz | The questions appear in a different order | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-9.png">
</details>

10. As the site owner, I want the site's brand to stand out and be memorable

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Locate the logo on each page | Find the website's brand displayed prominently | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-10.png">
</details>

11. As the site owner, I want people to understand the purpose of the site and quiz

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Introduction | Navigate to the homepage, locate the introduction section | Find a description of the website and quiz | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-1.png">
</details>

12. As the site owner, I want to encourage visitors to play the quiz multiple times

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Quiz page | Navigate to the quiz page, back to the index via the back button, then back to the quiz | The questions appear in a different order | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-9.png">
</details>

13. As the site owner, I want visitors to be encouraged to continue even if they fail

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Answer popup | Navigate to the quiz page, click an incorrect answer | Get a message and explanation of the correct answer | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-4.png">
</details>

14. As the site owner, I want to tell people who created the website

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Navigate to the bottom of the page | Find a note about the site owner | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/validation/user-stories/story-14.png">
</details>

## Bugs
Notable bugs found during development:

- Once new questions were added with different correct answers, the quiz would reject any answer given and suggest an answer from another question entirely (for example, possibly suggesting that the first dog in orbit's name was the Aztec Empire). It was discovered that this is because the question list's index has already moved onto the next question once it has finished setting up the page. Checking the "previous" question solved this issue.
- After adding a white highlight when hovering buttons, the highlight function was broken only on the button on the quiz-completion popup to return to the homepage. It turns out this was because that button is the only one whose background and text color are determined by a CSS styling using an ID selector, which has a higher specificity than the CSS style used to style all hovered buttons. This was solved by using the "!important" affix on the hovered-button style's properties to give it a higher specificity that beats that of an ID selector.
- Scaling the questions' images with the screen size often cause the images to cause there to be a highly inconsistent amount of space on larger screens for the question's text, sometimes hiding it entirely behind the answer buttons. This was solved by giving the images a fixed size targeted for the smaller of the larger screens (i.e tablets).

## Deployment
The website was deployed with GitHub's deployment platform, GitHub Pages. The following steps were followed:
- Click on the "Settings" tab of the project's repository
- On the left, under the "Code and automation" section of the settings, navigate to "Pages"
- Under the "branch" option, select "main" and save
- After automatically refreshing, the page will show a small banner with a link to the live site

### Forking
On this project's repository, at the upper-right-hand side, there is a "fork" button to create a fork of it.

### Cloning
On this project's repository, at the upper-right-hand side, there is a "Code" button. To clone the project, click the button and:
- Choose between HTTPS, SSH or GitHub CLI as preferred and click the "Copy url to clipboard" button
- Open Git Bash
- Set the working directory to where the cloned project should be
- Type "git clone " followed by the copied URL
- Hit enter to create the cloned project

## Credits
Public domain or free-with-attribution images used:
- Presidential photos question: <a href="https://en.wikipedia.org/wiki/Mount_Rushmore#/media/File:Mountrushmore.jpg">unknown US National Parks Service employee</a>
- Empires question: <a href="https://pixabay.com/photos/rome-pantheon-italy-church-dome-7245470/">Leonard Niederwimmer</a>
- China textile questions: <a href="https://commons.wikimedia.org/wiki/File:Flores_y_colores_hechos_a_mano.jpg">Lily Sanchez</a>
- Elizabeth 2 coronation question: <a href="https://www.rct.uk/collection/2153177/queen-elizabeth-ii-b-1926nbspon-her-coronation-day">Cecil Beaton</a>
- Alexander the Great question: <a href="https://en.wikipedia.org/wiki/Alexander_the_Great#/media/File:Charles_Le_Brun_-_Entry_of_Alexander_into_Babylon.JPG">Charles Le Brun</a>
- Soviet Space Dog question: <a href="https://upload.wikimedia.org/wikipedia/en/7/71/Laika_%28Soviet_dog%29.jpg">Soviet Space Program</a>
- Normandy Landings question: <a href="https://upload.wikimedia.org/wikipedia/commons/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg">Robert F. Sargent</a>
- Castles question: <a href="https://en.wikipedia.org/wiki/Castle#/media/File:Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg">Ángel Sanz de Andrés</a>
- Parthenon question: <a href="https://en.wikipedia.org/wiki/Greek_mythology#/media/File:Achilles_Penthesileia_BM_B209.jpg">Great British Museum</a>
- George Washington question: <a href="https://commons.wikimedia.org/wiki/File:Residence_of_the_Washington_Family_on_the_Rappahannock.jpg">Washington Irving</a>
- Icons: <a href="https://fontawesome.com/icons">FontAwesome</a>

Technology used:
- Languages: HTML 5, CSS, JavaScript
- IDE: GitPod
- Version control: GitHub
- Deployment: GitHub's Pages feature
- Wireframing: Balsamiq
- Validation: W3C HTML Validator, W3C CSS Validator, JSHints Code Quality Tool, WAVE Website Accessibility Evaluation Tool, Google Chrome
- Art program: paint.net
- Color palette design: <a href="https://mycolor.space">ColorSpace</a>

Code:
- Code for 404 page functionality was taken from <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site">GitHub's documentation for GitHub Pages</a>
- Fisher-Yates shuffle algorithm was learned from <a href="https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/">Free Code Camp</a>

Other:
- Mo Shami for mentoring, guidance and feedback throughout the project.