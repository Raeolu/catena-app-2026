
function timeStringToTimeFloat(timeString) {
    let parts = timeString?.split(':');

    if (!parts || parts.length === 0) {
        return 0;
    }

    let hours = parseInt(parts[0]);
    let minutes = parseInt(parts[1]) || 0;

    return hours + (minutes / 60);
}

function timeFloatToTimeString(timeFloat) {
    let hours = Math.floor(timeFloat);
    let minutes = Math.round((timeFloat - hours) * 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function saveJSON() {
    localStorage.setItem('activities', JSON.stringify(window.activities));

    let key = localStorage.getItem('serverKey');

    if (!key) {
        key = prompt("Enter the key to save to server:", "");
    }
    
    localStorage.setItem('serverKey', key);

    fetch("https://raeolu.com/promo/promo", {
        method: 'POST',
        body: JSON.stringify(window.activities),
        headers: {
            'Authorization': key,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
            alert("Error saving to server: " + response.statusText);
        }
    })
    .then(data => console.log(data))
    .catch(error => alert('Error:', error));
}

async function loadJSONForEditing() {
    let data = await tryLoadJSONFromServer(true);

    if (data) {
        let activitiesData = JSON.parse(data);

        activities = activitiesData.map(activityData => Activity.fromJSON(activityData));
    } else {
        alert("Could not load data from server for editing.");
    }
}

async function loadJSON() {
    let data = await tryLoadJSONFromServer() ?? localStorage.getItem('activities');

    localStorage.setItem("activities", data);

    if (data) {
        let activitiesData = JSON.parse(data);

        activities = activitiesData.map(activityData => Activity.fromJSON(activityData));
    } else {
        activities = [];
    }
}

async function tryLoadJSONFromServer(ignoreLastFetch) {
    let lastFetch = localStorage.getItem('lastFetch');
    let now = new Date();
    
    if (lastFetch && (ignoreLastFetch !== true)) {
        let lastFetchDate = new Date(lastFetch);
        let diffMinutes = (now - lastFetchDate) / 1000 / 60;
        if (diffMinutes < 10) {
            return null;
        }
    }

    try {
        let data = await (await fetch("https://raeolu.com/promo/promo")).text();
        localStorage.setItem('lastFetch', new Date().toISOString());
        return data;
    } catch (error) {
        return null;
    }
}