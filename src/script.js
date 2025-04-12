// Initialize stats and questions
let currentQuestion = 0;
const stats = {};
const questions = [
    // Sample question - you'll need to add all 26
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
    // Add remaining 25 questions...
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