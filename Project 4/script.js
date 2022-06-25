let arr = [
  {
    Name: "xyz zyx",
    ID: 189498,
    skills: "ReactJS, HTML",
    project: "Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 256465,
    skills: "Bootstrap",
    project: "Senior Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 389984,
    skills: "ReactJS",
    project: "Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 453657,
    skills: "reactJS",
    project: "Senior Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 556347,
    skills: "reactJS",
    project: "Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 645233,
    skills: "reactJS",
    project: "Senior Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 745345,
    skills: "reactJS",
    project: "Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 834534,
    skills: "reactJS",
    project: "Senior Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 965756,
    skills: "reactJS",
    project: "Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
  {
    Name: "xyz zyx",
    ID: 107678,
    skills: "reactJS",
    project: "Senior Associate",
    placeholder:
      "img.jpg",
    location: "Chennai",
    doj: "01/01/2022",
    experience: 12,
  },
];

//---------------------------------------------------------------------
let left = document.getElementById("left");

arr.forEach((item) => {
  let h5 = document.createElement("h5");
  h5.innerText = `Name : ${item.Name} (${item.ID})`;
  h5.id = item.ID;
  left.appendChild(h5);
});

left.addEventListener("click", (e) => {
  if (e.target.nodeName !== "H5") {
    return;
  }

  let foundData = arr.find(({ ID }) => ID === parseInt(e.target.id));
  name_div.children[0].innerText = foundData.Name;
  name_div.children[1].innerText = foundData.project;

  Array.from(document.querySelectorAll("th:first-of-type")).forEach((ele) => {
    ele.nextElementSibling.innerText = foundData[ele.id];
  });
});

// ---------------------------------------------------------------------------

let right = document.getElementById("right");
let photo_name_div = document.getElementById("photo--name-div");
let photo_div = document.getElementById("photo-div");
let name_div = document.getElementById("name-div");
let emp_details = document.getElementById("emp-details");

// --------------------------------------------------------

let h5 = document.getElementsByTagName("h5");
console.log(Array.from(h5));

let emp1 = arr[0];
console.log(emp1);

// ---------------------------------------------
let img = document.createElement("img");
img.src = emp1.placeholder;
img.style.maxWidth = "100%";
let name_title = document.createElement("h1");
let proj_title = document.createElement("p");
name_title.innerText = emp1.Name;
name_title.style.fontSize = "18px";
name_title.style.marginBottom = "30px";
proj_title.innerText = emp1.project;
proj_title.style.fontSize = "14px";
name_div.appendChild(name_title);
name_div.appendChild(proj_title);
photo_div.appendChild(img);
