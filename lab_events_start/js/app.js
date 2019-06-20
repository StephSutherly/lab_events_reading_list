document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const handleFormSubmit = function (evt) {
    evt.preventDefault();
    console.log(evt);
    const newRecordTitle = document.createElement('h2');
    newRecordTitle.textContent = `${evt.target.title.value}`;

    const newRecordAuthor = document.createElement('h3');
    newRecordAuthor.textContent = ` ${evt.target.author.value}`;

    const newRecordCategory = document.createElement('h4');
    newRecordCategory.textContent = ` ${evt.target.category.value}`;



    const newDiv = document.createElement('div');

    const display= document.querySelector('#reading-list');
    display.appendChild(newDiv);
    newDiv.appendChild(newRecordTitle);
    newDiv.appendChild(newRecordAuthor);
    newDiv.appendChild(newRecordCategory);
    
    document.querySelector('#new-item-form').reset()
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})
