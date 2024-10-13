// Image Name Reader (can't be use while running due to browser issue)
// Please Don't Touch
// const fs = require("fs");
// const q = fs.readdirSync("./src/img");
// console.dir(q, {'maxArrayLength':null});

const questions = [
    '1010203631_Large_h.jpg', '1010203631_Large_m.jpg', '1011366896_Large_h.jpg',
    '1011366896_Large_m.jpg', '101685710_Large_h.jpg',  '101685710_Large_m.jpg',
    '1022974255_Large_h.jpg', '1022974255_Large_m.jpg', '1029965466_Large_h.jpg',
    '1029965466_Large_m.jpg', '1033058219_Large_h.jpg', '1033058219_Large_m.jpg',
    '104726217_Large.jpg',    '1049828137_Large.jpg',   '1092621641_Large_h.jpg',
    '1092621641_Large_m.jpg', '1108687475_Large.jpg',   '110906639_Large.jpg',
    '1122011350_Large.jpg',   '1145649643_Large.jpg',   '117335388_Large.jpg',
    '119260988_Large.jpg',    '1232707579_Large.jpg',   '1248455494_Large.jpg',
    '1255809126_Large.jpg',   '1263185980_Large.jpg',   '1276327129_Large.jpg',
    '130057475_Large_h.jpg',  '130057475_Large_m.jpg',  '1315613332_Large.jpg',
    '1348208827_Large.jpg',   '1351032584_Large.jpg',   '1352005047_Large.jpg',
    '1352865693_Large.jpg',   '1367595696_Large.jpg',   '138607971_Large.jpg',
    '138895540_Large.jpg',    '1410307515_Large.jpg',   '1433915651_Large.jpg',
    '1434318743_Large.jpg',   '1447330891_Large.jpg',   '1451520385_Large.jpg',
    '146931510_Large.jpg',    '1488185488_Large.jpg',   '1520738528_Large.jpg',
    '1539585398_Large.jpg',   '1624182962_Large.jpg',   '1673916467_Large.jpg',
    '1702222221_Large.jpg',   '1738339101_Large.jpg',   '174643444_Large.jpg',
    '1845766133_Large.jpg',   '1901798426_Large.jpg',   '199136372_Large.jpg',
    '1996918152_Large.jpg',   '201612250_Large.jpg',    '206067269_Large.jpg',
    '226854451_Large_h.jpg',  '226854451_Large_m.jpg',  '296064548_Large_h.jpg',
    '296064548_Large_m.jpg',  '328801008_Large_h.jpg',  '328801008_Large_m.jpg',
    '329479720_Large.jpg',    '342363785_Large.jpg',    '345884594_Large.jpg',
    '346203306_Large.jpg',    '349691224_Large.jpg',    '352180169_Large.jpg',
    '358806781_Large.jpg',    '363867519_Large.jpg',    '364124506_Large.jpg',
    '377446890_Large.jpg',    '377880646_Large.jpg',    '379047973_Large.jpg',
    '379266659_Large_h.jpg',  '379266659_Large_m.jpg',  '379451946_Large.jpg',
    '383037318_Large.jpg',    '395373405_Large.jpg',    '402301070_Large.jpg',
    '405279699_Large.jpg',    '406813066_Large.jpg',    '412624055_Large.jpg',
    '413233235_Large.jpg',    '415821983_Large.jpg',    '420319741_Large.jpg',
    '426037078_Large.jpg',    '428858104_Large_h.jpg',  '428858104_Large_m.jpg',
    '430762358_Large_h.jpg',  '430762358_Large_m.jpg',  '453655331_Large.jpg',
    '459646150_Large.jpg',    '470081137_Large_h.jpg',  '470081137_Large_m.jpg',
    '471194853_Large.jpg',    '471368930_Large.jpg',    '472513603_Large_h.jpg',
    '472513603_Large_m.jpg',  '474242923_Large_h.jpg',  '474242923_Large_m.jpg',
    '476587544_Large_h.jpg',  '476587544_Large_m.jpg',  '481579017_Large.jpg',
    '487683554_Large.jpg',    '489791189_Large.jpg',    '490466578_Large_h.jpg',
    '490466578_Large_m.jpg',  '493396069_Large_h.jpg',  '493396069_Large_m.jpg',
    '494971901_Large_h.jpg',  '494971901_Large_m.jpg',  '495880319_Large.jpg',
    '501074015_Large.jpg',    '502666125_Large_h.jpg',  '502666125_Large_m.jpg',
    '502834405_Large_h.jpg',  '502834405_Large_m.jpg',  '504325680_Large.jpg',
    '504378522_Large_h.jpg',  '504378522_Large_m.jpg',  '511056550_Large.jpg',
    '511363734_Large.jpg',    '511857260_Large.jpg',    '512146282_Large.jpg',
    '514279748_Large_h.jpg',  '514279748_Large_m.jpg',  '515510054_Large.jpg',
    '518045753_Large.jpg',    '519975403_Large.jpg',    '520706614_Large.jpg',
    '521629546_Large.jpg',    '521655532_Large_h.jpg',  '521655532_Large_m.jpg',
    '526638047_Large_h.jpg',  '526638047_Large_m.jpg',  '529252466_Large.jpg',
    '52968615_Large.jpg',     '531489564_Large.jpg',    '532760973_Large.jpg',
    '535530800_Large.jpg',    '53875475_Large.jpg',     '563030678_Large_h.jpg',
    '563030678_Large_m.jpg',  '600728457_Large_h.jpg',  '600728457_Large_m.jpg',
    '60132202_Large.jpg',     '605623074_Large_h.jpg',  '605623074_Large_m.jpg',
    '61014842_Large_h.jpg',   '61014842_Large_m.jpg',   '638464819_Large.jpg',
    '642111916_Large_h.jpg',  '642111916_Large_m.jpg',  '6487781379_Large.jpg',
    '66085770_Large.jpg',     '672284493_Large_h.jpg',  '672284493_Large_m.jpg',
    '6850527306_Large.jpg',   '693687448_Large_h.jpg',  '693687448_Large_m.jpg',
    '704473751_Large_h.jpg',  '704473751_Large_m.jpg',  '716594529_Large_h.jpg',
    '716594529_Large_m.jpg',  '721612607_Large_h.jpg',  '721612607_Large_m.jpg',
    '730765921_Large_h.jpg',  '730765921_Large_m.jpg',  '735049260_Large_h.jpg',
    '735049260_Large_m.jpg',  '761800507_Large_h.jpg',  '761800507_Large_m.jpg',
    '762111619_Large_h.jpg',  '762111619_Large_m.jpg',  '798659701_Large_h.jpg',
    '798659701_Large_m.jpg',  '803375650_Large_h.jpg',  '803375650_Large_m.jpg',
    '807873536_Large_h.jpg',  '807873536_Large_m.jpg',  '81318524_Large.jpg',
    '84471596_Large.jpg',     '846545152_Large_h.jpg',  '846545152_Large_m.jpg',
    '859542660_Large.jpg',    '869858460_Large_h.jpg',  '869858460_Large_m.jpg',
    '87749006_Large.jpg',     '887993249_Large.jpg',    '898619475_Large_h.jpg',
    '898619475_Large_m.jpg',  '941622718_Large_h.jpg',  '941622718_Large_m.jpg',
    '944545105_Large_h.jpg',  '944545105_Large_m.jpg',  '96843175_Large.jpg',
    '997626761_Large_h.jpg',  '997626761_Large_m.jpg'
];

