1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll:
getElementById("id") = returns a single element by its ID.
getElementsByClassName("class") = returns elements with that class.
querySelector("selector") = returns the first element matching a CSS selector.
querySelectorAll("selector") = returns a static NodeList of all matching elements.

2. let div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);  // insert into DOM

3. An event starts from the target element and bubbles up through its ancestors child → parent.
4. Attach an event listener to a parent element instead of multiple children, and handle events based on event.target. It is useful for performance and handling dynamically added elements.
   
5. Difference between preventDefault() and stopPropagation():
preventDefault() = prevents the default browser action.
stopPropagation() = stops the event from bubbling up.
