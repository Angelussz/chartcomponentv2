
fetch('./data.json')
    .then(res => res.ok ? Promise.resolve(res) : Promise .reject(res))
    .then(res => res.json())
    .then(res => {
        const days = document.getElementById('chartbars');
        const fragment = document.createDocumentFragment();
        for (const dayInfo of res){
            const day = document.createElement('Div')
            day.classList.add('chart__bar')
            const daybar = document.createElement
            ('Div')
            const dayday = document.createElement
            ('Div')
            daybar.textContent = dayInfo.amount
            dayday.textContent = dayInfo.day

            daybar.classList.add('chart__bar--label')
            dayday.classList.add('chart__bar--day')
            daybar.style.display = 'none'
            if (dayInfo.amount >= 50) {
                day.classList.add("chart__bar--blue")
                day.style.height = `${dayInfo.amount * 2}px`

            } else {
                day.classList.add("chart__bar--red")
                day.style.height = `${dayInfo.amount * 2}px`
            }
            day.addEventListener("mouseover",(e)=>{
                daybar.style.display = 'block'
            })
            day.addEventListener("mouseout",(e)=>{
                daybar.style.display = 'none'
            })

            day.appendChild(daybar)
            
            day.appendChild(dayday)
            fragment.appendChild(day)
        }
        days.appendChild(fragment)
    })