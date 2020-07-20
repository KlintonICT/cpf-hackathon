(() => {
    const test = () => {
        $.getJSON('../data/test.json', data => {
            console.log(data)
            data.person.forEach(item => {
                console.log('Test', item);
            })
        })
    }

    const displayDate = () => {
        const now = new Date();
        const thaiMonth = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
        let hours = now.getHours();
        let mins = now.getMinutes();
        let secs = now.getSeconds();
        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;
        document.getElementById('title-date-time').innerHTML = `${hours}:${mins}:${secs} น.`;
        document.getElementById('title-date').innerHTML = `${now.getDate()} ${thaiMonth[now.getMonth()]} ${0+now.getFullYear()+543}`;
        setInterval(displayDate, 500);
    }

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
        displayDate();
        test();
    }
    run();
})();