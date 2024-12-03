document.getElementById('clickMe').addEventListener('click', function() {
    var featureDiv = document.createElement('div');
    featureDiv.textContent = "This is the new feature!";
    document.body.appendChild(featureDiv);
});
