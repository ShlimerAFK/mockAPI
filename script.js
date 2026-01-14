const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")

console.log("starting...")

async function call_students_api(){
    try{
        console.log("calling API")
        let response = await fetch("mockapi.ntig.dev/students/2000")
        let data = await response.json()

        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

call_students_api()
