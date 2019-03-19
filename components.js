var components = function () {
    var Popup = function () {
        this.parentNode = document.body;
    };

    Popup.prototype.show = function () {
        this.parentNode.appendChild(this.DOMnode);
    };

    Popup.prototype.hide = function () {
        this.parentNode.removeChild(this.DOMnode);
    };

    var ModalWindow = function (title, content, onSubmitClick, onCancelClick) {
        Popup.call(this)
        var modalWindow = document.createElement('div');
        var innerContent = document.createElement('article');
        var modalTitle = title;
        var modalContent = content;
        var closeButton = document.createElement('button');
        var buttonsContainer = document.createElement('div');
        var submitButton = document.createElement('button');
        var cancelButton = document.createElement('button');
        var hideHandler = function (e) {
            if (e.target !== modalTitle && e.target !== modalContent && e.target !== innerContent) {
                this.hide()
            }
        };

        closeButton.classList.add('modal-window__close-btn');
        submitButton.innerText = 'Submit';
        cancelButton.innerText = 'Cancel';

        modalTitle.classList.add('modal-window__title');

        modalContent.classList.add('modal-window__content');

        cancelButton.onclick = onCancelClick;
        submitButton.onclick = onSubmitClick;

        buttonsContainer.classList.add('modal-window__action-buttons-container');
        buttonsContainer.appendChild(cancelButton);
        buttonsContainer.appendChild(submitButton);

        innerContent.classList.add('modal-window__inner-content');
        innerContent.appendChild(closeButton);
        innerContent.appendChild(buttonsContainer);
        innerContent.insertBefore(modalContent, closeButton);
        innerContent.insertBefore(modalTitle, modalContent);

        modalWindow.classList.add('modal-window');
        modalWindow.appendChild(innerContent);
        modalWindow.addEventListener('click', hideHandler.bind(this));

        this.DOMnode = modalWindow;
    };

    ModalWindow.prototype = Object.create(Popup.prototype);

    return {
        ModalWindow: ModalWindow,
    }
}();

module.exports = components;
