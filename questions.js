const questions = [
    // EUROPE
    {
        question: 'What is the capital of Netherlands?',
        answers: [
            { text: 'Groningen', correct: false},
            { text: 'Amsterdam', correct: true},
            { text: 'Rotterdam', correct: false},
            { text: 'Utrecht', correct: false}
        ]
    },
    {
        question: 'What is the capital of Andorra?',
        answers: [
            { text: 'Canillo', correct: false},
            { text: 'Encamp', correct: false},
            { text: 'Escaldes-Engordany', correct: false},
            { text: 'Andorra la Vella', correct: true}
        ]
    },
    {
        question: 'What is the capital of Greece?',
        answers: [
            { text: 'Athens', correct: true},
            { text: 'Thessaloniki', correct: false},
            { text: 'Heraklion', correct: false},
            { text: 'Patras', correct: false}
        ]
    },
    {
        question: 'What is the capital of Serbia?',
        answers: [
            { text: 'Belgrade', correct: true},
            { text: 'Niš', correct: false},
            { text: 'Novi Sad', correct: false},
            { text: 'Zagreb', correct: false}
        ]
    },
    {
        question: 'What is the capital of Germany?',
        answers: [
            { text: 'Berlin', correct: true},
            { text: 'Munich', correct: false},
            { text: 'Hamburg', correct: false},
            { text: 'Cologne', correct: false}
        ]
    },
    {
        question: 'What is the capital of Switzerland?',
        answers: [
            { text: 'Bern', correct: true},
            { text: 'Basel', correct: false},
            { text: 'Vienna', correct: false},
            { text: 'Geneva', correct: false}
        ]
    },
    {
        question: 'What is the capital of Slovakia?',
        answers: [
            { text: 'Bratislava', correct: true},
            { text: 'Košice', correct: false},
            { text: 'Ljubljana', correct: false},
            { text: 'Geneva', correct: false}
        ]
    },
    {
        question: 'What is the capital of Belgium?',
        answers: [
            { text: 'Brussels', correct: true},
            { text: 'Charleroi', correct: false},
            { text: 'Minsk', correct: false},
            { text: 'Ghent', correct: false}
        ]
    },
    {
        question: 'What is the capital of Romania?',
        answers: [
            { text: 'Bucharest', correct: true},
            { text: 'Timișoara', correct: false},
            { text: 'Cluj-Napoca', correct: false},
            { text: 'Bratislava', correct: false}
        ]
    },
    {
        question: 'What is the capital of Hungary?',
        answers: [
            { text: 'Budapest', correct: true},
            { text: 'Debrecen', correct: false},
            { text: 'Ljubljana', correct: false},
            { text: 'Bratislava', correct: false}
        ]
    },
    {
        question: 'What is the capital of Moldova?',
        answers: [
            { text: 'Chișinău', correct: true},
            { text: 'Bălți', correct: false},
            { text: 'Skopje', correct: false},
            { text: 'Tiraspol', correct: false}
        ]
    },
    {
        question: 'What is the capital of Denmark?',
        answers: [
            { text: 'Copenhagen', correct: true},
            { text: 'Helsinki', correct: false},
            { text: 'Stockholm', correct: false},
            { text: 'Aarhus', correct: false}
        ]
    },
    {
        question: 'What is the capital of Ireland?',
        answers: [
            { text: 'Dublin', correct: true},
            { text: 'Cork', correct: false},
            { text: 'Belfast', correct: false},
            { text: 'Derry', correct: false}
        ]
    },
    {
        question: 'What is the capital of Finland?',
        answers: [
            { text: 'Helsinki', correct: true},
            { text: 'Copenhagen', correct: false},
            { text: 'Espoo', correct: false},
            { text: 'Stockholm', correct: false}
        ]
    },
    {
        question: 'What is the capital of Ukraine?',
        answers: [
            { text: 'Kiev', correct: true},
            { text: 'Kharkiv', correct: false},
            { text: 'Dnipro', correct: false},
            { text: 'Odesa', correct: false}
        ]
    },
    {
        question: 'What is the capital of Portugal?',
        answers: [
            { text: 'Lisbon', correct: true},
            { text: 'Porto', correct: false},
            { text: 'Amadora', correct: false},
            { text: 'Funchal', correct: false}
        ]
    },
    {
        question: 'What is the capital of Slovenia?',
        answers: [
            { text: 'Ljubljana', correct: true},
            { text: 'Maribor', correct: false},
            { text: 'Celje', correct: false},
            { text: 'Bratislava', correct: false}
        ]
    },
    {
        question: 'What is the capital of United Kingdom?',
        answers: [
            { text: 'London', correct: true},
            { text: 'Derby', correct: false},
            { text: 'Manchester', correct: false},
            { text: 'Liverpool', correct: false}
        ]
    },
    {
        question: 'What is the capital of Luxembourg?',
        answers: [
            { text: 'Luxembourg', correct: true},
            { text: 'Vaduz', correct: false},
            { text: 'Diekirch', correct: false},
            { text: 'Wiltz', correct: false}
        ]
    },
    {
        question: 'What is the capital of Spain?',
        answers: [
            { text: 'Madrid', correct: true},
            { text: 'Barcelona', correct: false},
            { text: 'Valencia', correct: false},
            { text: 'Seville', correct: false}
        ]
    },
    {
        question: 'What is the capital of Belarus?',
        answers: [
            { text: 'Minsk', correct: true},
            { text: 'Barysaw', correct: false},
            { text: 'Salihorsk', correct: false},
            { text: 'Slutsk', correct: false}
        ]
    },
    {
        question: 'What is the capital of Monaco?',
        answers: [
            { text: 'Monaco', correct: true},
            { text: 'Paris', correct: false},
            { text: 'Veles', correct: false},
            { text: 'Slutsk', correct: false}
        ]
    },
    {
        question: 'What is the capital of Russia?',
        answers: [
            { text: 'Moscow', correct: true},
            { text: 'Saint Petersburg', correct: false},
            { text: 'Minsk', correct: false},
            { text: 'Kazan', correct: false}
        ]
    },
    {
        question: 'What is the capital of Cyprus?',
        answers: [
            { text: 'Nicosia', correct: true},
            { text: 'Famagusta', correct: false},
            { text: 'Limassol', correct: false},
            { text: 'Paphos', correct: false}
        ]
    },
    {
        question: 'What is the capital of Norway?',
        answers: [
            { text: 'Oslo', correct: true},
            { text: 'Stockholm', correct: false},
            { text: 'Copenhagen', correct: false},
            { text: 'Bergen', correct: false}
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true},
            { text: 'Montpellier', correct: false},
            { text: 'Marseille', correct: false},
            { text: 'Lyon', correct: false}
        ]
    },
    {
        question: 'What is the capital of Montenegro?',
        answers: [
            { text: 'Podgorica', correct: true},
            { text: 'Belgrade', correct: false},
            { text: 'Nikšić', correct: false},
            { text: 'Herceg Novi', correct: false}
        ]
    },
    {
        question: 'What is the capital of Czech Republic?',
        answers: [
            { text: 'Prague', correct: true},
            { text: 'Plzeň', correct: false},
            { text: 'Nový Bor', correct: false},
            { text: 'Bucharest', correct: false}
        ]
    },
    {
        question: 'What is the capital of Iceland?',
        answers: [
            { text: 'Reykjavík', correct: true},
            { text: 'Nuuk', correct: false},
            { text: 'Kópavogur', correct: false},
            { text: 'Nicosia', correct: false}
        ]
    },
    {
        question: 'What is the capital of Latvia?',
        answers: [
            { text: 'Riga', correct: true},
            { text: 'Vilnius', correct: false},
            { text: 'Valmiera', correct: false},
            { text: 'Daugavpils', correct: false}
        ]
    },
    {
        question: 'What is the capital of Italy?',
        answers: [
            { text: 'Rome', correct: true},
            { text: 'Milan', correct: false},
            { text: 'Turin', correct: false},
            { text: 'Bologna', correct: false}
        ]
    },
    {
        question: 'What is the capital of San Marino?',
        answers: [
            { text: 'San Marino', correct: true},
            { text: 'Pistoia', correct: false},
            { text: 'La Spezia', correct: false},
            { text: 'Marsala', correct: false}
        ]
    },
    {
        question: 'What is the capital of Bosnia & Herzegovina?',
        answers: [
            { text: 'Sarajevo', correct: true},
            { text: 'Podgorica', correct: false},
            { text: 'Belgrade', correct: false},
            { text: 'Sofia', correct: false}
        ]
    },
    {
        question: 'What is the capital of Macedonia?',
        answers: [
            { text: 'Skopje', correct: true},
            { text: 'Veles', correct: false},
            { text: 'Belgrade', correct: false},
            { text: 'Bitola', correct: false}
        ]
    },
    {
        question: 'What is the capital of Bulgaria?',
        answers: [
            { text: 'Sofia', correct: true},
            { text: 'Dojran', correct: false},
            { text: 'Burgas', correct: false},
            { text: 'Plovdiv', correct: false}
        ]
    },
    {
        question: 'What is the capital of Sweden?',
        answers: [
            { text: 'Stockholm', correct: true},
            { text: 'Oslo', correct: false},
            { text: 'Edinburgh', correct: false},
            { text: 'Helsinki', correct: false}
        ]
    },
    {
        question: 'What is the capital of Estonia?',
        answers: [
            { text: 'Tallinn', correct: true},
            { text: 'Riga', correct: false},
            { text: 'Tartu', correct: false},
            { text: 'Viljandi', correct: false}
        ]
    },
    {
        question: 'What is the capital of Albania?',
        answers: [
            { text: 'Tirana', correct: true},
            { text: 'Prishtina', correct: false},
            { text: 'Durrës', correct: false},
            { text: 'Pogradec', correct: false}
        ]
    },
    {
        question: 'What is the capital of Liechtenstein?',
        answers: [
            { text: 'Vaduz', correct: true},
            { text: 'Liechtenstein', correct: false},
            { text: 'Bern', correct: false},
            { text: 'Vilnius', correct: false}
        ]
    },
    {
        question: 'What is the capital of Malta?',
        answers: [
            { text: 'Valletta', correct: true},
            { text: 'Nicosia', correct: false},
            { text: 'Senglea', correct: false},
            { text: 'Mdina', correct: false}
        ]
    },
    {
        question: 'What is the capital of Vatican City?',
        answers: [
            { text: 'Vatican City', correct: true},
            { text: 'Rome', correct: false},
            { text: 'Palermo', correct: false},
            { text: 'Vaduz', correct: false}
        ]
    },
    {
        question: 'What is the capital of Austria?',
        answers: [
            { text: 'Vienna', correct: true},
            { text: 'Bern', correct: false},
            { text: 'Salzburg', correct: false},
            { text: 'Graz', correct: false}
        ]
    },
    {
        question: 'What is the capital of Lithuania?',
        answers: [
            { text: 'Vilnius', correct: true},
            { text: 'Riga', correct: false},
            { text: 'Kaunas', correct: false},
            { text: 'Klaipėda', correct: false}
        ]
    },
    {
        question: 'What is the capital of Poland?',
        answers: [
            { text: 'Warsaw', correct: true},
            { text: 'Kraków', correct: false},
            { text: 'Poznań', correct: false},
            { text: 'Wrocław', correct: false}
        ]
    },
    {
        question: 'What is the capital of Croatia?',
        answers: [
            { text: 'Zagreb', correct: true},
            { text: 'Belgrade', correct: false},
            { text: 'Podgorica', correct: false},
            { text: 'Split', correct: false}
        ]
    },
    {
        question: 'What is the capital of Georgia?',
        answers: [
            { text: 'Tbilisi', correct: true},
            { text: 'Batumi', correct: false},
            { text: 'Kutaisi', correct: false},
            { text: 'Rustavi', correct: false}
        ]
    },
    {
        question: 'What is the capital of Azerbaijan?',
        answers: [
            { text: 'Baku', correct: true},
            { text: 'Nur-Sultan', correct: false},
            { text: 'Babek', correct: false},
            { text: 'Tbilisi', correct: false}
        ]
    },
    {
        question: 'What is the capital of Turkey?',
        answers: [
            { text: 'Ankara', correct: true},
            { text: 'Istanbul', correct: false},
            { text: 'İzmir', correct: false},
            { text: 'Bursa', correct: false}
        ]
    },
    {
        question: 'What is the capital of Armenia?',
        answers: [
            { text: 'Yerevan', correct: true},
            { text: 'Baku', correct: false},
            { text: 'Gyumri', correct: false},
            { text: 'Kapan', correct: false}
        ]
    },
    {
        question: 'What is the capital of Kazakhstan?',
        answers: [
            { text: 'Nur-Sultan', correct: true},
            { text: 'Baku', correct: false},
            { text: 'Aktau', correct: false},
            { text: 'Baikonur', correct: false}
        ]
    },
    {
        question: 'What is the capital of Kosovo?',
        answers: [
            { text: 'Prishtina', correct: true},
            { text: 'Tirana', correct: false},
            { text: 'Prizren', correct: false},
            { text: 'Pejë', correct: false}
        ]
    },
]