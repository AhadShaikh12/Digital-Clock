function updateClock() {
    const now = new Date();
    
    // Time elements
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Date elements
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
                   'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dateNum = now.getDate();
    
    document.getElementById('date').textContent = `${dayName}, ${monthName} ${dateNum}`;
}

// Initialize and update every second
updateClock();
setInterval(updateClock, 1000);
