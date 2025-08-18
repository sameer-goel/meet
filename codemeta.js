const userMeta = {
    "Meriem": {
        modaltitle: "Voice Activation Success",
        fullName: "Meriem Jirari",
        code: "09 14 06 09 14 09 20 05",
        app: "CreativitySolutionLab.html",
        redirectbutton: "Explore Superpowers App",
        redirectlink: "https://updatemind.space/"
    },
    "Aram": {
        modaltitle: "Presence Activation Success",
        fullName: "Aram Smith", 
        code: "03 18 05 01 20 09 22 05",
        app: "LeftBrainRightBrain.html",
        redirectbutton: "Explore Digital Consciousness",
        redirectlink: "https://sameerai.com/"
    },
    "Cem": {
        modaltitle: "Agentic AI Deployed",
        fullName: "Cem Kubilay",
        code: "21 14 09 17 21 05 14 05",
        app: "https://sameerai.com/pages/dev.html",
        redirectbutton: "Review Book",
        redirectlink: "https://updatemind.space/bookreader.html"
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