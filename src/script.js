// Initialize stats and questions
let currentQuestion = 0;
const stats = {};
const questions = [
    // Sample question - you'll need to add all 26
    {
        question: "bacon, egg, or cheese?",
        answers: [
            {
                text: "bacon",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "egg",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "cheese",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "what's the move?",
        answers: [
            {
                text: "dennys",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "waffle house",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "how many alarms do you set?",
        answers: [
            {
                text: "1 (cap)",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "2",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "3+",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "rawdog (no alarm)",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "favorite coding language?",
        answers: [
            {
                text: "haskell",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "matlab",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "cobol",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "php",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "R",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "x86 asm",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "lisp",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "favorite cheese?",
        answers: [
            {
                text: "kraft singles",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "cream cheese",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "parmesan",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "cottage cheese",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "what's the best body part?",
        answers: [
            {
                text: "left arm",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "right arm",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "left leg",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "right leg",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "nose",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            } 
        ]
    },
    {
        question: "What was your freshman year dorm?",
        answers: [
            {
                text: "Ellicott community",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Cambridge community",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "Denton community",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "JW/PC",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "P-Freddy",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "other",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }              
        ]
    },
    {
        question: "Best floor of Mckeldin?",
        answers: [
            {
                text: "1",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "2",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "3",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "4",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "5",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "6",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "7",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "Question 1?",
        answers: [
            {
                text: "Answer 1",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Answer 2",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
            // Add more answers as needed
        ]
    },
    {
        question: "Choose a fast food",
        answers: [
            {
                text: "taco bell",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "mcdonalds",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "subway",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "popeyes",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "What phone do you have?",
        answers: [
            {
                text: "iphone",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "samsung",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "motorola",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "huawei",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            },
            {
                text: "other",
                stats: { stat1: -2, stat2: 4, stat3: 1 }
            }
        ]
    },
    {
        question: "favorite color: ",
        answers: [
            {
                text: "Answer 1",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "birthdate: ",
        answers: [
            {
                text: "Answer 1",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "would you rather: ",
        answers: [
            {
                text: "have unlimited bacon but no games",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "have unlimited games but no games",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "would you rather: ",
        answers: [
            {
                text: "never be able to eat again",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "never be able to poop again",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "Hypothetically you just took a canvas quiz and it took you 2 out of the 60 minutes that were given (there were like 30 questions) do you: ",
        answers: [
            {
                text: "wait out the clock",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "submit immediately",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "change some of the answers a couple times",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "how do you signal to your friend during an exam?",
        answers: [
            {
                text: "pencil tap",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "foot tap",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "cough",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "audibly talk to them",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "pull out you phone and call them",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "Hypothetically you’re a veo scooter on campus drive (the section with all the purple line tracks). Your scooter tire gets caught in a rail and you fall over. Someone comes up to you and asks if you’re okay. What do you do?",
        answers: [
            {
                text: "laugh it off 'that was intentional'",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "start crying",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "I never fall",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "too broke to take a veo",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "You’re at a mutual friend’s house. Toilet clogged. No plunger. What do you do?",
        answers: [
            {
                text: "leave",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "own up to it",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Plastic. Bag.",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "You take a screenshot of a text conversation to send to your friend but you accidentally send it back to that same person. What do you do?",
        answers: [
            {
                text: "new phone who dis",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "no follow up text",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "double down",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "send laughing/crying/skull emoji",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "You're going down the elevator from the 2nd floor. The elevator is nearly full. What do you do?",
        answers: [
            {
                text: "Shove yourself in (and don’t fart)",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Shove yourself in (and fart)",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "take the stairs",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "wait for the next elevator",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "Milk.",
        answers: [
            {
                text: "whole",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "2%",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "skim/lowfat",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "chocolate",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "strawberry",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "A chinese guy who is visibly blind comes up to you and starts speaking a thick mandarin accent. He might be asking for directions idk. What do you do?",
        answers: [
            {
                text: "Point the way he needs to go",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "walk the opposite direction",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "lead him to where he needs to go",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "子曰：道千乘之国：敬事而信，节用而爱人，使民以时。",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "你从UMD dining hall 偷过几个 plates?",
        answers: [
            {
                text: "0 (ur lying)",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "1",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "2",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "3+",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "You’re running late to an important exam and there is a bus that will take you there on time. The bus comes and it is PACKED and your number 1 opp is standing right at the doorway. The next bus will make you 15 minutes late. What do you do?",
        answers: [
            {
                text: "Go in and throw ur opp off the bus",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Go in (and fart)",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Go in and stay silent the entire ride",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Wait for the next bus",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "You wake up at 9:58. You have a final exam at 10. What are you telling your professor?",
        answers: [
            {
                text: "I had to attend my fish’s funeral",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Be honest",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Run.",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Nothing. It's cooked. Go back to bed.",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    },
    {
        question: "Hypothetically, you are on vacation with a group of friends. You guys just bought 10 lbs of ground beef to last the trip and put in the fridge. Night 1, you wake up at 4 am STARVING, I’m talking FAMISHED. You open up the fridge and the only thing in there is the 10 lbs of ground beef. You go to sleep later that night 10 lbs heavier and the fridge is now empty. What do you do the next morning?",
        answers: [
            {
                text: "Be the first one to ask what happened to the ground beef",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Blame it on the fattest guy in the friend group",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Gaslight everyone that they forgot to bring it",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            },
            {
                text: "Slowly drop hints throughout the trip that you ate all of it",
                stats: { stat1: 5, stat2: -3, stat3: 2 }
            }
        ]
    }
];

// Initialize all stats to 0
function initializeStats() {
    for (let i = 1; i <= 30; i++) {
        stats[`stat${i}`] = 0;
    }
}

// Display current question
function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.stats);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('progress').textContent = 
        `Question ${currentQuestion + 1} of ${questions.length}`;
}

// Handle answer selection
function selectAnswer(selectedStats) {
    // Update stats
    Object.entries(selectedStats).forEach(([stat, value]) => {
        stats[stat] = Math.min(Math.max(stats[stat] + value, 0), 100);
    });
    
    // Move to next question or show results
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Display results
function showResults() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';
    
    Object.entries(stats).forEach(([statName, value]) => {
        const statDiv = document.createElement('div');
        statDiv.className = 'stat-bar';
        
        statDiv.innerHTML = `
            <div class="stat-label">
                ${statName}: ${value}%
            </div>
            <div class="bar-container">
                <div class="bar-fill" style="width: ${value}%"></div>
            </div>
        `;
        
        statsContainer.appendChild(statDiv);
    });
}

// Start the quiz
initializeStats();
showQuestion();