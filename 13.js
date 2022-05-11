function dateElements(date) {
let date = new Date();
let season;
let month = +date.getMonth() + 1;
if (month === 12 || month <=2) {
    season = 'Winter';
} else if (month > 2 && month <= 5){
    season = 'Spring';
} else if (month > 6 || month <= 9) {
    season = 'Summer';
} else {
    season = 'Autumn';
}
let dayOfYear = (month - 1)*30 + date.getDate();
return `Month: ${month} \n Season: ${season} \n Day of the year: ${dayOfYear}`
}