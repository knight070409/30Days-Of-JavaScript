let survey_options = document.getElementById('survey_options');
let adds = document.getElementById('adds');
let remove = document.getElementById('remove');

adds.onclick = function() {
    let newFields = document.createElement('input');
    newFields.setAttribute('type','text');
    newFields.setAttribute('name','survey_options');
    newFields.setAttribute('class','survey_options[]');
    newFields.setAttribute('size','50');
    newFields.setAttribute('placeholder','Another Fields');

    survey_options.appendChild(newFields);
}

remove.onclick = function() {
    let inputTags = survey_options.getElementsByTagName('input');

    if(inputTags.length>3){
        survey_options.removeChild(inputTags[(inputTags.length) -1]);
    }
}