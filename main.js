
let randomNumber = (num) =>
{
    return Math.floor(Math.random() * num);
}

const inspireMessage = {
                        greetMsg : ['Hello there!', 'Hi there!', 'Hai Welcome there!', 'Hello User!', 'Hello!!','Aloe there!!'],
                        inspireMsg : ['The struggle you’re in today is developing the strength you need for tomorrow. Don’t give up.',
                                      'Always remember that your present situation is not your final destination. The best is yet to come.',
                                      'Encourage yourself, believe in yourself, and love yourself. Never doubt who you are.',
                                      'Whenever you feel weak, remember the things that made you strong.',
                                      'Never let the odds keep you from doing what you know in your heart you were meant to do.',
                                      'You have to fight through some bad days to earn the best days of your life.',
                                      'Trust yourself. You know more than you think you do.',
                                      'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.',
                                      'One small positive thought in the morning can change the entire outcome of your day!',
                                      'Instead of giving myself reason why I can’t, I give myself reasons why I can.',
                                      'If “Plan A” didn’t work. The alphabet has 25 more letters! Stay cool.',
                                    ],
                        endMsg : ['Thank You!', 'Hope you inspired!', 'Hope you Enjoyed!']
                    };




function randomMessage ()
{
let displayMessage = [];
var formattedDisplayMessage = "";

for (let msgArray in inspireMessage)
{
    let messageIndex = randomNumber(inspireMessage[msgArray].length);

    if(msgArray === 'greetMsg')
    {
        displayMessage.push(`${inspireMessage[msgArray][messageIndex]}`);
        
    }
    else if(msgArray === 'inspireMsg' )
    {
        displayMessage.push(inspireMessage[msgArray][messageIndex]);
    }
    else if(msgArray === 'endMsg')
    {
        displayMessage.push(inspireMessage[msgArray][messageIndex]);
    }
    else
    {
        console.log("There is no data available");
    }
}

formattedDisplayMessage = displayMessage.join('\n');
document.getElementById('displaymsg').innerHTML = formattedDisplayMessage;
//console.log(formattedDisplayMessage);
}

//  Node.js display ----> node main.js       uncomment these

//randomMessage()


