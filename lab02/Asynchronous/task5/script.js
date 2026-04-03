const bannedCountries = new Set([
    "Russia",
    "Russian Federation",
    "Belarus",
    "Afghanistan",
    "China",
    "Venezuela",
    "Iran"
]);

async function checkIP(ip) {
    const result = await fetch(`https://json.geoiplookup.io/${encodeURIComponent(ip)}`);

    if (!result.ok) {
        throw new Error(`Cannot check IP: ${ip}`);
    }

    const data = await result.json();
    return data.country_name || "";
}

async function main() {
    try {
        for (let index = 0; index < 5; index++) {
            const ip = prompt(`Ваш IP?`);
            const country = await checkIP(ip);

            console.log(ip, country);

            if (bannedCountries.has(country)) {
                alert("Our services are not available in your country");
                return;
            }
        }

        alert("Welcome to our website!");
    } catch (error) {
        alert("ERROR " + error.message);
    }
}

main();
