// Would generally want a more specific selector, but the only <h2>s in this code are the accordion headings
const sectionHeadings = document.querySelectorAll('h2');

/**
 * Event handler for accordion heading. When heading is clicked:
 * 1. Toggle the "aria-expanded" attribute of the <button> within heading;
 * 2. Toggle the corresponding section's "hidden" attribute;
 * 3. Close all other accordion sections.
 *
 * @param {number} idx - The index of the accordion heading being clicked.
 */
function onHeadingClick(clickedIdx) {
  sectionHeadings.forEach((heading, idx) => {
    const btn = heading.querySelector('button');
    const section = heading.nextElementSibling;
    // 1 and 2
    if (idx === clickedIdx) {
      // 1
      let expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      // 2
      // Should be opposite of btn's "aria-expanded" attribute
      section.hidden = expanded;
    }
    // 3
    else {
      btn.setAttribute('aria-expanded', false);
      section.hidden = true;
    }
  });
}

// Add event listener to each section heading
sectionHeadings.forEach((heading, idx) => {
  heading.addEventListener('click', () => {
    onHeadingClick(idx);
  });
});