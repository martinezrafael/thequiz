fetch('../json/questions.json')
.then(r => r.json())
.then(json => {
    json.forEach(question => {
        console.log(question)
    })
})
