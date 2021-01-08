$(document).ready(function () {
    const addEmptyCard = (html) => {
        html += '<div class="col press-card filler-card" ><p class="press-card-source"></p><hr/><a href=""><p class="press-card-title"></p></a><p class="press-card-date"></p></div>';
        return html;
    }

    const makeCards = () => {
    // TO ADD ANOTHER CARD, COPY-PASTE THE COMMENTED-OUT TEMPLATE, UNCOMMMENT, FILL IT IN
        const cards = [
            { 
                source: "Western Today",
                href: "https://westerntoday.wwu.edu/features/honors-student-abigayle-peterson-develops-new-wellness-app-for-the-apple-store",
                title: "Honors student Abigayle Peterson develops new wellness app for the Apple Store",
                date: "November 4, 2020"
            },
            {
                source: "Source",
                href: "https://link.edu",
                title: "gkeaogaejewagpijewajie  wewpogjeawopgeawgpie fwqfwqjqwj  johiohoioj hjb wqoifwqijf fne fjwiofjewoi jfeiw fefe",
                date: "Date"
            },
            {
                source: "Western Today",
                href: "https://westerntoday.wwu.edu/features/honors-student-abigayle-peterson-develops-new-wellness-app-for-the-apple-store",
                title: "Honors student Abigayle Peterson develops new wellness app for the Apple Store",
                date: "November 4, 2020"
            },
            // {
            //     source: "Western Today",
            //     href: "https://westerntoday.wwu.edu/features/honors-student-abigayle-peterson-develops-new-wellness-app-for-the-apple-store",
            //     title: "Honors student Abigayle Peterson develops new wellness app for the Apple Store",
            //     date: "November 4, 2020"
            // }
            // COPY THE COMMENT BELOW, PASTE IT ABOVE THIS LINE AS A CARD DATA TEMPLATE
            // {
            //     source: "",
            //     href: "",
            //     title: "",
            //     date: ""
            // },
        ]

        const cardCount = Object.keys(cards).length;
        const rowCount = Math.ceil(cardCount/2);
        console.log(rowCount);
        let cardIndex = 0;
        let html = "<h1>Press</h1>";

        for (let row=0; row<rowCount; row++) {
            html += `
            <div class="row d-xl-flex flex-column flex-lg-row">`
            for (let col=0; col<2; col++) {
                if (cardIndex==cardCount) {
                    html = addEmptyCard(html);
                    break;
                } else {
                    html += `
                    <div class="col press-card">
                        <p class="press-card-source">` + cards[cardIndex].source + `</p>
                        <hr/>
                        <a href="` + cards[cardIndex].href + `">
                            <p class="press-card-title">` + cards[cardIndex].title + `</p>
                        </a>
                        <p class="press-card-date">` + cards[cardIndex].date + `</p>
                    </div>
                    `
                    cardIndex++
                }
            }
            html += `
            </div>`
        }

        $(".container").html(html);
    }

    // LOAD THE HEADER AND FOOTER
    $('#navbar').load('./navbar/navbar.html');
    $('#footer').load('./footer/footer.html');

    makeCards();
}) 