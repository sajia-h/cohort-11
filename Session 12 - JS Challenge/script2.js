function displayName() {
    let showCard = document.getElementById('hidden');
    showCard.style.opacity = "1";
    let showMascot = document.getElementById('mascot');
    showMascot.style.opacity = "1";
    document.getElementById('display').innerHTML = 
                document.getElementById("usernameInp").value;

  }

  function userPage() {
    window.location.href = 'user.html';

}

window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });

  

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
  
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
//   document.getElementById("question-image").src = textNode.imageUrl;
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
    id: 1,
    text: 'Day 1: The day has finally come. Your first ever stream. After years of saving up to build the perfect setup, it\'s time to go live. First impressions are important, so choose wisely. What would you like your first stream to be?', imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg",
    options: [
      {
        text: 'Just chatting',
        setState: { chatting: true },
        nextText: 2
      },
      {
        text: 'Fornite, duh',
        nextText: 2
      },
      {
        text: 'Hot tub stream',
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'Before you go live, you realise a change of clothing would be a good idea. Gotta look good for the camera, right? What do you decide to wear?',
    options: [
      {
        text: 'Wear a bright purple hoodie',
        requiredState: (currentState) => currentState.chatting,
        setState: { blueGoo: false, purple: true },
        nextText: 3
      },
      {
        text: 'Wear your favourite cosplay costume',
        requiredState: (currentState) => currentState.chatting,
        setState: { chatting: false, cosplay: true },
        nextText: 3
      },
      {
        text: 'Leave on what you\'re wearing',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Wow! 30 minutes into your first stream and you\'ve gained 20 viewers and 5 followers. Great job! Either it\'s the drip or your personality is tracking attention. Let\'s try and double those numbers in the next hour.',
    options: [
      {
        text: 'Continue being yourself',
        nextText: 4
      },
      {
        text: 'Ask everyone who\'s joined to follow',
        nextText: 5
      },
      {
        text: 'Thank everyone who\'s joined',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Oh no! You failed to keep your audience happy and they all left!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Yikes. Even if you didn\'t mean to, looks like your new viewers and followers thought you were being ungrateful and beggy. They all left and unfollowed.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Woah! You\'ve TRIPLED in viewers and doubled in followers. Your viewers appreciate your gratitude and overall humble personality.',
    options: [
      {
        text: 'HYPE TRAIN',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Things were going perfectly smooth for your first stream, until you get a swarm of hate raiders coming through. They\'re spamming the chat and attacking your new viewers. What do you do?',
    options: [
      {
        text: 'Turn off chat',
        nextText: 8
      },
      {
        text: 'Threaten to end stream',
        requiredState: (currentState) => currentState.purple,
        nextText: 9
      },
      {
        text: 'Report stream',
        requiredState: (currentState) => currentState.cosplay,
        nextText: 10
      },
      {
        text: 'Give mod priveleges to a genuine viewer',
        requiredState: (currentState) => currentState.chatting,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'While it may have helped to stop the spam, at the same time, you stopped your viewers from being able to interact with you and they all left leaving you with 0 viewers.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly played into the trollers\' hands and helplessly ended the stream without gaining a strong viwership and following. ',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'That may have helped in the long-term but that didn\'t help to ward off the trolls right now. You lost control of your stream and therefore put off all your viewers.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Good shout! Your new mod managed to timeout the trolls indefinitely, and helped you continue the rest of your stream with ease. If that wasn\'t good enough, your new mod happens to mod for a well-known streamer and convinced them to send a raid of 100,000+ viewers to your stream! \n \n End of Day 1: \n Viewcount = 102,300 \n Followers = 34,756  ',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()

