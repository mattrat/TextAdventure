const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 0,
    text: "Dead End.",
    options: [
      {
        text: 'Finsih this story branch.',
        nextText: 1
      }
    ]
  },
  {
    id: 1,
    name: "Wake up",
    text: "You wake up in a strange room. It's empty and plain. You wonder how you got here.",
    options: [
      {
        text: 'Leave the building',
        nextText: 3
      },
      {
        text: 'Investigate upstairs',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "You climb up the ladder and see a similiar room with a few stray items and a chest on the opposite side of the room. You open it and find a strange key. You can't go any higher becasue the key doesn't open the door.",
    options: [
      {
        text: 'Leave the building',
        nextText: 3
      }
    ]
  },{
    id: 3,
    text: "You wander down the street in an unfamiliar part of town. It's still home but you haven't seen this part of the ocean before. It is sunset and you should get home.",
    options: [
      {
        text: 'Talk to a nearby vendor',
        nextText: 4
      },
      {
        text: 'Continue down the street',
        nextText: 5
      }
    ]
  },{
    id: 4,
    text: "The vendor tells you that you are on the east side of town. He offers to sell you one of his fish but you reply that you don't have any money. He tells you that it's OK because it's just a red herring.",
    options: [
      {
        text: 'Continue down the street',
        nextText: 5
      }
    ]
  },{
    id: 5,
    text: "You run down busy roads and eventually make it home just as night fall arrives. The feeling of relief washes over you as you step into your house. The curiosity of why you woke up in a strange building still nags at you.",
    options: [
      {
        text: 'Go to bed',
        nextText: 6
      },
      {
        text: 'Place the key somewhere safe ***',
        nextText: 0
      }
    ]
  },{
    id: 6,
    text: "As the sun is breaking through the window, your alarm sounds. You turn it off and realize you have a job interview.",
    options: [
      {
        text: 'Get dressed and leave the house',
        nextText: 7
      }
    ]
  },{
    id: 7,
    text: 'You arrive just in time for your interview at Insuricare Services. \n"Hello Mr. Drayton." \n "Thank you for inviting me. I am very eager for the opportunity to work at Insuricare Services." \n "So Mr. Drayton, I see on your resume that you have have been unemployeed for the past year. Can you help me understand what you have been working on the past year?" \n "I have been taking a break from traditional employment. I was let go from my last position beacuse of an intercompany scandal that was unjustly pinned on me. I have been taking time to recover from that incident." \n "Why have you not applied for any jobs suring that time?" \n "I have tried but I keep getting denied because of the same question you asked just now, about the gap in my employement." \n "I see." \n "Well, would you like to discuss the rest of my resume?" \n "Yes, I quite would, Mr. Drayton." \n\nYou go home satisfied with your interview believing it went well. As you sit down on your couch, you sigh in relief but the anticipation for the final decision weighs on you.',
    options: [
      {
        text: 'Go to bed.',
        nextText: 8
      },
      {
        text: 'Investigate the key.***',
        nextText: 0
      }
    ]
  },{
    id: 8,
    text: "You wake up and start looking at your email while grogilly eating a bowl of cereal. Nothing grabs your attention so you go outside and get the snail mail. A letter from your aunt but nothing from the job prospect. You sit down an continue eating the now soggy bowl of cereal. You need to find a way to spend your day while waiting for the acceptance letter.",
    options: [
      {
        text: 'Read the letter from your aunt.',
        nextText: 9
      },
      {
        text: 'Read something from your bookshelf.',
        nextText: 10
      },
      {
        text: 'Investigate the key ***',
        nextText: 0
      }
    ]
  },{
    id: 9,
    text: "You tear the envelope with your trusty letter opener. Aunt June has joined a gym and started an all fish diet. These are probably just attempt to impress her new boyfriend; the locksmith in town named Aaron. You put the letter aside promising that you write her later.",
    options: [
      {
        text: 'Read something from your bookshelf.',
        nextText: 10
      },
      {
        text: 'Investigate the key ***',
        nextText: 0
      }
    ]
  },{
    id: 10,
    text: "Out of the different books that your have failed to start, you choose the one book you have read so many time <i>'Pride and Predjudice'</i>. You seem to find new themes and ideas that you haven't seen before. After reading for the majority of the day you put the book down knowing it won't be the last time you choose it over everything else. After being resloved that you won't get a response today, you decide to call it a day early; getting a bit more rest will be important.",
    options: [
      {
        text: 'Go to bed',
        nextText: 11
      }
    ]
  },{
    id: 11,
    text: 'Woken up by your alarm you immediately head to check your email. The job offer from Insuricare is the first thing in your inbox. You explode out of the chair with glee. But before you get too excited, you check your mailbox to see what else is there. Suprisingly there are 3 three letters waiting for you, a physical copy of the email from Insuricare, a large envelope from Taco Express, and the last is from a man named Mr. Claythorne. \n' 
    + 
    'You did not think you would receive anything from Taco Express because you applied to work there nearly a month ago. Quickly scanning the letter, you have received a job offer but the wages cannot compare the to prospect of join Insuricare.\n'
    + 
    'Looking a little closer you see that the letter from Mr. Claythorne is a personal letter and not mass mailer. Curious, you tear it open and start reading. \n "Dear David Drayton, We are very impressed with your work history and your past experience. We would like to offer you a position at Atlantic Tower Incorporated."\n' 
    +
    'You are glad to receive three job offers, and at the same time you wonder which one is best for you.',
    options: [
      {
        text: 'Insuricare',
        nextText: 12
      },
      {
        text: 'Taco Express',
        nextText: 0
      },
      {
        text: 'Atlantic Tower',
        nextText: 0
      },
    ]
  },{
    id: 12,
    text: "You start tomorrow. Enthralled with joy you text your friends and family to let them know the good news. They all congradulate you and wish you the best. After getting a good nights rest, you wake up and start getting ready before your alarm sounds. After eating a big breakfast, you start the drive to Insuricare. Arriving you enter through the main door and you are greeted by the receptionist. She directs you to your desk and you start settling in. You boss arrives a few minutes later greeting you and welcoming you to the company. He gives you brief instructions on what to do for you first day and you thank him.",
    options: [
      {
        text: 'Finish your work quickly',
        nextText: 13
      },
      {
        text: 'Research company relevant questions',
        nextText: 0
      },
      {
        text: 'Research personal questions',
        nextText: 0
      }
    ]
  },{
    id: 13,
    name: '',
    text: 'You finish your work and take your lunch break. Eating you tuna and crackers you overhear two people talking. \nThe taller woman is saying, "There is nothing to worry about, we will be fine." \nThe shorter, less fit woman replys, "Sara, listen to me! Will is great but he cannot help us with this if we do not take action."\n Sara says, "Cindy I am telling that we will be fine. We don\'t need to bring anyone else into this." \nYou keep eating your food wondering if you should get involved.',
    options: [
      {
        text: 'Stand up and introduce yourself',
        nextText: 14
      },
      {
        text: 'Keep eating your lunch and return to work',
        nextText: 0
      }
    ]
  },{
    id: 14,
    name: "work-sara",
    text: "You stand up and introduce yourself. Sara turns and introduces herself while Cindy sets down the napkin she was fidgiting with and angerly leaves the lunch room. "
    +
    "\"Hi I'm David Drayton. I started today in the Marketing Department. Nice to meet you.\" You say.\n \"Hi I'm Sara. I work in the Retail department. My friend there was Cindy. Please excuse here, she's really nice. I promise. I think she is just under some pressure right now.\" Sara says. \n\"I understand. Hopefully it's nothing too bad.\" You reply. \n\"No, it's not that bad. There has been some hacking going on and Cindy is worried that they have infected her computer.\" Sara states. \n\"Oh that's scary. Let me know if there is anything I can do to help.\" \n\"Sure thing. I think she is just over reacting but I'll let you know if there is anything you can do.\"\n"
    +
    "Sara wish you the best on your first day and leaves the lunch room. You quickly gather what's left of your lunch realizing that your break is already over and you hurry back to your desk and log into your computer.",
    options: [
      {
        text: 'Research company relevant questions',
        nextText: 15
      },
      {
        text: 'Research personal questions',
        nextText: 0
      }
    ]
  },{
    id: 15,
    name: "work-sara-biz",
    text: "You start researching the tasks you will have in the future and how to effectively do them. A couple of hours into your research Sara comes by your desk. \n\"Hi. Tom sent me to see how you are doing. I hear you have started doing some extra research. That's amazing! It makes our lives easier.\"\n" +
    "You say, \"No problem, I like getting ahead. How is Cindy doing by the way? Did you figure out if she was infected?\""+
    "No ... but we plan on looking into it more after work. Would you like to help?"+
    "Sure thing."+
    "OK, I will stop by around five o'clock. Thanks."+
    "Sara walks off down the hall and you go back to your research hoping to find something interesting. At four thirty, your eyes hurt from staring at the computer screen so you decide to head over to Cindy's desk a little early. Upon arriving, Cindy and Sara are troubleshooting over the computer screen."+
    "You say, \"Is it infected?\""+
    "Sara nodes glumly. \"Yeah, it started acting funny yesterday and today it looks like there is a lot of network activity but I don't have anything open.\""+
    "\"Do you have any idea how it got infected?\""+
    "\"I don't know. I haven't opened anything out of the ordinary; just the Taco Tuesday advertizing posters for the Taco Express company. I don't see how that could have been it though, they are a subsidiary of ours."+
    "Sara replies, \"Perhaps someone from Taco Express wants to attack us?\""+
    "Cindy says, \"Why would they though?\""+
    "You stand their with them looking at the task mananger looking for an answer that obviously isn't there. As you are looking at all of the information you get an idea, \"Hey Cindy, it looks like it's still downloading something. If they are still connected, we should be able to track where the download is coming from.\" You slide the keyboard over and start typing in the tracert command. Once it's done running, it locates the origin as a Taco Express location which is just 20 blocks away."+
    "\"Wow! That's amazing ... and interesting.\" Cindy proclaims. \"But I still don't understand why someone from our own company would be hacking into my computer.\"",
    options: [
      {
        text: 'Offer to go to the location to investigate',
        nextText: 16
      },
      {
        text: 'Suggest that all three of you should go to the location to investigate',
        nextText: 0
      },
      {
        text: 'Feel satisfied that you have helped and head out for the day ',/* like a good robot */
        nextText: 0
      }
    ]
  },{
    id: 16,
    name: "Taco Express", // Expansion for foreshading the stark differences between the attlantic tower offices and the Taco Express buildings
    text: "You head out of the office excited to understand what is happening. You get in your, not so new, SUV and start heading north to the Taco Express on Lincoln Ave. Marked by the obvious yellow Taco sign, you turn into the one row parking lot and pick one of spots under one of the over head lights. You reach the door and hear a bell ring as you open the door. The man at the counter starts his well rehearse welcome routine. \"Hi, welcome to -\""+
    "\"No-\""+
    "\"-Taco Express-\""+
    "\"-No wait-\""+
    "\"-How can I help-\""+
    "\"-Please just listen to me-\""+
    "\"-you today.-\""+
    "\"Please! I need to talk to you. It's Important!\""+
    "\"Can it wait? We are really busy.\""+
    "\"No it can't. I am from the main office. I think someone here is doing something malicious on the computer. You have to help!\""+
    "\"Oh, are you from Insuricare?\""+
    "\"Yes. Why? Are you doing it?\""+
    "\"Please, come in the back.\" Yelling over his shoulder as we head down the hall, \"Carol, can you cover for me?\"",
    options: [
      {
        text: '',
        nextText: 0
      },
      {
        text: '',
        nextText: 0
      }
    ]
  },{
    id: 17,
    name: "",
    text: "",
    options: [
      {
        text: '',
        nextText: 0
      },
      {
        text: '',
        nextText: 0
      }
    ]
  },{
    id: 18,
    name: "",
    text: "",
    options: [
      {
        text: '',
        nextText: 0
      },
      {
        text: '',
        nextText: 0
      }
    ]
  },{
    id: 5,
    name: "",
    text: "",
    options: [
      {
        text: '',
        nextText: 0
      },
      {
        text: '',
        nextText: 0
      }
    ]
  },{
    id: 5,
    name: "",
    text: "",
    options: [
      {
        text: '',
        nextText: 0
      },
      {
        text: '',
        nextText: 0
      }
    ]
  },{
    id: 5,
    name: "",
    text: "",
    options: [
      {
        text: '',
        nextText: 0
      },
      {
        text: '',
        nextText: 0
      }
    ]
  },{
    id: 5,
    name: "",
    text: "",
    options: [
      {
        text: '',
        nextText: 0
      },
      {
        text: '',
        nextText: 0
      }
    ]
  },
];

startGame();