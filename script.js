/*const toggles= document.querySelectorAll('.toggle')
//get all items
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')*/

// Select checkboxes
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

// Function to check the number of checked boxes
function checkLimit(event) {
    const checkboxes = [good, cheap, fast];
    let checkedCount = 0;
  
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });
  
    if (checkedCount > 2) {
      event.preventDefault();
    }
  }

  // Add an event handler to each checkbox

good.addEventListener('change', checkLimit);
cheap.addEventListener('change', checkLimit);
fast.addEventListener('change', checkLimit);