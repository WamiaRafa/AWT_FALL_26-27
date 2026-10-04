function getStudentData(){
  return new Promise((resolve, reject) => {
    console.log("Promise Started...");
    resolve(
      {
        id: 23-54301-3,
        name: "Rafa",
        dept: "CSE",
        cgpa: 3.78
      }
    );
  });
}

async function displayStudent(){
  console.log("Getting Started....");
  try{
    const student = await getStudentData();
    console.log("Stundent Data Received");
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Department:", student.dept);
    console.log("CGPA:", student.cgpa);
  }
  catch(error){
    cosole.log(error);
  }
}

displayStudent();