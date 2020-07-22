(() => {
    const displayDate = () => {
        const now = new Date();
        let hours = now.getHours();
        let mins = now.getMinutes();
        let secs = now.getSeconds();
        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;
        document.getElementById('title-date-time').innerHTML = `${hours}:${mins}:${secs} น.`;
        setInterval(displayDate, 500);
    }

    const run = () => {
        displayDate();
    }
    run();
})();