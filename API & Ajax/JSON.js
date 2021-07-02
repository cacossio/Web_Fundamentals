// Write a function called userLanguages that accepts an array of users, such as the one shown above. Return a string that lists all the users by first name and last name and the languages that each user knows. Make the string as nicely formatted as possible so that it is easy to read.
// /* Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL. Winnie the Pooh knows Python, Swift, and Java. Arthur Dent knows JavaScript, HTML, and Go. */
 
var users = [
        {
            fname: "Kermit",
            lname: "the Frog",
            languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
            interests: 
            {
                music: ["guitar", "flute"],
                dance: ["tap", "salsa"],
                television: ["Black Mirror", "Stranger Things"]
             }
        },
        {
            fname: "Winnie",
            lname: "the Pooh",
            languages: ["Python", "Swift", "Java"],
            interests:
            {
                food: ["honey", "honeycomb"],
                flowers: ["honeysuckle"],
                mysteries: ["Heffalumps"]
            }
        },
        {
            fname: "Arthur",
            lname: "Dent",
            languages: ["JavaScript", "HTML", "Go"],
            interests:
            {
                space: ["stars", "planets", "improbability"],
                home: ["tea", "yellow bulldozers"]
            }
        }
    ]

  function userLanguages(arrayusers){
      for(var i=0; i < arrayusers.length; i++){
          console.log(arrayusers[i].fname + " " + arrayusers[i].lname + " knows " + arrayusers[i].languages + " " + arrayusers[i].fname + " also likes" + arrayusers[i].interests.music + arrayusers[i].interests.dance + arrayusers[i].interests.television + arrayusers[i].interests.food + arrayusers[i].interests.flowers + arrayusers[i].interests.mysteries + arrayusers[i].interests.space + arrayusers[i].interests.home);
      }
  }
   
userLanguages(users)






















