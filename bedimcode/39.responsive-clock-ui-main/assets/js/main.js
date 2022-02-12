const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
const hour = $('#clock-hour');
const minutes = $('#clock-minutes');
const second = $('#clock-second');

const textHour = $('#text-hour'),
      textMinutes = $('#text-minutes'),
      textAmPm = $('#text-ampm');
const textDay = $('#date-day'),
      textMonth = $('#date-month'),
      textYear = $('#date-year');


/*=============== SET CLOCK ===============*/

const clock = () => {
    let date = new Date();

    let hh = date.getHours() ,
        mm = date.getMinutes() ,
        ss = date.getSeconds() ,
        day = date.getDate() ,
        month = date.getMonth() ,
        year = date.getFullYear();
    let ampm;
    let monthText =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    hour.style.transform = `rotateZ(${hh * 30 + mm/2}deg)`;
    minutes.style.transform = `rotateZ(${mm * 6 + ss/10}deg)`;
    second.style.transform = `rotateZ(${ss * 6}deg)`;

    if (hh > 12){
        hh -= 12;
        ampm = 'PM';
    }
    else{
        ampm = 'AM';
    }

    if (mm < 10) mm = '0' + mm;

    textHour.textContent = hh + ':';
    textMinutes.textContent = mm;
    textAmPm.textContent = ampm;

    textDay.textContent = day ;
    textMonth.textContent = monthText[month] + ',';
    textYear.textContent = year;

}

setInterval(clock,1000);

/*=============== CHANGE THEME ===============*/
const changeTheme = $('#change-theme'),
      iconTheme = $('#theme-button'),
      THEME_KEY = 'clock-theme',
      THEME_ICON = 'bxs-sun',
      THEME_DARK = 'dark-theme',
      selectedTheme = localStorage.getItem(THEME_KEY),
      body = $('body'),
      getCurrentTheme = () => body.classList.contains(THEME_DARK) ? 'dark' : 'light';


if (selectedTheme === 'dark'){
    body.classList.add(THEME_DARK);
    iconTheme.classList.add(THEME_ICON);
}

changeTheme.onclick = function(){
    body.classList.toggle(THEME_DARK);
    iconTheme.classList.toggle(THEME_ICON);

    localStorage.setItem(THEME_KEY,getCurrentTheme());

}

