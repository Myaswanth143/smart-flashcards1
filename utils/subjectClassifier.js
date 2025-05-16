// utils/subjectClassifier.js

function classifySubject(text) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("photosynthesis") || lowerText.includes("cell")) {
    return "Biology";
  } else if (lowerText.includes("newton") || lowerText.includes("force")) {
    return "Physics";
  } else if (lowerText.includes("equation") || lowerText.includes("algebra")) {
    return "Mathematics";
  } else {
    return "General";
  }
}

module.exports = classifySubject;
