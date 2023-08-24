export const timeInClassCalculator = (numberOfSessions, numberOfbankHolidays = 0) => {
    const singleSession = 2.5; //hours
    let answer = ""; // declare string ready for answer

    // calculations
    const hours = singleSession * (numberOfSessions - numberOfbankHolidays); // gets hours in class
    const days = hours / 24;
    const weeks = days / 7;
    const months = weeks / 4.3;
    const years = months / 12;

    const times = [
        { name: "Hour", value: hours },
        { name: "Day", value: days },
        { name: "Week", value: weeks },
        { name: "Month", value: months },
        { name: "Year", value: months },
    ];

    times.forEach((time) => {
        const roundedTime = Math.round(time.value);
        const presentableTime = Math.round(time.value * 10) / 10;

        if (roundedTime > 1.0) {
            answer = `${presentableTime} ${time.name}s`;
        } else if (roundedTime > 0) {
            answer = `${presentableTime} ${time.name}`;
        }
    });

    // return the most appropriate answer
    return answer;
};
