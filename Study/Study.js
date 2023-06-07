$(document).ready(function () {
  var textString = `DEEPFAKE DETECTION IN PROGRESS...
    ...
    .:: Loading video frames ::
    ...
    [██████████████████████████████████] 100%
    ...
    .:: Extracting facial landmarks ::
    ...
    [██████████████████████████████████] 100%
    ...
    .:: Analyzing facial expressions ::
    ...
    [██████████████████████████████████] 100%
    ...
    .:: Identifying digital artifacts ::
    ...
    [██████████████████████████████████] 100%
    ...
    .:: Examining eye blinking patterns ::
    ...
    [██████████████████████████████████] 100%
    ...
    .:: Assessing speech-to-lip sync ::
    ...
    [██████████████████████████████████] 100%
    ...
    .:: Analyzing inconsistency in lighting ::
    ...
    [██████████████████████████████████] 100%
    ...
    .:: Evaluating facial movement anomalies ::
    ...
    [██████████████████████████████████] 100%
    ...
    DEEPFAKE DETECTION COMPLETE:
    - Video Frames Analyzed
    - Facial Landmarks Detected
    - Facial Expression Consistency
    - Digital Artifacts Identified
    - Eye Blinking Patterns
    - Speech-to-Lip Sync Accuracy
    - Lighting Consistency
    - Facial Movement Anomalies
    ...
    .:: Generating Detection Report ::
    ...
    [██████████████████████████████████] 100%
    ...
    DEEPFAKE DETECTION REPORT GENERATED.`;

  let interval;

  function startHackingAnimation() {
    const textArray = textString.split("");
    const textElem = $(".hacking-animation__text");

    let count = 0;

    interval = setInterval(() => {
      if (textArray[count] === "\n") {
        textElem.append("<br>");
      } else {
        textElem.append(
          `<span class="hacking-animation__character">${textArray[count]}</span>`
        );
      }
      count++;
      if (count === textArray.length) {
        clearInterval(interval);
      }

      textElem.scrollTop(textElem[0].scrollHeight);
    }, 20);
  }

  function resetHackingAnimation() {
    clearInterval(interval);
    $(".hacking-animation__text").empty();
  }
});
