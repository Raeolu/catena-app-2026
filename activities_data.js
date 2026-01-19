window.activities = activities = [
    {
        title: "Hiking",
        dateDescription: function (activity) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return activity.date.toLocaleDateString("nl-NL", options);
        },
        timeDescription: function (activity) {
            return `${activity.timeStart} - ${activity.timeEnd}`;
        },
        date: new Date(2026, 0, 23),
        timeStart: "10:00",
        timeEnd: "14:00",
        description:
            `
        <ul>
            <li>Bring water and snacks</li>
            <li>Wear comfortable shoes</li>
            <li>Meet at the park entrance</li>
        </ul>
        `,
        short: "Join us for a refreshing hike in the mountains.",
        peopleCount: 5,
        background: "#FF5733"
    },
    {
        title: "Dancing",
        dateDescription: function (activity) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return activity.date.toLocaleDateString("nl-NL", options);
        },
        timeDescription: function (activity) {
            return `${activity.timeStart} - ${activity.timeEnd}`;
        },
        date: new Date(2026, 0, 16),
        timeStart: "10:00",
        timeEnd: "14:00",
        description:
            `
        <ul>
            <li>Bring water and snacks</li>
            <li>Wear comfortable shoes</li>
            <li>Meet at the park entrance</li>
        </ul>
        Also: no dancing experience required! And it's free!<br><br>
        So come on by and have some fun! If you have any questions, feel free to reach out to us.<br><br>
        But we hope to see you there!<br><br>
        And don't forget to bring your friends!<br><br>
        That makes it even more fun!<br><br>
        Also: no dancing experience required! And it's free!<br><br>
        So come on by and have some fun! If you have any questions, feel free to reach out to us.<br><br>
        But we hope to see you there!<br><br>
        And don't forget to bring your friends!<br><br>
        That makes it even more fun!
        `,
        short: "Join us for a refreshing hike in the mountains.",
        peopleCount: 5,
        background: "green"
    },
    {
        title: "Gaming",
        dateDescription: function (activity) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return activity.date.toLocaleDateString("nl-NL", options);
        },
        timeDescription: function (activity) {
            return `${activity.timeStart} - ${activity.timeEnd}`;
        },
        date: new Date(2026, 0, 16),
        timeStart: "09:00",
        timeEnd: "14:00",
        description:
            `
        Gaming session at the community center.
        `,
        short: "Join us for a fun gaming session.",
        peopleCount: 15,
        background: "blue"
    },
    {
        title: "Cooking Class",
        dateDescription: function (activity) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return activity.date.toLocaleDateString("nl-NL", options);
        },
        timeDescription: function (activity) {
            return `${activity.timeStart} - ${activity.timeEnd}`;
        },
        date: new Date(2026, 0, 20),
        timeStart: "15:00",
        timeEnd: "17:00",
        description:
            `
        Learn to cook delicious meals with our expert chefs.
        `,
        short: "Join us for a cooking class.",
        peopleCount: 8,
        background: "purple"
    }
];