const calendarButton = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');

const calendarDays = 24;

const  createCalendar = () => {
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement('div');
        const calendarDoorText = document.createElement('div');

        calendarDoor.classList.add('image');
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);
    }
};

calendarButton.addEventListener('click', createCalendar);