const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")

console.log("starting...")

async function call_students_api(){
    try{
        console.log("calling API")
        let response = await fetch("https://mockapi.ntig.dev/students/2000")
        let data = await response.json()

        console.log(data)
        
        l1.innerHTML += `<p> Id: ${data[1].id} </p>
                        <p> Name: ${data[1].name} </p>
                        <p> Email: ${data[1].email} </p>
                        <p> Birthdate: ${data[1].birthdate} </p>`

    } catch (error) {
        console.log("error: ",error)
    }
}

async function call_courses_api(){
    try{
        console.log("calling API")
        let response = await fetch("https://mockapi.ntig.dev/courses/3000")
        let data = await response.json()

        console.log(data)

        l2.innerHTML += `<p> ${data[0].id}:  ${data[0].name} </p>
                        <p> ${data[1].id}:  ${data[1].name} </p>
                        <p> ${data[2].id}:  ${data[2].name} </p>
                        <p> ${data[3].id}:  ${data[3].name} </p>
                        <p> ${data[4].id}:  ${data[4].name} </p>
                        `

    } catch (error) {
        console.log("error: ",error)
    }
}



call_students_api()
call_courses_api()



