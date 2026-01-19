class Activity {
    title;
    date;
    timeStart;
    timeEnd;
    description;
    short;
    peopleCount;

    dateDescription(activity) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return activity.date.toLocaleDateString("nl-NL", options);
    }

    timeDescription(activity) {
        return `${activity.timeStart} - ${activity.timeEnd}`;
    }

    constructor(title, date, timeStart, timeEnd, description, short) {
        this.title = title;
        this.date = date;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.description = description;
        this.short = short;
        this.peopleCount = 0;
    }

    static fromJSON(data) {
        let activity = new Activity(
            data.title,
            new Date(data.date),
            data.timeStart,
            data.timeEnd,
            data.description,
            data.short
        );

        activity.peopleCount = data.peopleCount || 0;

        return activity;
    }
}