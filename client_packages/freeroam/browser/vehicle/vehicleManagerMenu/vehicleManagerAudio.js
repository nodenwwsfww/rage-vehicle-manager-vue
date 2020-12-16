$(function() {

    $(document).mouseup(function (e) {
        const container = $('.main');

        if (!container.is(e.target)
          && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });

});

const btnSubmit = document.querySelector('.formBtnSubmit');
const inputField = document.querySelector('#music-input');

btnSubmit.addEventListener('click', event => {
    event.preventDefault();
    const {target} = event;

    if (target.closest('.formBtnSubmit') && inputField.value.length > 0) {
        mp.trigger('vehicleManager_audioLinkInputHandler', inputField.value);
    }

    inputField.value = '';
});

