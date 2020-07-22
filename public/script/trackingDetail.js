(() => {
    const openModal = () => {
        $('#open-modal').on('click', () => {
            $('#message-modal').modal({
                escapeClose: false,
                clickClose: false,
                showClose: false
            });
        })
    }

    const onButtonClicked = () => {
        $('#will-deliver').on('click', () => {
            $('#delivered-done').removeClass('active');
            $('#will-deliver').addClass('active');
            $('.right-block-right-box').hide();
            $('.right-block-left-box').slideDown(500);
        });
        $('#delivered-done').on('click', () => {
            $('#will-deliver').removeClass('active');
            $('#delivered-done').addClass('active');
            $('.right-block-left-box').hide();
            $('.right-block-right-box').slideDown(500);
        });
    }

    const run = () => {
        $('.right-block-right-box').hide();

        onButtonClicked();
        openModal();
    }
    run();
})();