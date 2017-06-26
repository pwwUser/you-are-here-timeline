# you-are-here-timeline
Timeline component that idalink and IBES use

# TO USE
The js files in the dist folder provide the necessary pieces to load a styled js component (including template) into a jsp page.

vendor.bundle.js is essentially angular 1.5.5, so you could use a separate angular.js(1.5.5) script instead of vendor.bundle.js and it would work the same.

you-are-here.bundle.js contains all the javascript, css, and html for an angular component.

index.html gives an example of how to use the angular component on a (jsp) page. (ensure vendor.bundle.js or angular.js is loaded before the you-are-here.bundle.js)
