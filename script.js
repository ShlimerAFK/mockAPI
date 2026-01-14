const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")


async function call_students_api(){
    try{
        let response = await fetch("mockapi.ntig.dev/students/2000")
        let data = await response.jason

        console.log(data)

    } catch (error) {
        console.log("error: ",error)
    }
}