// function to shuffl the array pictures 
 function shuffleArray(array) {
    let length = array.length;
    let shuffle = array.slice(); // copy of array
    // loop over the array
    for (let i = length - 1; i > 0; i -= 1) {
        let random = Math.floor(Math.random() * (i + 1)); // random card position
        let current = shuffle[i]; // current card
        // swap the random card and the current card
        shuffle[i] = shuffle[random]; // move the random card to the current position
        shuffle[random] = current; // put the current card in the random position
    };
    return shuffle; // return shuffled array
};

let randomQuestions = shuffleArray(questions);
let currIndex = 0;

const startButton = document.getElementById('start-btn');
const experience = document.getElementById('experience');
const exp1 = document.getElementById('exp1');
const exp2 = document.getElementById('exp2');
const exp3 = document.getElementById('exp3');
const exp4 = document.getElementById('exp4');
const exp5 = document.getElementById('exp5');
const information = document.getElementById('information');
const nextInfo = document.getElementById('next-btn');
const subjectIntentElement = document.getElementById('subject-intent');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const exitScreenElement = document.getElementById('exit');
const questionContainerElement = document.getElementById('question-container');
const modiButton = document.getElementById('modi-btn');
const highButton = document.getElementById('high-btn');
const nameBox = document.getElementById('nameBox');

