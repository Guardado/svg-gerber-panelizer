console.log("Hello world")


// let container = document.getElementById("svgElement");
// let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// const svgContent = '<circle cx="20" cy="20" r="15"></circle>';

// svg.innerHTML = svgContent;
// container.appendChild(svg);
// document.body.appendChild(container);


let container = document.getElementById("svgElement");
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("id", "target");
circle.setAttribute("cx", "40");
circle.setAttribute("cy", "40");
circle.setAttribute("r", "15");

let textMain = document.createElementNS("http://www.w3.org/2000/svg", "text");
textMain.setAttribute("x", "60");
textMain.setAttribute("y", "60");
let text = document.createTextNode("Hello World")
textMain.appendChild(text);

svg.appendChild(circle);
svg.appendChild(textMain);
container.appendChild(svg);
document.body.appendChild(container);


var moveSlider = function(slider, direction) {
    var value = slider.value;
    var circle = document.getElementById("target");
    var coord = "c" + direction;
    circle.setAttribute(coord, value * 5);
}


/*
Project:
    1- Draw a big grid and zoom it in. Also draw mark the center

SVG: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
    <svg>
    </svg>
</svg>
    Notes ->
        Xmlns only required in the parent
    ViewBox => Defines the position and zooming -> 
    preserveAspectRatio ->
        Defines how the ViewPort (ScreenView) and ViewBox of the SVG will be expanded.
        Values: XMinYMin, XMidYMid, etc
        https://www.youtube.com/watch?v=X5NkdXw2MOs&ab_channel=JustLearnerJustLearner

DEFS:
    Defs are used for defining svgs that can be used later with <use>, however 
    the most common use is to add here <patterns> and <markers>.
    Patterns -> Defines a repetitive pattern, excelent for grids 
    Markers -> Points that can be added to the end, mid, or end of lines, plygons, etc.
            Excellent for defining points in a track


Create Element -> document.createElementNS("http://www.w3.org/2000/svg", <element>)
  Element Types -> 
        Circle -> <circle cx="20" cy="20" r="15"></circle>
        Path -> <path d="M..." // Used to draw complex lines 
        G -> Used to group different svg elements, Transformations will
            also be aplied to the childs. (e.g., strole green)

Remove Element -> svg.removeChild(element);

*/
/*
EASY EDA SVG
<svg id="root" width="503" height="848" style="left:0;top:0" 
viewBox="3935.404569094175 2699.107485034744 931.4814814814814 1570.3703703703702" 
preserveAspectRatio="xMinYMin" xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:c="http://www.easyeda.com/" 
class="bw-edg">

- In easy EDA the viewbox matches the mouse position

*/
/*

SVG GRID

// Let the viewBox be 1000 1000, zoom in 500 500, zoom out 1500 1500, etc. You don't need to do anything else :).
<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
  <defs id="patterns">
  // Defines Grid size, To change the grid units, change this -> 
  // 0.001 mm => 1, width = "1", height="1", d=M1 0V5H-5   (make this not possible)
  // 0.005 mm => 5, width = "5", height="5", d="M5 0V5H-5" (make this the max)
  // 0.010 mm => 10, width = "10", heigh="10", d="M10 0V10-10"
  // 0.100 mm => 100, width = "100", heigh="100", d="M100 0V100-100"
  // 1 mm => 1000, width = "1000", heigh="1000", d="M1000 0V1000-1000"  
  // 100 mm => 100000, width = "100000", heigh="100000", d="M100000 0V100000-100000" (make this the max)  
  // 1000 mm => 1000000, width = "1000000", heigh="1000000", d="M1000000 0V1000000-1000000" (or make this the max)  
    <pattern id="gridPattern" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
      <path id="gridCell2" d="M5 0V5H-5" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.6"/>
    </pattern>
  </defs>
  // Note that when zooming in and out the x,y coordinates work to measure where to zoom in and out
  // Defines the Background color and size, in this case give ti a big size :)
  <rect id="gridBg" pointer-events="none" x="0" y="0" width="1000" height="1000" fill="#000000" stroke="none"/>
  // Defines the Area for the grid and the pattern.
  <rect id="grid1" pointer-events="none" x="0" y="0" width="1000" height="1000" fill="url(#gridPattern)" fill-opacity="0.8" stroke="none" shape-rendering="crispEdges"/>
</svg>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" viewBox="10 10 30 30" preserveAspectRatio="xMinYMin">
  <defs id="patterns">
    <pattern id="gridPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect id="gridCell" x="0" y="0" width="1.85186" height="1.85186" fill="#FFFFFF" stroke="none" fill-opacity="0.8"/>
    </pattern>
    <pattern id="gridPattern2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <path id="gridCell2" d="M10 0V10H-10" fill="none" stroke="#FFFFFF" stroke-width="1.85186" stroke-opacity="0.6"/>
    </pattern>
  </defs>
  // Area of the background
  <rect id="gridBg" pointer-events="none" x="0" y="0" width="1025.9259259259259" height="1570.3703703703702" fill="#000000" stroke="none"/>
  // In this area I will draw the pattern
  <rect id="grid1" pointer-events="none" x="0" y="0" width="100" height="100" fill="url(#gridPattern2)" fill-opacity="0.8" stroke="none" shape-rendering="crispEdges"/>
</svg>



*/
/*
TODO:
    - Find out how to zoom in and zoom out is done for the grid 
    - Add the grid to the program 
    - Add some lines and an Arduino SVG for the demo
*/