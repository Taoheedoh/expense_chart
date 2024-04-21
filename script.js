//let days = document.querySelector('#days')
//let amounts = document.querySelector('#amounts')

let barContainer = document.querySelector('#days_')
console.log(barContainer)

let handleData = () => {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // Create a container to accumulate the HTML content
            //let daysHTML = ''
            //let amountsHTML = ''

            // Loop through each user object in the data array
            data.forEach(user => {
                console.log(user.day)
                console.log(user.amount)

                let days = document.createElement('div')
                    days.textContent = user.day

                let bar = document.createElement('div')
                let barheight = user.amount * 3
                days.classList.add('days')
                //days.style.marginLeft = '-2%'

                bar.classList.add('bar')
                user.day[3]

                bar.style.height = barheight + "px"

                
                barContainer.appendChild(bar)
                barContainer.appendChild(days)
                // Append the day and amount to the HTML content
                //daysHTML += `<div>${user.day}</div>`
                //amountsHTML += `<div>${user.amount}</div>`
            })

            // Set the accumulated HTML content to the elements
            //days.innerHTML = daysHTML
            //amounts.innerHTML = amountsHTML
            

            

        })


}
handleData()




// const days = document.querySelector("#days_")

// fetch('./data.json')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(post => {
//             //days.insertAdjacentHTML('beforeend', '<p>mon</p>')
//             days.insertAdjacentHTML('beforeend','<p>mon</p>')


//         })
//     })
