Introduction
This documentation covers the implementation of a travel landing page using HTML, CSS, and JavaScript. The page includes a hero section with a navbar, modals for login and signup, a section showcasing popular destinations, a ticket booking form, and other promotional content.

Technologies Used
HTML: For structuring the web page.
CSS: For styling the web page.
JavaScript: For adding interactivity and dynamic content.

Menu Toggle
The toggleMenu function handles the visibility of a navigation menu and changes the text and style of a hamburger icon.

Purpose: To toggle the display of the navigation menu.
Actions:
Selects the navigation menu (.nav-links) and the hamburger icon (.hamburger h2).
Checks if the menu is currently visible.
Toggles the display style between none and flex.
Changes the hamburger icon's text between "☰" and "X" and adjusts the font size when the menu is open.
Modal Management
The functions showModal, closeModal, and switchModal manage the opening, closing, and switching between modals.

Purpose: To manage the display state of modals.
Actions:
showModal(modalId): Displays the modal with the given ID.
closeModal(modalId): Hides the modal with the given ID.
switchModal(currentModalId, targetModalId): Closes the current modal and opens the target modal.
Additionally, there's a global click event listener to close the modals when clicking outside of them:

Purpose: To enhance user experience by closing modals when clicking outside of them.
Actions:
Checks if the click event target is the login or signup modal and closes them if true.
Image Popup Functionality
The code block inside DOMContentLoaded event handles the image popup display.

Purpose: To display a random image popup when a button is clicked.
Actions:
Selects all .see-activities-button buttons, the popup overlay, the close button, and the container for random videos.
Defines an array of video sources.
Defines getRandomImages function to randomly select one image from the array.
Defines showPopup function to display the selected image in a popup.
Adds click event listeners to the buttons to trigger the popup display.
Adds a click event listener to the close button and the overlay to hide the popup when clicked.
"See All" Images Functionality
The functionality for displaying more images when the "See All" button is clicked.

Purpose: To dynamically load and display additional images upon button click.
Actions:
Defines an array of images with their sources and descriptions.
Tracks the current index of displayed images.
Adds a click event listener to the "See All" button.
On click, it adds more images to the container from the array until the array is exhausted.
Fetching and Displaying Travel Details
The fetchTravelDetails and displayTravelDetails functions handle fetching travel details from a JSON file and displaying them.

Purpose: To fetch and display travel details dynamically from an external JSON file.
Actions:
fetchTravelDetails:
Fetches data from data.json.
Handles errors in fetching.
Calls displayTravelDetails with the fetched data.
displayTravelDetails:
Creates and appends travel detail cards to the container.
Ticket Booking Form Functionality
Handles the opening, closing, and submission of a ticket booking form.

Purpose: To provide a form for users to book tickets and display a confirmation message upon submission.
Actions:
Adds a click event listener to open the booking form modal.
Adds a click event listener to close the booking form modal and reset the form.
Adds a submit event listener to the booking form.
On form submission, it prevents the default form action, gathers input values, and displays a confirmation message with the booking details.
Overall Flow
Menu Toggle: Users can open/close the navigation menu.
Modal Management: Users can open/close login and signup modals and switch between them.
Image Popup: Users can click to see random images in a popup.
See All Images: Users can load more images dynamically.
Travel Details: Travel details are fetched from a JSON file and displayed on page load.
Ticket Booking: Users can open a booking form, fill it out, and submit it to see a confirmation message.
This code provides an interactive and dynamic user experience, integrating various UI elements and functionalities.
