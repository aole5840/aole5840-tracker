# Development Documentation

This development documentation explains the process of developing the Moviary Website Application from design mockup to prototype. It shares and demonstrates self-reflection including the challenges and changes made based on feedback.

### Home Section
>**Mockup**
![Home Section Mockup](MockupImages/HomePageMockup.jpg)

>**Prototype**
![Home Section Prototype](MockupImages/HomePagePrototype.jpg)

The home section of moviary was developed with a simple layout, while providing accessibility and aesthetics to all users.

The home section design of the prototype looks very similar to the mockup design with small changes implemented. The first change was in the navigation bar which was changed from a white underline to a purple hover background. The purple matches the aesthetic of the website of dark grays and purple. It also makes it visible to the user which section they are interacting with before they click on the link. 

Next, all call to action texts and titles were also edited by their fonts and positioning. The font changed from 'Godshine Sans' to 'Poppins' which looks very similar to each other's style. This is because Godshine Sans was not a free font, and was not easily accessible for the development of Moviary. By using this font, the readability and accessability is available for all users. The welcome message and movie data counters were positioned into the middle of the image to provide balance, and the "Welcome, Joey Dunn" was changed to a gray font to provide a clear colour contrast. In the mockup version, there was an issue with contrast as the white text was too light for the image, therefore it was decided to change the text to gray.

The responsiveness of the home section was successful as the welcome message would change its layout depending on the window width. It still kept its structure and design.


### Create Section
>**Mockup**
![Create Section Mockup](MockupImages/CreatePageMockup.jpg)

>**Prototype**
![Create Section Prototype](MockupImages/CreatePagePrototype.jpg)

The create section prototype also followed the design structure and aesthetic of the mockup. The form created remained easy to follow which helped with user experience and engagement of the web application. By doing this, users were able to gain an understanding of the web application layout and aesthetic, and therefore learn how to use Moviary with ease. 

There were two main changes to the create section. Firstly, feedback received stated that the image chosen was too distracting and was suggested to change the design. To approach this feedback, the background image has been moved down from the tv to show the wall above the tv. By doing this, there is more colour contrast between the light and dark colours, and less distraction from the content on the tv. Users can focus more on the form as it looks less busy and crowded from the background image. The second design change was the upload file box. There is no upload image box for the image in the prototype. When a user uploads a photo, the photo will display  without a white background. This makes the picture look like a poster on the wall. The rest of the background image reveals after the photo is uploaded giving the user a reminder of the purpose of Moviary, but also adds onto that aesthetic of movies and streaming platforms.

All user inputs were kept towards the middle with equal spacing to maintain that visual balance across the web application. Texts and subheadings were also aligned to appropriate positioning. This kept the design and look of the page clean and tidy. It also helped with responsiveness for when the page is opened at a smaller window width.


### Library Section
>**Mockup**
![Library Section Mockup](MockupImages/LibraryPageMockup.jpg)

>**Prototype**
![Library Section Prototype](MockupImages/LibraryPagePrototype.jpg)

The library section had the most changes in comparison to the mockup. The features removed were the genres drop down section and the image on the movie cards. A separate page to the clicked movie card was also removed. This is because to keep the structure to a single page, the data can be easily read on the library movie cards without having to open it in another page.

Creating the library was not too difficult. It mainly relied on CSS to make sure the web application layout and colours was perfectly displayed. The movie cards have been evenly spaced out five across to create a visual balance. Due to not being able to implement the uploaded picture into the card, a white background has been chosen to contrast with the dark gray. The font of the text being consistent of Poppins. This helps with acessibility of the web application.

The border of the movie cards was changed to purple, with the delete button being purple as well. When the user would hover over the delete button, it would turn to the colour red to symbolise urgency or danger. The movie card would also move up if interacted with the mouse in where the border colour would change from purple to blue. By doing these two features, it would show to the user where their mouse is and which movie they are currently interacting with. 

The responsiveness of the library section was successful as the movie cards would flow underneath each other depending on the size of the window. 


### Designs Across All Sections
The designs across all sections of the web application was constant as attention to spacing, text size, and alignment was regularly implemented into the coding of Moviary. The web application looks very similar to the design of the mockup with very little changes as advised from feedback. During the development of the designs, referring back to readability and the 'Web Content Accessibility Guidelines'. 


### Coding Across All Files
When coding for each file they all followed a specific structure that would make it easy to read for other developers. The HTML file consists of a head and body. The body is further divided into the header and main. The javascript and CSS files are structured the same way as the HTML file, in where the top of the files would have the header and home content, and the middle to the end would have the main body of the web application such as the create section first, and then lastly the library.


### Challenges Faced
There were many challenges faced during the development of Moviary. One of the main challenges faced was uploading a photo from the user and placing it within the movie card in the library. This was difficult as I could not seem to get the image element and display it in the javascript and html files. It may have be an issue as I was trying to change the background of the list to an image which may or may not have been possible.

Another challenge faced was the counter of the total minutes and total genres in the home section of the web application. I was able to succeed in counting the total amount of movies entered, as well as decrease the total movie count when a movie card was deleted. The total minutes and genres was never solved, however I have left the code in the javascript for people to review. This can be found at the top of the js script js file under the comments of "total minutes counter attempt" and "total genres counter attempt".

Finally, the responsiveness of the web application was another challenge. The create form would not flow underneath each other nicely, and the background images did not sit nicely behind the content.

Overall, I managed to solve all other challenges mainly related to javascript. The nav bar is linked to the relevant sections of the page, the form successfully takes in the data and displays it in the library section, and if the user deletes one of these enteries, it is also deleted from the browser storage. 


### References
**Coding**

C, Tanner. (2020, Feb 20). Web development tutorial for beginners #16 - Javascript - Click counter [Video file]. Retrieved from https://www.youtube.com/watch?v=AHsAunoMG_s&t=331s

DECO1016. (2022). CSS Navigation. Retrieved from https://replit.com/@DECO1016/CSS-Navigation-T1#index.html

DECO2017. (2023). Countries of the world API. Retrieved from https://countries-of-the-world-api-aole5840.deco2017.repl.co

DECO2017. (2023). JS basic challenges. Retrieved from https://js-basic-challenges-solution-aole5840.deco2017.repl.co

DECO2017. (2023). JS basic challenges. Retrieved from https://js-basic-challenges-solution-aole5840.deco2017.repl.co


**Images**

Leclercq, N. J. (2020). A screen shot of a computer photo. Retrieved from https://unsplash.com/photos/fg00hP0VPI8

Mclean, E. (2020). Person holding black remote control photo. Retrieved from https://unsplash.com/photos/U-Vu_r6qyyU
