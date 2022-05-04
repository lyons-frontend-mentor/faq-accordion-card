// Would generally want a more specific selector, but the only <h2>s in this code are the accordion headings
const sectionHeadings = document.querySelectorAll('h2');

/**
 * Opens a section, performing necessary attribute and style changes.
 * 
 * @param {HTMLHeadingElement} heading 
 * @param {HTMLButtonElement} btn 
 * @param {HTMLImageElement} icon 
 * @param {Element} section 
 */
function openSection(heading, btn, icon, section) {
  // Section now expanded
  btn.setAttribute('aria-expanded', true);

  // icon points up
  icon.classList.add('rotate-180');

  // Style heading text
  heading.classList.add('text-activehtext');
  heading.classList.remove('text-inactivehtext');
  // btn font weight not inherited, so need to style it directly
  btn.classList.add('font-bold');

  // Reveal section
  section.hidden = false;
}

/**
 * Closes a section, performing necessary attribute and style changes.
 * 
 * @param {HTMLHeadingElement} heading 
 * @param {HTMLButtonElement} btn 
 * @param {HTMLImageElement} icon 
 * @param {Element} section 
 */
function closeSection(heading, btn, icon, section) {
  // Section no longer expanded
  btn.setAttribute('aria-expanded', false);
  section.hidden = true;

  // icon points down
  icon.classList.remove('rotate-180');

  // Style heading text
  heading.classList.add('text-inactivehtext')
  heading.classList.remove('text-activehtext');
  // btn font weight not inherited, so need to style it directly
  btn.classList.remove('font-bold');

  // Hide section
  section.hidden = true;
}

/**
 * Event handler for accordion heading. When a heading is clicked, toggle it, and close any other open sections.
 *
 * @param {number} idx - The index of the accordion heading being clicked.
 */
function onHeadingClick(clickedIdx) {
  sectionHeadings.forEach((heading, idx) => {
    const btn = heading.querySelector('button');
    const icon = heading.querySelector('img');
    const section = heading.nextElementSibling;

    // Clicked section
    if (idx === clickedIdx) {
      // If section is currently expanded, close it
      if (btn.getAttribute('aria-expanded') === 'true') {
        closeSection(heading, btn, icon, section);
      }
      // Otherwise, open it
      else {
        openSection(heading, btn, icon, section);
      }
    }
    // Section that wasn't clicked
    else {
      closeSection(heading, btn, icon, section);
    }
  });
}

// Add event listener to each section heading
sectionHeadings.forEach((heading, idx) => {
  heading.addEventListener('click', () => {
    onHeadingClick(idx);
  });
});