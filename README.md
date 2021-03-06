# you-are-here-timeline
Timeline component that idalink and IBES use

# TO USE
The js files in the dist folder provide the necessary pieces to load a styled js component (including template) into a jsp page.

vendor.bundle.js is essentially angular 1.5.5, so you could use a separate angular.js(1.5.5) script instead of vendor.bundle.js and it would work the same.

you-are-here.bundle.js contains all the javascript, css, and html for an angular component.

index.html gives an example of how to use the angular component on a (jsp) page. (ensure vendor.bundle.js or angular.js is loaded before the you-are-here.bundle.js)

# TO DEVELOP ON
Clone git repo locally.

*npm install* to get necessary libraries in place.

You can use *webpack-dev-server* to serve the assets locally and get some nifty development tricks in the process (like hot module replacement)

1. To globally install, use `npm install webpack-dev-server -g `
1. Next install json-server `npm install json-server -g `
1. To start mock back-end server `npm run rest-server` (uses port 9001)
1. To start dev front-end server `npm run start` (uses port 9000)
1. With both started, navigate to <http://localhost:9000/index.html>

Or

you can *npm bundle* and load the index.html page in your browser of choice to see the component without having to serve the assets locally.
