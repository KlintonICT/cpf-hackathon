(() => {
    const onButtonClicked = () => {
        $('#order-list-btn').on('click', () => {
            $('#map-btn').removeClass('active');
            $('#order-list-btn').addClass('active');
            $('#map-cluster').hide();
            $('#list-of-order').slideDown(500);
        });
        $('#map-btn').on('click', () => {
            $('#order-list-btn').removeClass('active');
            $('#map-btn').addClass('active');
            $('#list-of-order').hide();
            $('#map-cluster').show();
        });
    }

    const run = () => {
        $('#list-of-order').hide();

        onButtonClicked();
    }
    run();
})();