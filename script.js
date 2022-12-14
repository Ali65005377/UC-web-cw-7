/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");
/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */


/*  الجزء الأول والثاني من التمرين */



grades.pop();

grades.push(99);



for (let i = 0; grades.length > i; i++) {
  all_grades_div.innerHTML += grades[i] + " ";
}

let randomindex = Math.floor(Math.random() * grades.length);

random_grade_div.innerHTML = grades[randomindex];


/* الجزء الثالث من التمرين */

let course = {
  name: "UniCODE",
  track: "",
  studentsCount: 0,
  location: "Kuwait University"
}


//Change studentsCount,track property here
course.studentsCount = 40;
course.track = "web";


//Console log here

console.log(`Hello my name is ali, I'm in ${course.track} at ${course.name}`);

//Create student object here

let student = {
  name: "ali",
  university: "AUK"
}

let unicodes = [
  {
    track: "game",
    location: "Kuwait University"
  },
  {
    track: "python",
    location: "AUM"
  },
  {
    track: "cyber",
    location: "GUST"
  }
];


unicodes.forEach(element => {

  console.log(unicodes[0].track);
  console.log(unicodes[1].track);
  console.log(unicodes[2].track);

});