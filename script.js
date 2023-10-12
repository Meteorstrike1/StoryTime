/* The story pages
---------------------
The story pages are a list of objects. Each page has an identifier, the story text, and a list of options.
The options are a list of nested objects, containing the option text, and a target page for that option.
Originally I used a list index to navigate between pages of the story but I didn't want it to be linear so wanted to try it this way.
---------------------
*/
const pages = [
    {
      identifier: "0001",
      story: `<h1>Welcome to StoryTime!</h1>
      <p>Are you sitting comfortably?... <em>Good</em>, then let's begin.</p>`,
      options: [
        {
          id: "0",
          displayText: "Start",
          isProgressOption: true,
          targetPage: "0002"
        }
      ]
    },
    {
      identifier: "0002",
      story: `<p>It was a dark and stormy night... The rain was falling heavily and the howling wind dampened only by the trees. You stumble through the forest, clothes soaked through, and shivering in the bitter cold.</p>
      <p>As you make your way you spot a light in the distance. Determined to find proper shelter you quicken your pace. Soon you emerge from the forest, standing in front of a large old house.</p>`,
      options: [
        {
          id: "1",
          displayText: "Go on...",
          isProgressOption: true,
          targetPage: "0003"
        }
      ]
    },
    {
      identifier: "0003",
      story: `<p>The gate is open, you walk up to the front door. There is light coming from the upstairs windows but downstairs looks dark. You spot the heavy knocker and use it to bang on the door a few times, calling for help. <em>Silence</em>.</p><p>What do you do next?</p><br>`,
      options: [
        {
          id: "2",
          displayText: "Try to go inside",
          isProgressOption: true,
          targetPage: "0004"
        },
        {
          id: "3",
          displayText: "Have a look around",
          isProgressOption: true,
          targetPage: "0005"
        },
        {
          id: "4",
          displayText: "Keep knocking and shout louder",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0003"
        }
      ]
    },
    {
      identifier: "0004",
      story: `<p>The door is <strong>unlocked</strong>. You step into a large entrance hall. It is very dimly lit apart from a faint glow from upstairs. You look around for something that may help.</p><br>`,
      options: [
        {
          id: "5",
          displayText: "Have a look at the table",
          isProgressOption: true,
          targetPage: "0007"
        },
        {
          id: "6",
          displayText: "Go over to the stairs",
          isProgressOption: true,
          targetPage: "0008"
        },
        {
          id: "7",
          displayText: "Have a look at the suit of armour",
          isProgressOption: true,
          targetPage: "0009"
        }
        ],
    },
    {
      identifier: "0005",
      story: `<p>You have a look around outside. The downstairs windows seem to be all boarded up and you don't see any other obvious entrances. The rain is still falling heavily and stings your eyes, but you do notice a shed in the corner.</p><p>What do you do next?</p><br>`, 
      options: 
      [
        {
          id: "8",
          displayText: "Go over to the shed",
          isProgressOption: true,
          targetPage: "0010"
        },
        {
          id: "9",
          displayText: "Actually, let's try going inside",
          isProgressOption: true,
          targetPage: "0004"
        },
        {
          id: "10",
          displayText: "Ooh is that a shiny object on the ground?",
          isProgressOption: true,
          targetPage: "0011"
        }
        ],
    },
    {
      identifier: "0006", // The game over page
      story: `<h1>Game over!</h1><p>Uh oh it looks like the monster got you... Would you like to try again?</p><p><small>(Sorry on CodePen you need to refresh your browser to reset).</small></p>`, // Put the codepen apology here instead
      options: [
        {
          id: "11",
          displayText: "Try again? (Sorry on CodePen you need to refresh the page)", // Would make an exit option too in future, not using the options but keeping in case, had trouble setting specific page/and getting option to display properly and didn't have enough/knowledge time to solve
          isProgressOption: true,
          targetPage: "0001"
        },
      ]
    },
    {
      identifier: "0007",
      story: `<p>You spot a torch on the table and instinctively pick it up to see if it works. It flickers for a moment but then <em>success</em>! Now you can make out the room better...</p><p>You notice a tripwire on the stairs, and that the suit of armour looks like it could topple over at any moment. What do you do next?</p><br>`,
      options: [
        {
          id: "12",
          displayText: "Carefully walk over to the stairs and disable the tripwire",
          isProgressOption: true,
          targetPage: "0012",
        },
        {
          id: "13", // Not sure whether to give duplicate options the same ID or not but since they are slightly different scenarios thought be safe and keep them all unique
          displayText: "Have a look at the suit of armour",
          isProgressOption: true,
          targetPage: "0015", // Need to give it a different page because have the torch now, would be better to set some conditions as true and vary the outcome in if statements but was having trouble getting it to work
        }
      ]
    },
    {
      identifier: "0008",
      story: `<p>You walk over to the stairs, the floorboards creaking with each step. How do you proceed?</p><br>`,
      options: [
        {
          id: "14",
          displayText: "Go up the stairs",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0013" // Accidental 13 steps reference
        },
        {
          id: "15",
          displayText: "Actually, let's check out the table",
          isProgressOption: true,
          targetPage: "0007"
        },
        {
          id: "16",
          displayText: "Actually, let's have a look at the suit of armour",
          isProgressOption: true,
          targetPage: "0009"
        }
      ]
    },
    {
      identifier: "0009",
      story: `<p>You stand before a suit of armour. It is covered in dust and cobwebs, clutching a halberd at its side. What do you do next?</p><br>`,
      options: [
        {
          id: "17",
          displayText: "Poke it",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0014"
        },
        {
          id: "18",
          displayText: "Okay that looks cool but let's leave it alone and go to the stairs",
          isProgressOption: true,
          targetPage: "0008"
        },
        {
          id: "19",
          displayText: "Okay that looks cool but let's leave it alone and go check out the table",
          isProgressOption: true,
          targetPage: "0007"
        }
      ]
    },
    {
      identifier: "0010",
      story: `<p>You approach the shed; you can see that the door is ajar. What do you do next?</p><br>`,
      options: [
        {
          id: "20",
          displayText: "Go inside the shed",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0016"
        },
        {
          id: "21",
          displayText: "Actually, let's try to go inside the house",
          isProgressOption: true,
          targetPage: "0004"
        },
        {
          id: "22",
          displayText: "Wait, wasn't there a shiny object on the ground by the house?",
          isProgressOption: true,
          targetPage: "0011"
        }
      ]
    },
    {
      identifier: "0011",
      story: `<p>You have a look the shiny object on the ground. On closer inspection it looks like a golden claw. It has an engraving of a bear, a moth, and an owl, in that exact order. <em>Curious</em>. You pick it up and put it in your pocket. What next?</p><br>`, // Skyrim reference. Would have ideally set this as a special item
      options: [
        {
          id: "23",
          displayText: "Let's try to go inside the house, life is complete with a shiny claw",
          isProgressOption: true,
          targetPage: "0004"
        }
      ]
    },
    {
      identifier: "0012",
      story: `<p>That tripwire disabling class you took has paid off. The stairs now look safe to ascend...</p><br>`,
      options: [
        {
          id: "24",
          displayText: "Fine, let's go up the stairs",
          isProgressOption: true,
          targetPage: "0017"
        }
      ]
    },
    {
      identifier: "0013",
      story: `<p><strong>Ouch!</strong> As you try to walk up the stairs you trip over something and land at the bottom of the stairs with a large thud. It is hard to make out what happened but whatever trap that was has been snapped now and won't happen again. What do you do next?</p><br>`,
      options: [
        {
          id: "25",
          displayText: "Get up, shake yourself off, and stumble up the stairs",
          isProgressOption: true,
          targetPage: "0017"
        }
      ]
    },
    {
      identifier: "0014",
      story: `<p><em>*Crash*</em>. The suit of armour comes tumbling down onto you with a heart stopping racket. The halberd narrowly misses you and plants into the floorboards. You manage to get up relatively unhurt but you are thoroughly unamused by this event.</p><br>`,
      options: [
        {
          id: "26",
          displayText: "Try to go up the stairs",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0013"
        },
        {
          id: "27",
          displayText: "Actually, let's check out that table",
          isProgressOption: true,
          targetPage: "0018"
        }
      ]
    },
    {
      identifier: "0015",
      story: `<p>You stand before a suit of armour. It is covered in dust and cobwebs, clutching a halberd at its side. In the torchlight you can see very clearly how unsteady it is. What do you do next?</p><br>`,
      options: [
        {
          id: "28",
          displayText: "Poke it",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0019"
        },
        {
          id: "29",
          displayText: "Okay that looks cool but let's go disable the tripwire on the stairs",
          isProgressOption: true,
          targetPage: "0012"
        }
      ]
    },
    {
      identifier: "0016",
      story: `<p>As you walk into the shed you step onto a rake, knocking garden tools everywhere, and receive a large whack to your head. The shed looks full of junk and unstable. What do you do next?</p><br>`,
      options: [
        {
          id: "30",
          displayText: "Carefully get up and try to go inside the house",
          isProgressOption: true,
          targetPage: "0004"
        },
        {
          id: "31",
          displayText: "Check out the shiny object on the ground by the house",
          isProgressOption: true,
          targetPage: "0011"
        }
      ]
    },
    {
      identifier: "0017",
      story: `<p>You walk up the stairs. There is a light coming from one of the rooms. You feel compelled to check it out.</p><br>`,
      options: [
        {
          id: "32",
          displayText: "Go up to the lit room",
          isProgressOption: true,
          targetPage: "0020"
        }
      ]
    },
    {
      identifier: "0018",
      story: `<p>You spot a torch on the table and think how useful it would have been if you picked it up earlier. It flickers for a moment but then <em>success</em>! Now you can make out the room better...</p><p>You notice a tripwire on the stairs, the suit of armour lying all over the floor, and a halberd stuck in the floorboards. What do you do next?</p><br>`,
      options: [
        {
          id: "33",
          displayText: "Carefully walk over to the stairs and disable the tripwire",
          isProgressOption: true,
          targetPage: "0012",
        }
      ]
    },
    {
      identifier: "0019",
      story: `<p><em>*Crash*</em>. The suit of armour comes tumbling down onto you with a heart stopping racket. The halberd narrowly misses you and plants into the floorboards. You <em>knew</em> this would happen and yet you did anyway... What do you do now?</p><br>`,
      options: [
        {
          id: "34",
          displayText: "Try to redeem yourself by disabling the tripwire on the stairs",
          isProgressOption: true,
          targetPage: "0012"
        }
      ]
    },
    {
      identifier: "0020",
      story: `<p>You walk into the lit room. There are paintings of cats hanging on the walls, an old rocking chair in the corner, and a curious looking puzzle box on a table. What do you do next?</p><br>`,
      options: [
        {
          id: "35",
          displayText: "Have a look at the painting of Sir Fluffington",
          isProgressOption: true,
          targetPage: "0021"
        },
        {
          id: "36",
          displayText: "Sit on the rocking chair",
          isProgressOption: true,
          targetPage: "0022"
        },
        {
          id: "37",
          displayText: "Go over to the puzzle box",
          isProgressOption: true,
          targetPage: "0023"
        }
      ]
    },
    {
      identifier: "0021",
      story: `<p>One of the cat paintings catches your eye. It is the famous Maine Coone known as Sir Fluffington. On closer inspection of the painting you see a note in the corner...</p><p>It says <em>"To my biggest fan George, lots of love from your furry friend Sir Fluffington"</em>. What do you do next?</p><br>`,
      options: [
        {
          id: "38",
          displayText: "Sit on the rocking chair",
          isProgressOption: true,
          targetPage: "0022"
        },
        {
          id: "39",
          displayText: "Go over to the puzzle box",
          isProgressOption: true,
          targetPage: "0023"
        }
      ]
    },
    {
      identifier: "0022",
      story: `<p>You sit on the rocking chair. It is so relaxing you could sleep in this... But you aren't quite feeling safe enough to shut your eyes at the moment. What do you do next?</p><br>`,
      options: [
        {
          id: "40",
          displayText: "Have a look at the painting of Sir Fluffington",
          isProgressOption: true,
          targetPage: "0021"
        },
        {
          id: "41",
          displayText: "Go over to the puzzle box",
          isProgressOption: true,
          targetPage: "0023"
        }
      ]
    },
    {
      identifier: "0023",
      story: `<p>You have a look at the curious looking puzzle box. There are engravings of animals on the outside, and it looks like you can rotate the carvings to unlock it. It gives you a sense of danger, like there may be dangerous consequences if you get it wrong. What order do you want to try?</p><br>`,
      options: [
        {
          id: "41",
          displayText: "Bear, Moth, Owl",
          isProgressOption: true,
          targetPage: "0024"
        },
        {
          id: "42",
          displayText: "Moth, Owl, Bear",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0025"
        },
        {
          id: "43",
          displayText: "Owl, Bear, Moth",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0026"
        }
      ]
    },
    {
      identifier: "0024",
      story: `<p>Congratulations! The puzzle box opens! Inside you spot a rubber duck. You take out your prize, all is well.</p><p><em>Wait a minute...</em> something doesn't feel right. You turn around, there is a giant monster standing behind you, snarling and growling. What do you do?<p><br>`,
      options: [
        {
          id: "44",
          displayText: "Scream and throw the duck at the monster",
          isProgressOption: true,
          targetPage: "0027"
        }
      ]
    },
    {
      identifier: "0025",
      story: `<p>You try that combination but it doesn't work. You receive a small zap and the box emits a horrible sound. What do you try next?</p><br>`,
      options: [
        {
          id: "45",
          displayText: "Bear, Moth, Owl",
          isProgressOption: true,
          targetPage: "0024"
        },
        {
          id: "46",
          displayText: "Owl, Bear, Moth",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0028"
        }
      ]
    },
    {
      identifier: "0026",
      story: `<p>You try that combination but it doesn't work. You receive a small zap and the box emits a horrible sound. What do you try next?</p><br>`,
      options: [
        {
          id: "47",
          displayText: "Bear, Moth, Owl",
          isProgressOption: true,
          targetPage: "0024"
        },
        {
          id: "48",
          displayText: "Moth, Owl, Bear",
          isProgressOption: false,
          isLifeReducer: true,
          targetPage: "0028"
        },
      ]
    },
    {
      identifier: "0027",
      story: `<p>You throw your rubber duck at the monster. It grabs the duck and, to your surprise, starts playing with it and then runs away.</p><p>You start to wish you still had the duck but it is ok, there was actually a second rubber duck in the box. You go to sleep soundly and then go home the next day when the storm has passed.</p><br>`,
      options: [
        {
          id: "50",
          displayText: "Yay! The End",
          isProgressOption: false,
          isLifeReducer: false,
          targetPage: "0029"
        }
      ]
    },
    {
      identifier: "0028",
      story: `<p>There is only one combination left to try. You count yourself lucky you haven't made that many mistakes along the way</p><br>`,
      options: [
        {
          id: "51",
          displayText: "Bear, Moth, Owl",
          isProgressOption: true,
          targetPage: "0024"
        }
      ]
    },
    {
      identifier: "0029", // The winning page
      story: `<h1>🎉Congratulations!🎉<br>You have finished the story!</h1><p>Good job. Pat yourself on the back and press start again to restart the story.</p><p><small>(Sorry on CodePen you need to refresh your browser to reset).</small></p><br>`,
      options: [
        {
          id: "52",
          displayText: "Pat yourself on the back",
          isProgressOption: true,
          targetPage: "0001"
        }
      ]
    }
  ]
  
  
  let currentPage = pages[0]; // Starts with the first index of the story pages
  let currentChances = 4; // Chances that the player has
  
  
  function updatePage() {
    let options = "";
    console.log("Loading next page: ")
    console.log(currentPage)
    // Here! Maybe need to make index thing
    currentPage.options.forEach(function (option) {  // ForEach loop to iterate through the page options and output them as buttons
      options += `
      <label class="radioBtn">
      <input type="radio" name="decision" class="checkmark" value="${option.id}">${option.displayText}</label>`;
    })
  
    const output = `${currentPage.story}${options}`;
    
    story.innerHTML = output;
    
    submitBtn.addEventListener("click", checkDecision);
  }
  
  function checkDecision() {
    let selectedOptionId = document.querySelector('input[name="decision"]:checked').value; // Wanted to make a try or if statement to alert the user to make sure option is selected but couldn't get it to work properly
    let selectedOption = currentPage.options.find((option) => option.id === selectedOptionId);
    const gameOverScreen = pages[5];
  
    if (selectedOption) {
      if (selectedOption.isProgressOption) {
        currentPage = pages.find((element) => element.identifier === selectedOption.targetPage);
        console.log("Determined the selected option should navigate to page: ");
        console.log(currentPage);
        updatePage();
      }
      else if (selectedOption.isLifeReducer) {
        currentPage = pages.find((element) => element.identifier === selectedOption.targetPage);
        updatePage();
        console.log("Uh oh");
        currentChances = currentChances -1;
        console.log(`Chances left: ${currentChances}`);
        if (currentChances === 3) {
          alert("You hear a strange growl in the distance, it sends a shiver down your spine.");
        }
        else if (currentChances === 2) {
          alert("You hear the growl again but it sounds louder now.");
        }
        else if (currentChances === 1) {
          alert("You hear footsteps and you get the feeling you aren't alone. Better not make any more noise.");
        }
          if (currentChances === 0) {
            console.log("Game over")
            story.innerHTML = `${gameOverScreen.story}`;
            document.getElementById("submitBtn").textContent = "Try again";
            document.getElementsByClassName("container")[0].style.backgroundColor = "#A80000"; // Change background colour to red
            document.getElementsByTagName("h1")[0].style.color = "black"; // Change h1 colour to black
            submitBtn.addEventListener("click", reloadPage); // Change button to reload page function
          }
      }
      else { // The winning page
        console.log("Game over")
        currentPage = pages.find((element) => element.identifier === selectedOption.targetPage);
        updatePage();
        document.getElementsByClassName("container")[0].style.backgroundColor = "#00B8F5";
        document.getElementsByTagName("h1")[0].style.color = "black"
        document.getElementById("submitBtn").textContent = "Start again";
        submitBtn.addEventListener("click", reloadPage);
      }
    }
  }
  
  // Function to reload the page so game can be reset easily. It doesn't work in Codepen, tried a making a resetPage button but it has some issues with style resetting and undefined, code left below
  function reloadPage() {
    location.reload();
  }
  
  // Function to reset to first page
  // function resetPage() {
  //   currentPage = pages[0];
  //   currentChances = 4;
  //   document.getElementById("submitBtn").textContent = "Next";
  //   document.getElementsByClassName("container")[0].style.backgroundColor = "black";
  //   // document.getElementsByTagName("h1")[0].style.color = "grey";
  //   submitBtn.addEventListener("click", checkDecision);
  //   updatePage();
  // }
  
  window.addEventListener("load", updatePage); // Load the scrolling through story function
  submitBtn.addEventListener("click", checkDecision); // Submit button checks decision on click