//input that need to be written
let expScore;
let subjectIntent = 0;
let answerArray = [];

startButton.addEventListener('click', startSurvey);
exp1.addEventListener('click', exp1Click);
exp2.addEventListener('click', exp2Click);
exp3.addEventListener('click', exp3Click);
exp4.addEventListener('click', exp4Click);
exp5.addEventListener('click', exp5Click);
nextInfo.addEventListener('click', showIntent);
yesButton.addEventListener('click', showSurvey);
noButton.addEventListener('click', exitScreen);
modiButton.addEventListener('click', modiAnswer);
highButton.addEventListener('click', highAnswer);

function startSurvey() {
    console.log('success');
    startButton.classList.add('hide');
    experience.classList.remove('hide');
};

function exp1Click() {
    expScore = 1;
    showInfo();
};

function exp2Click() {
    expScore = 2;
    showInfo();
};

function exp3Click() {
    expScore = 3;
    showInfo();
};

function exp4Click() {
    expScore = 4;
    showInfo();
};

function exp5Click() {
    expScore = 5;
    showInfo();
};

function showInfo() {
    experience.classList.add('hide');
    information.classList.remove('hide');
};

function showIntent () {
    information.classList.add('hide');
    subjectIntentElement.classList.remove('hide');
}

function showSurvey() {
    subjectIntent = 1;
    subjectIntentElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
};

function setNextQuestion() {
    if (currIndex < randomQuestions.length) {
        showQuestion(currIndex);
    } else {
        exitScreen();
    };
};

function modiAnswer() {
    answerArray[questions.indexOf(randomQuestions[currIndex])] = randomQuestions[currIndex] + ': ' + 0;
    currIndex++;
    setNextQuestion();
};

function highAnswer() {
    answerArray[questions.indexOf(randomQuestions[currIndex])] = randomQuestions[currIndex] + ': ' + 1;
    currIndex++;
    setNextQuestion();
};

function showQuestion(index) {
    console.log(randomQuestions[index]);
    document.getElementById('ori').src 
    = 'img/' + randomQuestions[index] + '/ori.jpg';
    document.getElementById('crop').src 
    = 'img/' + randomQuestions[index] + '/crop.jpg';
    document.getElementById('cropped').src 
    = 'img/' + randomQuestions[index] + '/cropped.jpg';
};

function selectAnswer(e) {
    console.log('pressed');
};

function exitScreen() {
    questionContainerElement.classList.add('hide');
    subjectIntentElement.classList.add('hide');
    exitScreenElement.classList.remove('hide');
    console.log(expScore);
    console.log(subjectIntent);
    console.log(answerArray);
};

// function to save the txt file:::
function saveArrayAsTxtFile(arrayData, sc , int ) {
    if(nameBox.value === '') {
        alert('You must write something!');
    } else {
        let fileName = nameBox.value;
        arrayData.unshift('');
        arrayData.unshift('score:' + sc );
        arrayData.unshift('subject Intention:' + int);

        // Convert the array to a string with each element on a new line
        const content = arrayData.join('\n');

        // Create a Blob with the string content
        const blob = new Blob([content], { type: 'text/plain' });

        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.download = fileName;  // Set the desired file name
        link.href = URL.createObjectURL(blob); // Create a URL for the Blob

        // Programmatically click the anchor to trigger the download
        link.click();

        // Clean up by revoking the object URL
        URL.revokeObjectURL(link.href);
    };
};

    //              currIndex / randomQuestions.length  loading bare 
function updateLoadingBar(curInd , randLen ) {
    let percentageI ;
    percentageI = ((curInd+1)*100)/randLen ;
   // const percentageInput = document.getElementById('percentageInput').value;
    const percentage = Math.max(0, Math.min(100, percentageI)); // Ensure it's between 0 and 100
    
    // Update the width of the loading fill element
    const loadingFill = document.getElementById('loadingFill');
    loadingFill.style.width = percentage + '%'; // Set the width based on percentage
    console.log(`Loading bar set to ${percentage}%`);
};

function startCountdown() {
    if(nameBox.value === '') {
        alert('You must write something!');
    } else {
        // Set a timeout to exit the code after 10 seconds
        setTimeout(() => {
        console.log("Exiting the code...");
        // Here, you can add any cleanup or exit logic if needed
        }, 9000); // 10000 milliseconds = 10 seconds
        console.log("Restarting the code...");
        // Optionally, you can reset any other state here
        window.location.reload(); // Reloads the page to restart everything
    };
};