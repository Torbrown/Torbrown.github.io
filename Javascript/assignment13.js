const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  // create a new variable newStory = storyText
  let newStory = storyText;
  //create xItem, yItem, zItem
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  // let xItem = randomValueFromArray(insertX);
  // replace :insertx: :insrty: :insertz:
  newStory = newStory.replace(/:insertx:/g,xItem);
  newStory = newStory.replace(/:inserty:/g,yItem);
  newStory = newStory.replace(/:insertz:/g,zItem);

  if(customName.value !== '') {
    const name = customName.value;

    newStory =newStory.replace(/Bob/g,name)
    // Step 4 - find bob replace name
  }

  if(document.getElementById("uk").checked) {
    // replace "300" in line 32 with conversion formula
    const weight = Math.round(300/14)+' stone';
    // turn weight into string
    // add string and ' stone' together



    const temperature =  Math.round((94-32)*(5/9))+ ' centigrade';
    //convert fahrenheit to centigrade

    // replace values in string with temp and weight var
    newStory = newStory.replace(/300 pounds/g,weight);
    newStory = newStory.replace(/94 fahrenheit/g,temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
