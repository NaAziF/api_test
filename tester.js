

function tester() {
    let url = "https://brc.api.vweb.app/create";
        let body = {
            first_name: "Faizan",
            last_name: "DAr",
            username: "Naza@211234",
            date_of_birth: 1660808194445,
            age: 19,
            email: "Sasa@ads.com",
            married: 0,
            experience: 5,
            yearly_income: 1500000,
            attributes: [
                {
                    title: "Developer",
                    description: "i am a developer and i am learning the web development"
                }
            ]

        };
    let parsed = JSON.stringify(body);
    let parm = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: parsed
    };
    fetch(url, parm)
        .then((response) => response.json())
        .then((json)     => console.log(json))
        .catch((err)     => console.log(err))
}
