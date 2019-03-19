const onSubmitClick = () => { console.log('done') }
const onCancelClick = () => { /* do something */}

var modTitile = document.createElement('h2');
modTitile.innerText = 'Modal Title';

var modContent = document.createElement('p');
var modContentChild = document.createElement('div');
modContentChild.appendChild(document.createTextNode('hey hey here is the text'))
modContent.appendChild(modContentChild);

var modal1 = new components.ModalWindow(modTitile, modContent, onSubmitClick, onCancelClick);

var showModalButton = document.querySelector('.show-modal-btn');
showModalButton.addEventListener('click', function () {
    modal1.show();
});

