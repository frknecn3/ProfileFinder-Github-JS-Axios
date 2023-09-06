# Profile Finder for GitHub

[image](working.gif)

<h1> Goal:</h1>

Creating a page that can access the Github API through Axios and list the details of the searched user.

<h2>Utilized Tech/Libraries:</h2>

<ul>
  <li> HTML and CSS for user interface and general structure of the page.</li>
  <li> Javascript for manipulating HTML DOM and CSS. Restructuring the page as the input changes.</li>
  <li> Axios library for fetching profile and repository data from GitHub</li>
</ul>

<h2>Details:</h2>

The page uses an input box to search the profile with the username in question. After fetching the data from Github API through Axios; user name, profile picture, user biography and several repositories belonging to the user are sent to the according JS functions to manipulate the HTML. If the username with the input does not exist, then the page shows an error.

<h2>How To Use:</h2>

Simply fork the repository to local, open index.html and enter the username you want to search for.
