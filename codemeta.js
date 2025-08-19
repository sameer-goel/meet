const userMeta = {
    "Rama": {
        modaltitle: "Voice Activation Success",
        fullName: "Rama",
        code: "09 14 06 09 14 09 20 05",
        app: "CreativitySolutionLab.html",
        redirectbutton: "Explore Superpowers App",
        redirectlink: "https://updatemind.space/",
        redirectbutton2: "Explore Superpowers App",
        redirectlink2: "https://sameerai.com/04mind/BinuralBeatsApp.html"
    },
    "Krishna": {
        modaltitle: "Presence Activation Success",
        fullName: "Krishna", 
        code: "03 18 05 01 20 09 22 05",
        app: "LeftBrainRightBrain.html",
        redirectbutton: "Explore Digital Consciousness",
        redirectlink: "https://sameerai.com/",
        redirectbutton2: "Explore AI Evolution",
        redirectlink2: "https://www.canva.com/design/DAGv-_RUo00/1gnZCngGrjGoM70sciYgoA/view?utm_content=DAGv-_RUo00&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a930e238d"
    },
    "Hare AI": {
        modaltitle: "Agentic AI Deployed",
        fullName: "AI",
        code: "21 14 09 17 21 05 14 05",
        app: "futureAI.html",
        redirectbutton: "SameerAI Research",
        redirectlink: "https://sameerai.com/pages/research.html",
        redirectbutton2: "Sameerai Developements",
        redirectlink2: "https://sameerai.com/pages/development.html"
    }
};

function getCodeForUser(userName) {
    return userMeta[userName]?.code || "00 00 00 00 00 00 00 00";
}

function getUserData(userName) {
    return userMeta[userName] || null;
}

function getAllUsers() {
    return Object.keys(userMeta).map(key => ({
        key,
        ...userMeta[key]
    }));
}