"use strict"
if (HTMLElement.prototype.sCalender == undefined){
    HTMLElement.prototype.sCalender = function(options){
        let today = new Date();

        let defautOptions = {
            month: today.getMonth() + 1,
            year: today.getFullYear()
        }

        options = Object.assign(defautOptions,options)

        const $ = this.querySelector.bind(this);
        const $$ = this.querySelectorAll.bind(this);

        let currentMonth, currentYear , currentDate;

        const monthName = [ 'January' ,'February','March','April','May','June','July','August','September','October','November','December' ];

        const lastDateOfMonth = (month,year) => {return new Date(year,month,0)};


        function createListDate(month,year){
            let monthIndex = month - 1;
            let lastDayPreMonth = lastDateOfMonth(monthIndex, year).getDate();
            let lastDateCurrentMonth = lastDateOfMonth(monthIndex+1, year);
            let [lastDate, lastDay] = [lastDateCurrentMonth.getDate(),lastDateCurrentMonth.getDay()];
            
            let firstDay = new Date(year,monthIndex,1).getDay();

            if (firstDay === 0 ) firstDay = 7;

            let listDate = [];

            for (let i= (firstDay - 1); i > 0 ;i--){
                listDate.push(lastDayPreMonth - i + 1);
            }

            for (let i = 1; i <= lastDate;i++){
                listDate.push(i);
            }

            lastDay = (lastDay === 0) ? 7 : lastDay; 

            let i = lastDay;
            let j = null ;
            while (listDate.length < 42){
                j =  (j == null) ? 7 : (i + 7);
                for( i; i < j; i++ )
                    listDate.push( i - lastDay + 1);

            }

            return listDate;
        }

        function CreateHtmlCalender(month,year){
            let listDate = createListDate(month,year);
            let cMonth = 0;
            let currentMonthClass = ' pre-month'
            let render = listDate.map( (e,i) => {

                if (e === 1) cMonth++;

                if (cMonth === 1 ) 
                {
                    currentMonthClass = '';
                    if (e === 1)
                    return `<div class="calender__date-name${currentMonthClass}" id="day${i%7}"><span>${e} ${monthName[currentMonth - 1]}</span></div>`
                }
                else if (cMonth === 2 ) 
                    currentMonthClass = ' next-month';
                return `<div class="calender__date-name${currentMonthClass}" id="day${i%7}"><span>${e}</span></div>`
            })
            return render.join('');
        }

        function renderCalender(month,year){
            [month,year] = checkMonthYear(month,year);
            currentMonth = month;
            currentYear = year;
            const monthNameEl = $('.nav__panel-month');
            const yearEl = $('.nav__panel-year');
            monthNameEl.textContent = monthName[month - 1];
            yearEl.textContent = year;
            $('.calender__date').innerHTML = CreateHtmlCalender(month,year);

        }

        function checkMonthYear(month,year){
            if (month <= 0){
                month += 12;
                year -= 1;
            }
            else if (month > 12){
                month -= 12;
                year += 1;
            }
            return [month,year];
        }

        function eventHandle(){
            const nextMonthEl = $('.next-month-button'),
                  preMonthEl  = $('.pre-month-button');
            const monthNameEl = $('.nav__panel-month');

            nextMonthEl.addEventListener('click',function(){
                changeMonth(currentMonth + 1,currentYear);
            });

            preMonthEl.addEventListener('click',function(){
                changeMonth(currentMonth - 1,currentYear);
            });

            monthNameEl.addEventListener('click',function(){
                
                changeMonth(today.getMonth() + 1,today.getFullYear());
            })
        }



        function changeMonth(month,year){
            renderCalender(month,year);
        }


        eventHandle();
        renderCalender(options.month,options.year);
        
    }
}