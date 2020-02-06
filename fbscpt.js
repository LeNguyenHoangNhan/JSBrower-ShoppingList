let database = [
  {
    username: "lesusu",
    password: "ExtremelyHardToCrackPassword123"
  }
];

let newsfeed = [
  { username: "lesusu", timeline: "JS is cool" },
  { username: "roboto", timeline: "We should learn JS" },
  { username: "catarell", timeline: "Weeee! JS Object" }
];

let checkUser = () => {
  let userNamePrompt = prompt("Please enter your user name");
  let passwrodPrompt = prompt("Now what is your password");
  signIn(userNamePrompt, passwrodPrompt);
};

let signIn = (user, pass) => {
  if (
    database.filter(e =>
      user === e.username && pass === e.password ? true : false
    ).length
  ) {
    console.log("Logged in");
    console.log(newsfeed);
  } else {
    alert("Wrong pass or user");
  }
};

checkUser();
