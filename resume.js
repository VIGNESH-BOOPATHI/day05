const resume ={
    "Name": "Vignesh Boopathi",
    "Contact": {
      "Email": "vigneshboopathi2002@gmail.com",
      "Phone": "+91 6381012767",
      "Address": "No.323, 1st street, B.V.Colony, Vyasarpadi, Chennai-600039"
    },
    "Summary": "Experienced software engineer with a focus on web development.",
    "Education": [
      {
        "degree": "Bachelor of Engineer in Electronic and Commnucation Engineering",
        "college": "Vel Tech Multi Tech, Avadi",
        "graduationYear": 2023
      }
    ],
    "Experience": "NuN",
    "Skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Git","Java"
    ]
  }
  for (let key in resume) {
    console.log(`${key}:`);
    if(key=="Skills"){
        var arr =resume[key];
        
        for(i=0;i<resume[key].length;i++){
            console.log(arr[i])
        }
    }else if (Array.isArray(resume[key])) {
      // Handle arrays (like education, experience, skills)
      resume[key].forEach(item => {
        for (let itemKey in item) {
          console.log(`  ${itemKey}: ${item[itemKey]}`);
        }
        console.log("---");
      });
    }else  if (typeof resume[key] === "object") {
      // Handle nested objects (like contact, education, experience)
      for (let nestedKey in resume[key]) {
        console.log(`  ${nestedKey}: ${resume[key][nestedKey]}`);
      }
    } else {
      console.log(`  ${resume[key]}`);
    }
  
    console.log("---");
  }
//OUTPUT
//   Name:
//   Vignesh Boopathi
// ---
// Contact:
//   Email: vigneshboopathi2002@gmail.com
//   Phone: +91 6381012767
//   Address: No.323, 1st street, B.V.Colony, Vyasarpadi, Chennai-600039
// ---
// Summary:
//   Experienced software engineer with a focus on web development.
// ---
// Education:
//   degree: Bachelor of Engineer in Electronic and Commnucation Engineering
//   college: Vel Tech Multi Tech, Avadi
//   graduationYear: 2023
// ---
// ---
// Experience:
//   NuN
// ---
// Skills:
// JavaScript
// React
// Node.js
// HTML
// CSS
// Git
// Java
// ---