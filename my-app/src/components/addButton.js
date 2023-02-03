

const addButton = () => {
    const button = document.createElement('button');
    button.innerHTML = 'Add';
    button.onclick = () => {
      const item = document.createElement('li');
      item.innerHTML = 'New to-do item';
      document.getElementById('to-do-list').appendChild(item);
    };
    document.body.appendChild(button);
  };
export default addButton