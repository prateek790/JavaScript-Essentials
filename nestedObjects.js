const company = {
    name : "Prateek",
    department : {
        name : "Engineering",
        employee : {
            empId : 101,
            role : "Full Stack Developer",
            address : {
                city : "noida",
                country : "India"
            }
        }
    }
}

function extract (obj) {
for (key in obj){
    if(typeof obj[key] =="object") {
        extract(obj[key])
    }else {
    console.log(key, ":" , obj[key])
    }
}
}

extract(company);