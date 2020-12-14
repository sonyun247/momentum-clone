const time = document.querySelector(".js-xmas__countdown");

const countdown = () => {
    const xmasDay = new Date("2020-12-24:00:00:00+0900"); //UTC "+0900 not working"
    let now = Date.now(); //UTC
    let remain = xmasDay - now;

    if (remain >= 0) {
        let days = Math.floor(remain / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remain % (1000 * 60)) / 1000);

        time.innerText = `${days < 10 ? `0${days}` : days}days 
    ${hours < 10 ? `0${hours}` : hours}hrs 
    ${minutes < 10 ? `0${minutes}` : minutes}mins 
    ${seconds < 10 ? `0${seconds}` : seconds}secs`;
    } else {
        time.innerText = `Happy Holidays! 🎄`;
    }
}

const initXmas = () => setInterval(countdown, 1000);

initXmas();
