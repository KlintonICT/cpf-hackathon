(() => {
    const displayDateRange = () => {
        const now = new Date();
        const startDate = (now.getMonth()) + '/' + now.getDate() + '/' + now.getFullYear();
        const endDate = (now.getMonth()+1) + '/' + now.getDate() + '/' + now.getFullYear();
        $('#daterange').val(startDate + ' - ' + endDate);
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
        }, function(start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
    }

    const run = () => {
        displayDateRange();
    }
    run();
})();