function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

const cannotHear = "I can\'t hear you!";
const canHear = "YES INDEED!";
const letsHave = "Let\'s have dinner together!";
const loveTo = "I would love to!";

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return (cannotHear);
    }

    if (string === string.toUpperCase()) {
        return (canHear);
    }

    if (string === letsHave) {
        return (loveTo);
    }
}