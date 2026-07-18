const countries = [
  {
    "name": "Argentina",
    "colors": [
      [
        "Sky blue",
        50,
        "#75aadb"
      ],
      [
        "White",
        42,
        "#ffffff"
      ],
      [
        "Yellow",
        8,
        "#f6bd38"
      ]
    ],
    "continent": "South America",
    "population": "4.0 million",
    "border": "It borders Bolivia, Brazil, Chile, Paraguay, Uruguay, and United Kingdom.",
    "capital": "Buenos Aires"
  },
  {
    "name": "Belgium",
    "colors": [
      [
        "Red",
        34,
        "#d13a32"
      ],
      [
        "Black",
        33,
        "#181818"
      ],
      [
        "Yellow",
        33,
        "#f8d047"
      ]
    ],
    "continent": "Europe",
    "population": "11.2 million",
    "border": "It borders Germany, Luxembourg, France, Netherlands, Neutral Moresnet, Nazi Germany, and United Kingdom.",
    "capital": "Brussels"
  },
  {
    "name": "Brazil",
    "colors": [
      [
        "Green",
        54,
        "#229e52"
      ],
      [
        "Yellow",
        27,
        "#ffdc36"
      ],
      [
        "Blue",
        12,
        "#254aa5"
      ],
      [
        "White",
        7,
        "#ffffff"
      ]
    ],
    "continent": "South America",
    "population": "202.7 million",
    "border": "It borders Argentina, Bolivia, French Guiana, Guyana, Paraguay, Peru, Suriname, Uruguay, Venezuela, Colombia, France, Gran Colombia, and European Union.",
    "capital": "Brasília"
  },
  {
    "name": "Canada",
    "colors": [
      [
        "White",
        58,
        "#ffffff"
      ],
      [
        "Red",
        42,
        "#d52b1e"
      ]
    ],
    "continent": "North America",
    "population": "38.2 million",
    "border": "It borders United States, Saint Pierre and Miquelon, Kingdom of Denmark, Dominion of Newfoundland, Rupert's Land, Colony of British Columbia, British Arctic Territories, Prince Edward Island, and Greenland.",
    "capital": "Ottawa"
  },
  {
    "name": "Chile",
    "colors": [
      [
        "White",
        43,
        "#ffffff"
      ],
      [
        "Red",
        43,
        "#d52b1e"
      ],
      [
        "Blue",
        14,
        "#0039a6"
      ]
    ],
    "continent": "South America",
    "population": "7.6 million",
    "border": "It borders Argentina, Bolivia, and Peru.",
    "capital": "Santiago"
  },
  {
    "name": "Colombia",
    "colors": [
      [
        "Yellow",
        50,
        "#f7d117"
      ],
      [
        "Blue",
        25,
        "#224fa0"
      ],
      [
        "Red",
        25,
        "#d52b1e"
      ]
    ],
    "continent": "South America",
    "population": "16.0 million",
    "border": "It borders Ecuador, Panama, Peru, Venezuela, Brazil, and Nicaragua.",
    "capital": "Bogotá"
  },
  {
    "name": "France",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Blue",
        33,
        "#1d45a0"
      ],
      [
        "Red",
        33,
        "#e23d35"
      ]
    ],
    "continent": "Europe",
    "population": "40.7 million",
    "border": "It borders Spain, Andorra, Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Brazil, Suriname, Kingdom of the Netherlands, United Kingdom, Kingdom of the Netherlands, Republic of Saint-Malo, Venezuela, Kingdom of Westphalia, West Germany, Navarre, Mauritius, Solomon Islands, and realm of the United Kingdom.",
    "capital": "Paris"
  },
  {
    "name": "Germany",
    "colors": [
      [
        "Yellow",
        34,
        "#ffce38"
      ],
      [
        "Black",
        33,
        "#1c1c1c"
      ],
      [
        "Red",
        33,
        "#d33632"
      ]
    ],
    "continent": "Europe",
    "population": "70.9 million",
    "border": "It borders Denmark, Poland, Switzerland, France, Luxembourg, Belgium, Netherlands, Austria, Czech Republic, Czechoslovakia, German Democratic Republic, Saar Protectorate, Kingdom of the Netherlands, Kingdom of Denmark, Benelux, United Kingdom, and Sweden.",
    "capital": "Berlin"
  },
  {
    "name": "Greece",
    "colors": [
      [
        "Blue",
        50,
        "#2167ae"
      ],
      [
        "White",
        50,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "9.7 million",
    "border": "It borders Albania, Bulgaria, North Macedonia, Turkey, Yugoslavia, and Middle East.",
    "capital": "Athens"
  },
  {
    "name": "India",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Saffron",
        33,
        "#ff9933"
      ],
      [
        "Green",
        33,
        "#138808"
      ]
    ],
    "continent": "Asia",
    "population": "449.6 million",
    "border": "It borders Nepal, Bangladesh, Bhutan, Myanmar, Pakistan, People's Republic of China, Indonesia, Sri Lanka, and Afghanistan.",
    "capital": "New Delhi"
  },
  {
    "name": "Italy",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Green",
        33,
        "#009246"
      ],
      [
        "Red",
        33,
        "#ce2b37"
      ]
    ],
    "continent": "Europe",
    "population": "50.2 million",
    "border": "It borders San Marino, Vatican City, France, Switzerland, Yugoslavia, Austria, Slovenia, Malta, Adriatic Sea, and Algeria.",
    "capital": "Rome"
  },
  {
    "name": "Jamaica",
    "colors": [
      [
        "Green",
        42,
        "#009b3a"
      ],
      [
        "Black",
        42,
        "#111111"
      ],
      [
        "Yellow",
        16,
        "#fed100"
      ]
    ],
    "continent": "North America",
    "population": "3.0 million",
    "border": "It borders United Kingdom.",
    "capital": "Kingston"
  },
  {
    "name": "Japan",
    "colors": [
      [
        "White",
        87,
        "#ffffff"
      ],
      [
        "Red",
        13,
        "#bc002d"
      ]
    ],
    "continent": "Asia",
    "population": "125.6 million",
    "border": "It borders Russia, South Korea, Taiwan, People's Republic of China, United States, Philippines, and Soviet Union.",
    "capital": "Tokyo"
  },
  {
    "name": "Mexico",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Green",
        33,
        "#006847"
      ],
      [
        "Red",
        33,
        "#ce1126"
      ]
    ],
    "continent": "North America",
    "population": "112.3 million",
    "border": "It borders Guatemala, Belize, and United States.",
    "capital": "Mexico City"
  },
  {
    "name": "Nigeria",
    "colors": [
      [
        "Green",
        67,
        "#008753"
      ],
      [
        "White",
        33,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "211.4 million",
    "border": "It borders Benin, Niger, Chad, Cameroon, and São Tomé and Príncipe.",
    "capital": "Abuja"
  },
  {
    "name": "South Africa",
    "colors": [
      [
        "Green",
        25,
        "#007a4d"
      ],
      [
        "Red",
        21,
        "#de3831"
      ],
      [
        "Blue",
        21,
        "#002395"
      ],
      [
        "White",
        13,
        "#ffffff"
      ],
      [
        "Black",
        12,
        "#111111"
      ],
      [
        "Yellow",
        8,
        "#ffb612"
      ]
    ],
    "continent": "Africa",
    "population": "51.8 million",
    "border": "It borders Namibia, Botswana, Lesotho, Zimbabwe, Eswatini, and Mozambique.",
    "capital": "Pretoria (executive)"
  },
  {
    "name": "Sweden",
    "colors": [
      [
        "Blue",
        74,
        "#006aa7"
      ],
      [
        "Yellow",
        26,
        "#fecc00"
      ]
    ],
    "continent": "Europe",
    "population": "10.2 million",
    "border": "It borders Finland, Norway, Denmark, Polish–Lithuanian Commonwealth, Estonia, Russia, Latvia, Lithuania, Poland, and Germany.",
    "capital": "Stockholm"
  },
  {
    "name": "Thailand",
    "colors": [
      [
        "Blue",
        40,
        "#2d2a4a"
      ],
      [
        "Red",
        32,
        "#a51931"
      ],
      [
        "White",
        28,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "30.4 million",
    "border": "It borders Laos, Cambodia, Malaysia, and Myanmar.",
    "capital": "Bangkok"
  },
  {
    "name": "Ukraine",
    "colors": [
      [
        "Blue",
        50,
        "#0057b7"
      ],
      [
        "Yellow",
        50,
        "#ffd700"
      ]
    ],
    "continent": "Europe",
    "population": "42.8 million",
    "border": "It borders Belarus, Poland, Slovakia, Hungary, Romania, Moldova, Russia, Czechoslovakia, European Union, Turkey, Luhansk People's Republic, Donetsk People's Republic, and Transnistria.",
    "capital": "Kyiv"
  },
  {
    "name": "United Kingdom",
    "colors": [
      [
        "Blue",
        58,
        "#012169"
      ],
      [
        "White",
        23,
        "#ffffff"
      ],
      [
        "Red",
        19,
        "#c8102e"
      ]
    ],
    "continent": "Europe",
    "population": "63.2 million",
    "border": "It borders Ireland, France, Denmark, European Union, Germany, Belgium, and Norway.",
    "capital": "London"
  },
  {
    "name": "Australia",
    "colors": [
      [
        "Blue",
        61,
        "#012169"
      ],
      [
        "White",
        24,
        "#ffffff"
      ],
      [
        "Red",
        15,
        "#c8102e"
      ]
    ],
    "continent": "Oceania",
    "population": "23.1 million",
    "border": "It borders Indonesia, New Zealand, Papua New Guinea, Timor-Leste, Solomon Islands, New Caledonia, and Vanuatu.",
    "capital": "Canberra"
  },
  {
    "name": "Austria",
    "colors": [
      [
        "Red",
        67,
        "#ed2939"
      ],
      [
        "White",
        33,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "8.6 million",
    "border": "It borders Italy, Liechtenstein, Switzerland, Czech Republic, Hungary, Slovakia, Slovenia, Germany, Czechoslovakia, Socialist Federal Republic of Yugoslavia, Democratic Federal Yugoslavia, Yugoslavia, and West Germany.",
    "capital": "Vienna"
  },
  {
    "name": "Bangladesh",
    "colors": [
      [
        "Green",
        82,
        "#006a4e"
      ],
      [
        "Red",
        18,
        "#f42a41"
      ]
    ],
    "continent": "Asia",
    "population": "49.5 million",
    "border": "It borders Myanmar and India.",
    "capital": "Dhaka"
  },
  {
    "name": "China",
    "colors": [
      [
        "Red",
        91,
        "#de2910"
      ],
      [
        "Yellow",
        9,
        "#ffde00"
      ]
    ],
    "continent": "Asia",
    "population": "1.4 billion",
    "border": "It borders Mongolia, Kazakhstan, Kyrgyzstan, Tajikistan, Pakistan, India, Nepal, Bhutan, Myanmar, Laos, Vietnam, Russia, North Korea, Afghanistan, South Korea, Japan, Soviet Union, and Taiwan.",
    "capital": "Beijing"
  },
  {
    "name": "Costa Rica",
    "colors": [
      [
        "Red",
        48,
        "#ce1126"
      ],
      [
        "White",
        28,
        "#ffffff"
      ],
      [
        "Blue",
        24,
        "#002b7f"
      ]
    ],
    "continent": "North America",
    "population": "1.3 million",
    "border": "It borders Panama and Nicaragua.",
    "capital": "San José"
  },
  {
    "name": "Denmark",
    "colors": [
      [
        "Red",
        75,
        "#c60c30"
      ],
      [
        "White",
        25,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "5.6 million",
    "border": "It borders Sweden, Norway, United Kingdom, Germany, and European Union.",
    "capital": "Copenhagen"
  },
  {
    "name": "Egypt",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Red",
        33,
        "#ce1126"
      ],
      [
        "Black",
        33,
        "#000000"
      ]
    ],
    "continent": "Africa",
    "population": "28.0 million",
    "border": "It borders Sudan, Libya, Israel, Palestine, Bir Tawil, and Levant.",
    "capital": "Cairo"
  },
  {
    "name": "Finland",
    "colors": [
      [
        "White",
        70,
        "#ffffff"
      ],
      [
        "Blue",
        30,
        "#003580"
      ]
    ],
    "continent": "Europe",
    "population": "5.5 million",
    "border": "It borders Sweden, Norway, Russia, and Soviet Union.",
    "capital": "Helsinki"
  },
  {
    "name": "Hungary",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Red",
        33,
        "#ce2939"
      ],
      [
        "Green",
        33,
        "#477050"
      ]
    ],
    "continent": "Europe",
    "population": "10.0 million",
    "border": "It borders Slovakia, Ukraine, Romania, Serbia, Croatia, Slovenia, Austria, Czechoslovakia, Socialist Federal Republic of Yugoslavia, Soviet Union, Yugoslavia, and European Union.",
    "capital": "Budapest"
  },
  {
    "name": "Indonesia",
    "colors": [
      [
        "Red",
        50,
        "#ce1126"
      ],
      [
        "White",
        50,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "88.7 million",
    "border": "It borders Timor-Leste, Malaysia, Papua New Guinea, Singapore, Philippines, Australia, Thailand, India, Palau, and Vietnam.",
    "capital": "Jakarta"
  },
  {
    "name": "Ireland",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Green",
        33,
        "#169b62"
      ],
      [
        "Orange",
        33,
        "#ff883e"
      ]
    ],
    "continent": "Europe",
    "population": "7.2 million",
    "border": "It has no land borders.",
    "capital": "Dublin"
  },
  {
    "name": "Kenya",
    "colors": [
      [
        "Red",
        30,
        "#bb0000"
      ],
      [
        "Black",
        25,
        "#000000"
      ],
      [
        "Green",
        25,
        "#006600"
      ],
      [
        "White",
        20,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "8.1 million",
    "border": "It borders Ethiopia, Somalia, Tanzania, Uganda, South Sudan, Sudan, League of Arab States, and Lake Victoria.",
    "capital": "Nairobi"
  },
  {
    "name": "Netherlands",
    "colors": [
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Red",
        33,
        "#ae1c28"
      ],
      [
        "Blue",
        33,
        "#21468b"
      ]
    ],
    "continent": "Europe",
    "population": "17.9 million",
    "border": "It borders Germany, Belgium, and Nazi Germany.",
    "capital": "Amsterdam"
  },
  {
    "name": "Norway",
    "colors": [
      [
        "Red",
        65,
        "#ba0c2f"
      ],
      [
        "White",
        21,
        "#ffffff"
      ],
      [
        "Blue",
        14,
        "#00205b"
      ]
    ],
    "continent": "Europe",
    "population": "3.6 million",
    "border": "It borders Sweden, Finland, Russia, Denmark, European Union, United Kingdom, and Greenland.",
    "capital": "Oslo"
  },
  {
    "name": "Pakistan",
    "colors": [
      [
        "Green",
        75,
        "#01411c"
      ],
      [
        "White",
        25,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "45.5 million",
    "border": "It borders Afghanistan, India, People's Republic of China, and Iran.",
    "capital": "Islamabad"
  },
  {
    "name": "Peru",
    "colors": [
      [
        "Red",
        67,
        "#d91023"
      ],
      [
        "White",
        33,
        "#ffffff"
      ]
    ],
    "continent": "South America",
    "population": "9.9 million",
    "border": "It borders Ecuador, Colombia, Bolivia, Brazil, Chile, and Gran Colombia.",
    "capital": "Lima"
  },
  {
    "name": "Philippines",
    "colors": [
      [
        "Blue",
        38,
        "#0038a8"
      ],
      [
        "Red",
        38,
        "#ce1126"
      ],
      [
        "White",
        18,
        "#ffffff"
      ],
      [
        "Yellow",
        3,
        "#fcd116"
      ],
      [
        "Green",
        3,
        "#007a33"
      ]
    ],
    "continent": "Asia",
    "population": "1.5 million",
    "border": "It borders People's Republic of China, Indonesia, Japan, Malaysia, Palau, and Taiwan.",
    "capital": "Manila"
  },
  {
    "name": "Poland",
    "colors": [
      [
        "White",
        50,
        "#ffffff"
      ],
      [
        "Red",
        50,
        "#dc143c"
      ]
    ],
    "continent": "Europe",
    "population": "29.6 million",
    "border": "It borders Czech Republic, Germany, Ukraine, Slovakia, Belarus, Lithuania, German Democratic Republic, Czechoslovakia, Soviet Union, Romania, Latvia, Slovak Republic, Free City of Danzig, Russia, European Union, Sweden, and Lithuania.",
    "capital": "Warsaw"
  },
  {
    "name": "Portugal",
    "colors": [
      [
        "Red",
        55,
        "#ff0000"
      ],
      [
        "Green",
        40,
        "#006600"
      ],
      [
        "Yellow",
        5,
        "#ffcc00"
      ]
    ],
    "continent": "Europe",
    "population": "10.3 million",
    "border": "It borders Spain.",
    "capital": "Lisbon"
  },
  {
    "name": "South Korea",
    "colors": [
      [
        "White",
        79,
        "#ffffff"
      ],
      [
        "Red",
        8,
        "#cd2e3a"
      ],
      [
        "Blue",
        8,
        "#0047a0"
      ],
      [
        "Black",
        5,
        "#000000"
      ]
    ],
    "continent": "Asia",
    "population": "25.0 million",
    "border": "It borders North Korea, People's Republic of China, and Japan.",
    "capital": "Seoul"
  },
  {
    "name": "Spain",
    "colors": [
      [
        "Red",
        50,
        "#aa151b"
      ],
      [
        "Yellow",
        50,
        "#f1bf00"
      ]
    ],
    "continent": "Europe",
    "population": "30.5 million",
    "border": "It borders Andorra, Portugal, Morocco, France, Mauritania, European Union, Gibraltar, League of Arab States, Kingdom of Portugal, Algeria, United Kingdom, and Kingdom of Patones.",
    "capital": "Madrid"
  },
  {
    "name": "Switzerland",
    "colors": [
      [
        "Red",
        83,
        "#d52b1e"
      ],
      [
        "White",
        17,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "5.3 million",
    "border": "It borders Austria, Liechtenstein, Germany, France, Italy, Austria–Hungary, West Germany, Austrian Empire, European Union, and Nazi Germany.",
    "capital": "Bern"
  },
  {
    "name": "Türkiye",
    "colors": [
      [
        "Red",
        88,
        "#e30a17"
      ],
      [
        "White",
        12,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "27.6 million",
    "border": "It borders Greece, Bulgaria, Syria, Iraq, Armenia, Iran, Georgia, Azerbaijan, League of Arab States, Nakhchivan Autonomous Republic, Soviet Union, Kingdom of Bulgaria, Mandatory Iraq, State of Aleppo, State of Syria, First Syrian Republic, Second Syrian Republic, United Arab Republic, European Union, Ukraine, Cyprus, and Northern Cyprus.",
    "capital": "Ankara"
  },
  {
    "name": "United States",
    "colors": [
      [
        "White",
        43,
        "#ffffff"
      ],
      [
        "Red",
        40,
        "#b22234"
      ],
      [
        "Blue",
        17,
        "#3c3b6e"
      ]
    ],
    "continent": "North America",
    "population": "3.9 million",
    "border": "It borders Mexico, Canada, Russia, Cuba, Panama, The Bahamas, Venezuela, British North America, Dominican Republic, Federated States of Micronesia, Japan, Kiribati, Haiti, Samoa, Tonga, Soviet Union, and Russian Empire.",
    "capital": "Washington, D.C."
  },
  {
    "name": "Afghanistan",
    "colors": [
      [
        "White",
        89,
        "#ffffff"
      ],
      [
        "Gray",
        8,
        "#a8a8a8"
      ],
      [
        "Blue",
        3,
        "#c0c0c0"
      ]
    ],
    "continent": "Asia",
    "population": "31.8 million",
    "border": "It borders Pakistan, Iran, Turkmenistan, Uzbekistan, Tajikistan, People's Republic of China, Soviet Union, and India.",
    "capital": "Kabul"
  },
  {
    "name": "Albania",
    "colors": [
      [
        "Red",
        91,
        "#ff0000"
      ],
      [
        "Black",
        9,
        "#000000"
      ]
    ],
    "continent": "Europe",
    "population": "1.6 million",
    "border": "It borders Greece, North Macedonia, Serbia, Montenegro, European Union, Kosovo, and Yugoslavia.",
    "capital": "Tirana"
  },
  {
    "name": "Algeria",
    "colors": [
      [
        "White",
        48,
        "#ffffff"
      ],
      [
        "Green",
        46,
        "#006030"
      ],
      [
        "Red",
        4,
        "#d81830"
      ],
      [
        "Gray",
        2,
        "#307860"
      ]
    ],
    "continent": "Africa",
    "population": "38.8 million",
    "border": "It borders Morocco, Libya, Niger, Mali, Tunisia, Mauritania, Western Sahara, Italy, and Spain.",
    "capital": "Algiers"
  },
  {
    "name": "Andorra",
    "colors": [
      [
        "Blue",
        34,
        "#1800a8"
      ],
      [
        "Red",
        34,
        "#d80030"
      ],
      [
        "Yellow",
        30,
        "#ffd800"
      ],
      [
        "Gray",
        2,
        "#a89060"
      ]
    ],
    "continent": "Europe",
    "population": "77,000",
    "border": "It borders France, Spain, and European Union.",
    "capital": "Andorra la Vella"
  },
  {
    "name": "Angola",
    "colors": [
      [
        "Red",
        49,
        "#d80030"
      ],
      [
        "Black",
        47,
        "#000000"
      ],
      [
        "Yellow",
        3,
        "#ffc000"
      ],
      [
        "Brown",
        1,
        "#600018"
      ]
    ],
    "continent": "Africa",
    "population": "5.0 million",
    "border": "It borders Namibia, Democratic Republic of the Congo, Zambia, Republic of the Congo, and Gabon.",
    "capital": "Luanda"
  },
  {
    "name": "Antigua and Barbuda",
    "colors": [
      [
        "Red",
        52,
        "#d81830"
      ],
      [
        "Black",
        27,
        "#000000"
      ],
      [
        "Blue",
        10,
        "#0078c0"
      ],
      [
        "White",
        7,
        "#ffffff"
      ],
      [
        "Yellow",
        4,
        "#ffd818"
      ]
    ],
    "continent": "North America",
    "population": "54,681",
    "border": "It borders United Kingdom and realm of the United Kingdom.",
    "capital": "St. John's"
  },
  {
    "name": "Armenia",
    "colors": [
      [
        "Red",
        32,
        "#d80018"
      ],
      [
        "Blue",
        32,
        "#0030a8"
      ],
      [
        "Yellow",
        32,
        "#f0a800"
      ],
      [
        "Brown",
        4,
        "#901830"
      ]
    ],
    "continent": "Asia",
    "population": "1.9 million",
    "border": "It borders Iran, Turkey, Azerbaijan, Georgia, Nakhchivan Autonomous Republic, and Karki.",
    "capital": "Yerevan"
  },
  {
    "name": "Azerbaijan",
    "colors": [
      [
        "Blue",
        33,
        "#00c0d8"
      ],
      [
        "Green",
        33,
        "#48a830"
      ],
      [
        "Red",
        30,
        "#f03048"
      ],
      [
        "Brown",
        2,
        "#907830"
      ],
      [
        "Gray",
        2,
        "#4890a8"
      ]
    ],
    "continent": "Asia",
    "population": "3.9 million",
    "border": "It borders Armenia, Iran, Turkey, Russia, and Georgia.",
    "capital": "Baku"
  },
  {
    "name": "Bahrain",
    "colors": [
      [
        "Red",
        68,
        "#d83018"
      ],
      [
        "White",
        31,
        "#ffffff"
      ],
      [
        "Yellow",
        1,
        "#f09090"
      ]
    ],
    "continent": "Asia",
    "population": "160,691",
    "border": "It borders Saudi Arabia and Iran.",
    "capital": "Manama"
  },
  {
    "name": "Barbados",
    "colors": [
      [
        "Blue",
        67,
        "#003078"
      ],
      [
        "Yellow",
        28,
        "#ffc030"
      ],
      [
        "Black",
        5,
        "#000000"
      ]
    ],
    "continent": "North America",
    "population": "230,858",
    "border": "It has no land borders.",
    "capital": "Bridgetown"
  },
  {
    "name": "Belarus",
    "colors": [
      [
        "Red",
        66,
        "#d81818"
      ],
      [
        "Green",
        30,
        "#007830"
      ],
      [
        "Brown",
        2,
        "#486030"
      ],
      [
        "White",
        1,
        "#f0d8d8"
      ],
      [
        "Yellow",
        1,
        "#d87878"
      ]
    ],
    "continent": "Europe",
    "population": "9.5 million",
    "border": "It borders Latvia, Lithuania, Poland, Ukraine, Russia, and European Union.",
    "capital": "Minsk"
  },
  {
    "name": "Belize",
    "colors": [
      [
        "Blue",
        72,
        "#181890"
      ],
      [
        "Red",
        23,
        "#d81818"
      ],
      [
        "White",
        4,
        "#f0f0f0"
      ],
      [
        "Gray",
        1,
        "#90c078"
      ]
    ],
    "continent": "North America",
    "population": "324,528",
    "border": "It borders Guatemala, Mexico, and Melchor de Mencos.",
    "capital": "Belmopan"
  },
  {
    "name": "Benin",
    "colors": [
      [
        "Green",
        40,
        "#009048"
      ],
      [
        "Yellow",
        30,
        "#ffd818"
      ],
      [
        "Red",
        30,
        "#f01830"
      ]
    ],
    "continent": "Africa",
    "population": "5.0 million",
    "border": "It borders Burkina Faso, Niger, Nigeria, and Togo.",
    "capital": "Porto-Novo"
  },
  {
    "name": "Bhutan",
    "colors": [
      [
        "Yellow",
        47,
        "#ffd800"
      ],
      [
        "Orange",
        42,
        "#ff6018"
      ],
      [
        "White",
        11,
        "#f0f0f0"
      ]
    ],
    "continent": "Asia",
    "population": "224,155",
    "border": "It borders People's Republic of China and India.",
    "capital": "Thimphu"
  },
  {
    "name": "Bolivia",
    "colors": [
      [
        "Green",
        36,
        "#007830"
      ],
      [
        "Red",
        34,
        "#d81818"
      ],
      [
        "Yellow",
        27,
        "#f0f048"
      ],
      [
        "Orange",
        3,
        "#d84818"
      ]
    ],
    "continent": "South America",
    "population": "3.4 million",
    "border": "It borders Argentina, Brazil, Chile, Paraguay, and Peru.",
    "capital": "Sucre"
  },
  {
    "name": "Bosnia and Herzegovina",
    "colors": [
      [
        "Blue",
        73,
        "#001890"
      ],
      [
        "Yellow",
        24,
        "#ffc000"
      ],
      [
        "White",
        2,
        "#ffffff"
      ],
      [
        "Gray",
        1,
        "#907848"
      ]
    ],
    "continent": "Europe",
    "population": "3.5 million",
    "border": "It borders Montenegro, Croatia, Serbia, and European Union.",
    "capital": "Sarajevo"
  },
  {
    "name": "Botswana",
    "colors": [
      [
        "Blue",
        77,
        "#78a8d8"
      ],
      [
        "Black",
        16,
        "#000000"
      ],
      [
        "White",
        7,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "524,173",
    "border": "It borders Namibia, South Africa, Zambia, and Zimbabwe.",
    "capital": "Gaborone"
  },
  {
    "name": "Brunei",
    "colors": [
      [
        "Yellow",
        60,
        "#f0d818"
      ],
      [
        "White",
        21,
        "#ffffff"
      ],
      [
        "Black",
        17,
        "#000000"
      ],
      [
        "Red",
        1,
        "#d81830"
      ],
      [
        "Orange",
        1,
        "#d84818"
      ]
    ],
    "continent": "Asia",
    "population": "81,817",
    "border": "It borders Malaysia.",
    "capital": "Bandar Seri Begawan"
  },
  {
    "name": "Bulgaria",
    "colors": [
      [
        "White",
        33,
        "#ffffff"
      ],
      [
        "Green",
        33,
        "#009078"
      ],
      [
        "Red",
        34,
        "#d83018"
      ]
    ],
    "continent": "Europe",
    "population": "7.9 million",
    "border": "It borders Romania, Turkey, Greece, North Macedonia, Serbia, Black Sea, Soviet Union, Yugoslavia, European Union, and Middle East.",
    "capital": "Sofia"
  },
  {
    "name": "Burkina Faso",
    "colors": [
      [
        "Green",
        49,
        "#00a848"
      ],
      [
        "Red",
        49,
        "#f03030"
      ],
      [
        "Brown",
        1,
        "#786030"
      ],
      [
        "Yellow",
        1,
        "#ffd818"
      ]
    ],
    "continent": "Africa",
    "population": "4.8 million",
    "border": "It borders Benin, Ivory Coast, Ghana, Mali, Niger, and Togo.",
    "capital": "Ouagadougou"
  },
  {
    "name": "Burundi",
    "colors": [
      [
        "White",
        35,
        "#ffffff"
      ],
      [
        "Green",
        34,
        "#48a830"
      ],
      [
        "Red",
        31,
        "#c01830"
      ]
    ],
    "continent": "Africa",
    "population": "2.8 million",
    "border": "It borders Democratic Republic of the Congo, Rwanda, and Tanzania.",
    "capital": "Gitega"
  },
  {
    "name": "Cabo Verde",
    "colors": [
      [
        "Blue",
        76,
        "#003090"
      ],
      [
        "White",
        15,
        "#ffffff"
      ],
      [
        "Red",
        8,
        "#d81830"
      ],
      [
        "Gray",
        1,
        "#3060a8"
      ]
    ],
    "continent": "Africa",
    "population": "212,247",
    "border": "It has no land borders.",
    "capital": "Praia"
  },
  {
    "name": "Cambodia",
    "colors": [
      [
        "Blue",
        54,
        "#0030a8"
      ],
      [
        "Red",
        40,
        "#d80030"
      ],
      [
        "White",
        3,
        "#d8d8d8"
      ],
      [
        "Gray",
        3,
        "#a8a8a8"
      ]
    ],
    "continent": "Asia",
    "population": "5.7 million",
    "border": "It borders Laos, Thailand, Vietnam, and Mekong Delta.",
    "capital": "Phnom Penh"
  },
  {
    "name": "Cameroon",
    "colors": [
      [
        "Yellow",
        34,
        "#ffd818"
      ],
      [
        "Green",
        33,
        "#007860"
      ],
      [
        "Red",
        30,
        "#d81830"
      ],
      [
        "Orange",
        1,
        "#d86018"
      ],
      [
        "Brown",
        2,
        "#784848"
      ]
    ],
    "continent": "Africa",
    "population": "5.4 million",
    "border": "It borders Central African Republic, Chad, Republic of the Congo, Equatorial Guinea, Gabon, and Nigeria.",
    "capital": "Yaoundé"
  },
  {
    "name": "Central African Republic",
    "colors": [
      [
        "White",
        21,
        "#ffffff"
      ],
      [
        "Green",
        21,
        "#309030"
      ],
      [
        "Yellow",
        21,
        "#ffd800"
      ],
      [
        "Blue",
        19,
        "#003078"
      ],
      [
        "Red",
        16,
        "#d81830"
      ],
      [
        "Gray",
        2,
        "#306090"
      ]
    ],
    "continent": "Africa",
    "population": "1.5 million",
    "border": "It borders Chad, Sudan, Cameroon, Republic of the Congo, South Sudan, Democratic Republic of the Congo, and League of Arab States.",
    "capital": "Bangui"
  },
  {
    "name": "Chad",
    "colors": [
      [
        "Red",
        33,
        "#c01830"
      ],
      [
        "Blue",
        33,
        "#003060"
      ],
      [
        "Yellow",
        33,
        "#ffc000"
      ],
      [
        "Orange",
        1,
        "#f07818"
      ]
    ],
    "continent": "Africa",
    "population": "3.0 million",
    "border": "It borders Cameroon, Libya, Niger, Nigeria, Sudan, Central African Republic, and League of Arab States.",
    "capital": "N'Djamena"
  },
  {
    "name": "Comoros",
    "colors": [
      [
        "Blue",
        23,
        "#0048a8"
      ],
      [
        "Yellow",
        23,
        "#ffd800"
      ],
      [
        "Green",
        20,
        "#009030"
      ],
      [
        "White",
        17,
        "#ffffff"
      ],
      [
        "Red",
        17,
        "#f03048"
      ]
    ],
    "continent": "Africa",
    "population": "541,976",
    "border": "It borders Madagascar, France, Mozambique, Seychelles, and Tanzania.",
    "capital": "Moroni"
  },
  {
    "name": "Republic of the Congo",
    "colors": [
      [
        "Red",
        34,
        "#d83018"
      ],
      [
        "Yellow",
        34,
        "#ffd800"
      ],
      [
        "Green",
        32,
        "#009030"
      ]
    ],
    "continent": "Africa",
    "population": "1.0 million",
    "border": "It borders Angola, Cameroon, Central African Republic, Democratic Republic of the Congo, and Gabon.",
    "capital": "Brazzaville"
  },
  {
    "name": "Democratic Republic of the Congo",
    "colors": [
      [
        "Blue",
        69,
        "#0078ff"
      ],
      [
        "Red",
        20,
        "#d81818"
      ],
      [
        "Yellow",
        11,
        "#f0d818"
      ]
    ],
    "continent": "Africa",
    "population": "15.2 million",
    "border": "It borders Central African Republic, South Sudan, Uganda, Rwanda, Burundi, Tanzania, Zambia, Angola, Republic of the Congo, Sudan, and Cameroon.",
    "capital": "Kinshasa"
  },
  {
    "name": "Croatia",
    "colors": [
      [
        "Red",
        35,
        "#ff0000"
      ],
      [
        "Blue",
        33,
        "#181890"
      ],
      [
        "White",
        28,
        "#ffffff"
      ],
      [
        "Gray",
        2,
        "#6060c0"
      ],
      [
        "Yellow",
        2,
        "#ffa8a8"
      ]
    ],
    "continent": "Europe",
    "population": "4.3 million",
    "border": "It borders Slovenia, Hungary, Serbia, Bosnia and Herzegovina, Montenegro, European Union, and Liberland.",
    "capital": "Zagreb"
  },
  {
    "name": "Cuba",
    "colors": [
      [
        "Blue",
        52,
        "#003090"
      ],
      [
        "White",
        29,
        "#ffffff"
      ],
      [
        "Red",
        19,
        "#c01818"
      ]
    ],
    "continent": "North America",
    "population": "7.1 million",
    "border": "It borders United States and United Kingdom.",
    "capital": "Havana"
  },
  {
    "name": "Cyprus",
    "colors": [
      [
        "White",
        89,
        "#ffffff"
      ],
      [
        "Orange",
        11,
        "#d87800"
      ]
    ],
    "continent": "Europe",
    "population": "572,929",
    "border": "It borders Akrotiri and Dhekelia, Northern Cyprus, Israel, United Kingdom, Turkey, and realm of the United Kingdom.",
    "capital": "Nicosia"
  },
  {
    "name": "Djibouti",
    "colors": [
      [
        "Blue",
        36,
        "#60a8f0"
      ],
      [
        "Green",
        36,
        "#18a830"
      ],
      [
        "White",
        26,
        "#ffffff"
      ],
      [
        "Red",
        1,
        "#d81818"
      ],
      [
        "Gray",
        1,
        "#48a890"
      ]
    ],
    "continent": "Africa",
    "population": "83,636",
    "border": "It borders Ethiopia, Eritrea, and Somalia.",
    "capital": "Djibouti"
  },
  {
    "name": "Dominica",
    "colors": [
      [
        "Green",
        68,
        "#006030"
      ],
      [
        "Black",
        9,
        "#000000"
      ],
      [
        "Yellow",
        9,
        "#ffd800"
      ],
      [
        "White",
        9,
        "#ffffff"
      ],
      [
        "Red",
        5,
        "#d80030"
      ]
    ],
    "continent": "North America",
    "population": "60,016",
    "border": "It borders Venezuela.",
    "capital": "Roseau"
  },
  {
    "name": "Dominican Republic",
    "colors": [
      [
        "Blue",
        36,
        "#003060"
      ],
      [
        "Red",
        34,
        "#d81830"
      ],
      [
        "White",
        30,
        "#ffffff"
      ]
    ],
    "continent": "North America",
    "population": "3.3 million",
    "border": "It borders Haiti, Venezuela, United States, and Turks and Caicos Islands.",
    "capital": "Santo Domingo"
  },
  {
    "name": "Ecuador",
    "colors": [
      [
        "Yellow",
        50,
        "#ffd800"
      ],
      [
        "Red",
        28,
        "#f01830"
      ],
      [
        "Blue",
        21,
        "#0048a8"
      ],
      [
        "Gray",
        1,
        "#789048"
      ]
    ],
    "continent": "South America",
    "population": "4.5 million",
    "border": "It borders Peru and Colombia.",
    "capital": "Quito"
  },
  {
    "name": "El Salvador",
    "colors": [
      [
        "Blue",
        68,
        "#0048a8"
      ],
      [
        "White",
        30,
        "#ffffff"
      ],
      [
        "Gray",
        2,
        "#4878c0"
      ]
    ],
    "continent": "North America",
    "population": "2.8 million",
    "border": "It borders Honduras and Guatemala.",
    "capital": "San Salvador"
  },
  {
    "name": "Equatorial Guinea",
    "colors": [
      [
        "Red",
        31,
        "#d81818"
      ],
      [
        "Green",
        31,
        "#489000"
      ],
      [
        "White",
        24,
        "#ffffff"
      ],
      [
        "Blue",
        14,
        "#0078d8"
      ]
    ],
    "continent": "Africa",
    "population": "252,115",
    "border": "It borders Cameroon, Gabon, and São Tomé and Príncipe.",
    "capital": "Malabo"
  },
  {
    "name": "Eritrea",
    "colors": [
      [
        "Red",
        42,
        "#f00030"
      ],
      [
        "Green",
        26,
        "#48a830"
      ],
      [
        "Blue",
        26,
        "#4890d8"
      ],
      [
        "Yellow",
        3,
        "#ffc030"
      ],
      [
        "Orange",
        3,
        "#f06030"
      ]
    ],
    "continent": "Africa",
    "population": "1.4 million",
    "border": "It borders Sudan, Djibouti, Ethiopia, and League of Arab States.",
    "capital": "Asmara"
  },
  {
    "name": "Estonia",
    "colors": [
      [
        "Blue",
        35,
        "#0078d8"
      ],
      [
        "White",
        33,
        "#ffffff"
      ],
      [
        "Black",
        31,
        "#000000"
      ],
      [
        "Gray",
        1,
        "#909090"
      ]
    ],
    "continent": "Europe",
    "population": "1.3 million",
    "border": "It borders Latvia, Russia, Soviet Union, Russian Socialist Federative Soviet Republic, and Sweden.",
    "capital": "Tallinn"
  },
  {
    "name": "Eswatini",
    "colors": [
      [
        "Gray",
        44,
        "#4860c0"
      ],
      [
        "Red",
        34,
        "#a81818"
      ],
      [
        "Yellow",
        13,
        "#ffd800"
      ],
      [
        "Black",
        5,
        "#000000"
      ],
      [
        "White",
        4,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "349,233",
    "border": "It borders South Africa and Mozambique.",
    "capital": "Mbabane"
  },
  {
    "name": "Ethiopia",
    "colors": [
      [
        "Green",
        32,
        "#009030"
      ],
      [
        "Red",
        31,
        "#d81818"
      ],
      [
        "Yellow",
        23,
        "#ffd800"
      ],
      [
        "Blue",
        12,
        "#1848a8"
      ],
      [
        "Orange",
        1,
        "#f06018"
      ],
      [
        "Gray",
        1,
        "#306090"
      ]
    ],
    "continent": "Africa",
    "population": "22.2 million",
    "border": "It borders Sudan, South Sudan, Kenya, Somalia, Djibouti, Eritrea, League of Arab States, and Somaliland.",
    "capital": "Addis Ababa"
  },
  {
    "name": "Fiji",
    "colors": [
      [
        "Blue",
        83,
        "#60c0f0"
      ],
      [
        "Red",
        10,
        "#c01830"
      ],
      [
        "White",
        7,
        "#ffffff"
      ]
    ],
    "continent": "Oceania",
    "population": "393,383",
    "border": "It borders Solomon Islands.",
    "capital": "Suva"
  },
  {
    "name": "Gabon",
    "colors": [
      [
        "Green",
        33,
        "#00a860"
      ],
      [
        "Gray",
        33,
        "#3078c0"
      ],
      [
        "Yellow",
        34,
        "#ffd818"
      ]
    ],
    "continent": "Africa",
    "population": "498,823",
    "border": "It borders Cameroon, Republic of the Congo, Equatorial Guinea, São Tomé and Príncipe, and Angola.",
    "capital": "Libreville"
  },
  {
    "name": "Georgia",
    "colors": [
      [
        "Red",
        50,
        "#ce1126"
      ],
      [
        "White",
        50,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "3.7 million",
    "border": "It has no land borders.",
    "capital": "Tbilisi"
  },
  {
    "name": "Ghana",
    "colors": [
      [
        "Red",
        34,
        "#d81830"
      ],
      [
        "Green",
        33,
        "#006048"
      ],
      [
        "Yellow",
        30,
        "#ffd818"
      ],
      [
        "Black",
        2,
        "#000000"
      ],
      [
        "Orange",
        1,
        "#f09018"
      ]
    ],
    "continent": "Africa",
    "population": "6.7 million",
    "border": "It borders Burkina Faso, Ivory Coast, and Togo.",
    "capital": "Accra"
  },
  {
    "name": "Grenada",
    "colors": [
      [
        "Red",
        39,
        "#d81830"
      ],
      [
        "Yellow",
        29,
        "#ffd818"
      ],
      [
        "Green",
        27,
        "#007860"
      ],
      [
        "Orange",
        4,
        "#f07818"
      ],
      [
        "Brown",
        1,
        "#604848"
      ]
    ],
    "continent": "North America",
    "population": "89,861",
    "border": "It borders Venezuela.",
    "capital": "St. George's"
  },
  {
    "name": "Guatemala",
    "colors": [
      [
        "Blue",
        72,
        "#4890d8"
      ],
      [
        "White",
        28,
        "#ffffff"
      ]
    ],
    "continent": "North America",
    "population": "4.1 million",
    "border": "It borders Belize, El Salvador, Honduras, and Mexico.",
    "capital": "Guatemala City"
  },
  {
    "name": "Guinea",
    "colors": [
      [
        "Red",
        33,
        "#d81830"
      ],
      [
        "Green",
        33,
        "#009060"
      ],
      [
        "Yellow",
        33,
        "#ffd818"
      ],
      [
        "Orange",
        1,
        "#f07818"
      ]
    ],
    "continent": "Africa",
    "population": "3.6 million",
    "border": "It borders Ivory Coast, Guinea-Bissau, Liberia, Mali, Senegal, and Sierra Leone.",
    "capital": "Conakry"
  },
  {
    "name": "Guinea-Bissau",
    "colors": [
      [
        "Yellow",
        34,
        "#ffd818"
      ],
      [
        "Green",
        34,
        "#00a848"
      ],
      [
        "Red",
        32,
        "#d81830"
      ]
    ],
    "continent": "Africa",
    "population": "635,956",
    "border": "It borders Guinea and Senegal.",
    "capital": "Bissau"
  },
  {
    "name": "Guyana",
    "colors": [
      [
        "Gray",
        54,
        "#309060"
      ],
      [
        "Red",
        23,
        "#c01830"
      ],
      [
        "Yellow",
        18,
        "#ffc018"
      ],
      [
        "White",
        3,
        "#ffffff"
      ],
      [
        "Black",
        2,
        "#000000"
      ]
    ],
    "continent": "South America",
    "population": "560,296",
    "border": "It borders Brazil, Suriname, and Venezuela.",
    "capital": "Georgetown"
  },
  {
    "name": "Haiti",
    "colors": [
      [
        "Blue",
        45,
        "#0018a8"
      ],
      [
        "Red",
        45,
        "#d81830"
      ],
      [
        "White",
        7,
        "#ffffff"
      ],
      [
        "Brown",
        1,
        "#904830"
      ],
      [
        "Gray",
        2,
        "#6078c0"
      ]
    ],
    "continent": "North America",
    "population": "3.9 million",
    "border": "It borders Dominican Republic, United States, and Turks and Caicos Islands.",
    "capital": "Port-au-Prince"
  },
  {
    "name": "Honduras",
    "colors": [
      [
        "Blue",
        65,
        "#183090"
      ],
      [
        "White",
        31,
        "#ffffff"
      ],
      [
        "Gray",
        4,
        "#6078c0"
      ]
    ],
    "continent": "North America",
    "population": "2.0 million",
    "border": "It borders Guatemala, El Salvador, and Nicaragua.",
    "capital": "Tegucigalpa"
  },
  {
    "name": "Iceland",
    "colors": [
      [
        "Blue",
        66,
        "#0048a8"
      ],
      [
        "Red",
        18,
        "#d81830"
      ],
      [
        "White",
        16,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "317,351",
    "border": "It borders Greenland, Faroe Islands, and Svalbard.",
    "capital": "Reykjavík"
  },
  {
    "name": "Iran",
    "colors": [
      [
        "White",
        33,
        "#ffffff"
      ],
      [
        "Red",
        31,
        "#d80000"
      ],
      [
        "Green",
        30,
        "#18a848"
      ],
      [
        "Yellow",
        4,
        "#f07878"
      ],
      [
        "Blue",
        2,
        "#a8d8a8"
      ]
    ],
    "continent": "Asia",
    "population": "22.0 million",
    "border": "It borders Afghanistan, Pakistan, Turkey, Iraq, Azerbaijan, Armenia, Turkmenistan, Nakhchivan Autonomous Republic, Soviet Union, Saudi Arabia, Kuwait, Bahrain, Oman, Qatar, and United Arab Emirates.",
    "capital": "Tehran"
  },
  {
    "name": "Iraq",
    "colors": [
      [
        "Red",
        34,
        "#d81830"
      ],
      [
        "Black",
        33,
        "#000000"
      ],
      [
        "White",
        29,
        "#ffffff"
      ],
      [
        "Blue",
        2,
        "#c0c0c0"
      ],
      [
        "Green",
        2,
        "#007848"
      ]
    ],
    "continent": "Asia",
    "population": "7.3 million",
    "border": "It borders Turkey, Syria, Jordan, Saudi Arabia, Kuwait, and Iran.",
    "capital": "Baghdad"
  },
  {
    "name": "Israel",
    "colors": [
      [
        "White",
        60,
        "#ffffff"
      ],
      [
        "Blue",
        40,
        "#0030c0"
      ]
    ],
    "continent": "Asia",
    "population": "872,700",
    "border": "It borders Syria, Jordan, Egypt, Lebanon, Cyprus, Gaza Strip, West Bank, United Arab Republic, and Palestine.",
    "capital": "Jerusalem"
  },
  {
    "name": "Jordan",
    "colors": [
      [
        "Black",
        27,
        "#000000"
      ],
      [
        "Green",
        27,
        "#007848"
      ],
      [
        "Red",
        24,
        "#d81830"
      ],
      [
        "White",
        19,
        "#ffffff"
      ],
      [
        "Brown",
        1,
        "#484848"
      ],
      [
        "Gray",
        2,
        "#60a878"
      ]
    ],
    "continent": "Asia",
    "population": "9.8 million",
    "border": "It borders Israel, Saudi Arabia, Syria, Iraq, West Bank, and Palestine.",
    "capital": "Amman"
  },
  {
    "name": "Kazakhstan",
    "colors": [
      [
        "Blue",
        90,
        "#00a8c0"
      ],
      [
        "Gray",
        6,
        "#78c078"
      ],
      [
        "Yellow",
        4,
        "#fff030"
      ]
    ],
    "continent": "Asia",
    "population": "17.9 million",
    "border": "It borders Turkmenistan, People's Republic of China, Kyrgyzstan, Uzbekistan, and Russia.",
    "capital": "Astana"
  },
  {
    "name": "Kiribati",
    "colors": [
      [
        "Red",
        51,
        "#c01818"
      ],
      [
        "Blue",
        23,
        "#183078"
      ],
      [
        "White",
        22,
        "#ffffff"
      ],
      [
        "Yellow",
        3,
        "#f0d800"
      ],
      [
        "Gray",
        1,
        "#486090"
      ]
    ],
    "continent": "Oceania",
    "population": "63,883",
    "border": "It borders United States and France.",
    "capital": "South Tarawa"
  },
  {
    "name": "Kuwait",
    "colors": [
      [
        "Green",
        29,
        "#007848"
      ],
      [
        "Red",
        29,
        "#d81830"
      ],
      [
        "White",
        24,
        "#ffffff"
      ],
      [
        "Black",
        16,
        "#000000"
      ],
      [
        "Gray",
        2,
        "#48a878"
      ]
    ],
    "continent": "Asia",
    "population": "4.6 million",
    "border": "It borders Iraq, Iraq, Saudi–Kuwaiti Neutral Zone, Saudi Arabia, and Iran.",
    "capital": "Kuwait City"
  },
  {
    "name": "Kyrgyzstan",
    "colors": [
      [
        "Red",
        90,
        "#ff0000"
      ],
      [
        "Orange",
        8,
        "#ff7800"
      ],
      [
        "Yellow",
        2,
        "#ffc000"
      ]
    ],
    "continent": "Asia",
    "population": "6.0 million",
    "border": "It borders People's Republic of China, Kazakhstan, Tajikistan, and Uzbekistan.",
    "capital": "Bishkek"
  },
  {
    "name": "Laos",
    "colors": [
      [
        "Red",
        52,
        "#d81830"
      ],
      [
        "Blue",
        41,
        "#003060"
      ],
      [
        "White",
        7,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "2.1 million",
    "border": "It borders Myanmar, Cambodia, People's Republic of China, Thailand, and Vietnam.",
    "capital": "Vientiane"
  },
  {
    "name": "Latvia",
    "colors": [
      [
        "Red",
        78,
        "#a81830"
      ],
      [
        "White",
        20,
        "#ffffff"
      ],
      [
        "Brown",
        2,
        "#a84848"
      ]
    ],
    "continent": "Europe",
    "population": "2.0 million",
    "border": "It borders Belarus, Estonia, Lithuania, Russia, Poland, Soviet Union, and Sweden.",
    "capital": "Riga"
  },
  {
    "name": "Lebanon",
    "colors": [
      [
        "Red",
        52,
        "#d81830"
      ],
      [
        "White",
        41,
        "#ffffff"
      ],
      [
        "Green",
        5,
        "#009048"
      ],
      [
        "Gray",
        2,
        "#48a878"
      ]
    ],
    "continent": "Asia",
    "population": "1.8 million",
    "border": "It borders Syria and Israel.",
    "capital": "Beirut"
  },
  {
    "name": "Lesotho",
    "colors": [
      [
        "White",
        42,
        "#ffffff"
      ],
      [
        "Blue",
        27,
        "#0078d8"
      ],
      [
        "Green",
        24,
        "#30a800"
      ],
      [
        "Brown",
        7,
        "#a84800"
      ]
    ],
    "continent": "Africa",
    "population": "851,412",
    "border": "It borders South Africa.",
    "capital": "Maseru"
  },
  {
    "name": "Liberia",
    "colors": [
      [
        "Red",
        49,
        "#c00030"
      ],
      [
        "White",
        41,
        "#ffffff"
      ],
      [
        "Blue",
        10,
        "#001860"
      ]
    ],
    "continent": "Africa",
    "population": "1.1 million",
    "border": "It borders Guinea, Sierra Leone, and Ivory Coast.",
    "capital": "Monrovia"
  },
  {
    "name": "Libya",
    "colors": [
      [
        "Black",
        47,
        "#000000"
      ],
      [
        "Red",
        26,
        "#f00018"
      ],
      [
        "Green",
        27,
        "#18a848"
      ]
    ],
    "continent": "Africa",
    "population": "1.4 million",
    "border": "It borders Egypt, Sudan, Tunisia, Algeria, Chad, Niger, and Middle East.",
    "capital": "Tripoli"
  },
  {
    "name": "Liechtenstein",
    "colors": [
      [
        "Red",
        52,
        "#d81830"
      ],
      [
        "Blue",
        47,
        "#003078"
      ],
      [
        "Brown",
        1,
        "#786018"
      ]
    ],
    "continent": "Europe",
    "population": "16,504",
    "border": "It borders Switzerland, Austria, Austrian Empire, Austria–Hungary, First Republic of Austria, Federal State of Austria, Nazi Germany, European Union, and Vorarlberg.",
    "capital": "Vaduz"
  },
  {
    "name": "Lithuania",
    "colors": [
      [
        "Yellow",
        33,
        "#ffc018"
      ],
      [
        "Green",
        33,
        "#006048"
      ],
      [
        "Red",
        34,
        "#c03030"
      ]
    ],
    "continent": "Europe",
    "population": "3.6 million",
    "border": "It borders Belarus, Latvia, Poland, Russia, Nazi Germany, and Sweden.",
    "capital": "Vilnius"
  },
  {
    "name": "Luxembourg",
    "colors": [
      [
        "Red",
        33,
        "#f03048"
      ],
      [
        "White",
        33,
        "#ffffff"
      ],
      [
        "Blue",
        34,
        "#00a8d8"
      ]
    ],
    "continent": "Europe",
    "population": "313,970",
    "border": "It borders Germany, France, Belgium, Nazi Germany, and Lorraine.",
    "capital": "Luxembourg"
  },
  {
    "name": "Madagascar",
    "colors": [
      [
        "Red",
        33,
        "#f04830"
      ],
      [
        "Green",
        33,
        "#009048"
      ],
      [
        "White",
        33,
        "#ffffff"
      ],
      [
        "Brown",
        1,
        "#786030"
      ]
    ],
    "continent": "Africa",
    "population": "5.1 million",
    "border": "It borders Comoros, France, Mozambique, and Seychelles.",
    "capital": "Antananarivo"
  },
  {
    "name": "Malawi",
    "colors": [
      [
        "Red",
        35,
        "#d81830"
      ],
      [
        "Green",
        34,
        "#30a830"
      ],
      [
        "Black",
        28,
        "#000000"
      ],
      [
        "White",
        3,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "3.5 million",
    "border": "It borders Zambia, Tanzania, and Mozambique.",
    "capital": "Lilongwe"
  },
  {
    "name": "Malaysia",
    "colors": [
      [
        "Red",
        36,
        "#d80000"
      ],
      [
        "White",
        35,
        "#ffffff"
      ],
      [
        "Blue",
        25,
        "#000060"
      ],
      [
        "Yellow",
        4,
        "#f0a8a8"
      ]
    ],
    "continent": "Asia",
    "population": "8.2 million",
    "border": "It borders Thailand, Brunei, Indonesia, Singapore, and Philippines.",
    "capital": "Kuala Lumpur"
  },
  {
    "name": "Maldives",
    "colors": [
      [
        "Red",
        65,
        "#d81830"
      ],
      [
        "Green",
        31,
        "#007830"
      ],
      [
        "Brown",
        3,
        "#a83030"
      ],
      [
        "White",
        1,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "88,960",
    "border": "It borders United Kingdom.",
    "capital": "Malé"
  },
  {
    "name": "Mali",
    "colors": [
      [
        "Red",
        33,
        "#d81830"
      ],
      [
        "Green",
        33,
        "#18c030"
      ],
      [
        "Yellow",
        33,
        "#ffd818"
      ],
      [
        "Orange",
        1,
        "#f07818"
      ]
    ],
    "continent": "Africa",
    "population": "5.1 million",
    "border": "It borders Algeria, Niger, Burkina Faso, Ivory Coast, Guinea, Senegal, and Mauritania.",
    "capital": "Bamako"
  },
  {
    "name": "Malta",
    "colors": [
      [
        "Red",
        51,
        "#d81830"
      ],
      [
        "White",
        49,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "326,550",
    "border": "It borders Italy.",
    "capital": "Valletta"
  },
  {
    "name": "Marshall Islands",
    "colors": [
      [
        "Blue",
        79,
        "#003090"
      ],
      [
        "White",
        11,
        "#ffffff"
      ],
      [
        "Orange",
        9,
        "#d87800"
      ],
      [
        "Gray",
        1,
        "#3060a8"
      ]
    ],
    "continent": "Oceania",
    "population": "58,000",
    "border": "It borders Federated States of Micronesia, Kiribati, United States, and Nauru.",
    "capital": "Majuro"
  },
  {
    "name": "Mauritania",
    "colors": [
      [
        "Green",
        53,
        "#00a860"
      ],
      [
        "Red",
        40,
        "#d81818"
      ],
      [
        "Yellow",
        4,
        "#ffd800"
      ],
      [
        "Gray",
        3,
        "#606048"
      ]
    ],
    "continent": "Africa",
    "population": "858,316",
    "border": "It borders Western Sahara, Algeria, Mali, Senegal, Spain, and Francoist Spain.",
    "capital": "Nouakchott"
  },
  {
    "name": "Mauritius",
    "colors": [
      [
        "Red",
        25,
        "#d81818"
      ],
      [
        "Green",
        25,
        "#009060"
      ],
      [
        "Blue",
        24,
        "#303060"
      ],
      [
        "Yellow",
        24,
        "#f0c018"
      ],
      [
        "Brown",
        2,
        "#907830"
      ]
    ],
    "continent": "Africa",
    "population": "659,351",
    "border": "It borders France, Seychelles, and Maldives.",
    "capital": "Port Louis"
  },
  {
    "name": "Micronesia",
    "colors": [
      [
        "Red",
        50,
        "#ce1126"
      ],
      [
        "White",
        50,
        "#ffffff"
      ]
    ],
    "continent": "Oceania",
    "population": "321,304",
    "border": "It has no land borders.",
    "capital": "Palikir"
  },
  {
    "name": "Moldova",
    "colors": [
      [
        "Blue",
        35,
        "#0048a8"
      ],
      [
        "Red",
        35,
        "#d80030"
      ],
      [
        "Yellow",
        26,
        "#ffd800"
      ],
      [
        "Gray",
        1,
        "#909048"
      ],
      [
        "Orange",
        1,
        "#f07818"
      ],
      [
        "Brown",
        2,
        "#786048"
      ]
    ],
    "continent": "Europe",
    "population": "2.6 million",
    "border": "It borders Ukraine, Romania, Transnistria, and European Union.",
    "capital": "Chișinău"
  },
  {
    "name": "Monaco",
    "colors": [
      [
        "Red",
        50,
        "#d81830"
      ],
      [
        "White",
        50,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "18,125",
    "border": "It borders France.",
    "capital": "Monaco"
  },
  {
    "name": "Mongolia",
    "colors": [
      [
        "Red",
        59,
        "#d81830"
      ],
      [
        "Blue",
        33,
        "#0060a8"
      ],
      [
        "Yellow",
        3,
        "#ffd800"
      ],
      [
        "Orange",
        3,
        "#f09018"
      ],
      [
        "Gray",
        2,
        "#604878"
      ]
    ],
    "continent": "Asia",
    "population": "3.1 million",
    "border": "It borders People's Republic of China and Russia.",
    "capital": "Ulaanbaatar"
  },
  {
    "name": "Montenegro",
    "colors": [
      [
        "Red",
        77,
        "#d80000"
      ],
      [
        "Yellow",
        17,
        "#ffc000"
      ],
      [
        "Orange",
        6,
        "#f06000"
      ]
    ],
    "continent": "Europe",
    "population": "620,029",
    "border": "It borders Bosnia and Herzegovina, Serbia, Albania, Croatia, European Union, and Kosovo.",
    "capital": "Podgorica"
  },
  {
    "name": "Morocco",
    "colors": [
      [
        "Red",
        95,
        "#c03030"
      ],
      [
        "Brown",
        3,
        "#484830"
      ],
      [
        "Green",
        2,
        "#186030"
      ]
    ],
    "continent": "Africa",
    "population": "12.3 million",
    "border": "It borders Algeria, Western Sahara, Spain, and European Union.",
    "capital": "Rabat"
  },
  {
    "name": "Mozambique",
    "colors": [
      [
        "Green",
        29,
        "#007860"
      ],
      [
        "Yellow",
        27,
        "#ffd800"
      ],
      [
        "Black",
        22,
        "#000000"
      ],
      [
        "Red",
        18,
        "#d81830"
      ],
      [
        "White",
        3,
        "#f0f0f0"
      ],
      [
        "Gray",
        1,
        "#309078"
      ]
    ],
    "continent": "Africa",
    "population": "7.6 million",
    "border": "It borders Tanzania, Malawi, Zambia, Zimbabwe, Eswatini, South Africa, and Comoros.",
    "capital": "Maputo"
  },
  {
    "name": "Myanmar",
    "colors": [
      [
        "Yellow",
        35,
        "#ffc000"
      ],
      [
        "Red",
        32,
        "#f03030"
      ],
      [
        "Green",
        24,
        "#30a830"
      ],
      [
        "White",
        8,
        "#ffffff"
      ],
      [
        "Gray",
        1,
        "#609030"
      ]
    ],
    "continent": "Asia",
    "population": "21.5 million",
    "border": "It borders Bangladesh, People's Republic of China, India, Laos, and Thailand.",
    "capital": "Naypyidaw"
  },
  {
    "name": "Namibia",
    "colors": [
      [
        "Green",
        34,
        "#009048"
      ],
      [
        "Red",
        30,
        "#c01830"
      ],
      [
        "Blue",
        29,
        "#003078"
      ],
      [
        "White",
        5,
        "#ffffff"
      ],
      [
        "Yellow",
        2,
        "#ffd800"
      ]
    ],
    "continent": "Africa",
    "population": "602,545",
    "border": "It borders Angola, Zambia, Botswana, and South Africa.",
    "capital": "Windhoek"
  },
  {
    "name": "Nauru",
    "colors": [
      [
        "Blue",
        91,
        "#001860"
      ],
      [
        "Yellow",
        8,
        "#ffc030"
      ],
      [
        "White",
        1,
        "#ffffff"
      ]
    ],
    "continent": "Oceania",
    "population": "10,084",
    "border": "It has no land borders.",
    "capital": "Yaren"
  },
  {
    "name": "New Zealand",
    "colors": [
      [
        "Blue",
        88,
        "#001860"
      ],
      [
        "Red",
        8,
        "#c01830"
      ],
      [
        "White",
        4,
        "#ffffff"
      ]
    ],
    "continent": "Oceania",
    "population": "4.7 million",
    "border": "It borders Australia.",
    "capital": "Wellington"
  },
  {
    "name": "Nicaragua",
    "colors": [
      [
        "Blue",
        68,
        "#0060c0"
      ],
      [
        "White",
        32,
        "#ffffff"
      ]
    ],
    "continent": "North America",
    "population": "501,849",
    "border": "It borders Costa Rica, Honduras, and Colombia.",
    "capital": "Managua"
  },
  {
    "name": "Niger",
    "colors": [
      [
        "Orange",
        38,
        "#d84800"
      ],
      [
        "Green",
        33,
        "#18a830"
      ],
      [
        "White",
        27,
        "#ffffff"
      ],
      [
        "Yellow",
        1,
        "#f09060"
      ],
      [
        "Gray",
        1,
        "#48c060"
      ]
    ],
    "continent": "Africa",
    "population": "3.3 million",
    "border": "It borders Chad, Libya, Algeria, Mali, Burkina Faso, Benin, Nigeria, and League of Arab States.",
    "capital": "Niamey"
  },
  {
    "name": "North Korea",
    "colors": [
      [
        "Red",
        55,
        "#f01830"
      ],
      [
        "Blue",
        37,
        "#0048a8"
      ],
      [
        "Yellow",
        4,
        "#f0a8a8"
      ],
      [
        "White",
        4,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "24.6 million",
    "border": "It borders South Korea, Russia, People's Republic of China, and Soviet Union.",
    "capital": "Pyongyang"
  },
  {
    "name": "North Macedonia",
    "colors": [
      [
        "Red",
        67,
        "#d81830"
      ],
      [
        "Yellow",
        30,
        "#f0f030"
      ],
      [
        "Orange",
        3,
        "#f07830"
      ]
    ],
    "continent": "Europe",
    "population": "1.5 million",
    "border": "It borders Albania, Serbia, Bulgaria, Greece, European Union, and Kosovo.",
    "capital": "Skopje"
  },
  {
    "name": "Oman",
    "colors": [
      [
        "Red",
        43,
        "#d81818"
      ],
      [
        "White",
        28,
        "#ffffff"
      ],
      [
        "Green",
        27,
        "#007800"
      ],
      [
        "Yellow",
        2,
        "#f0a8a8"
      ]
    ],
    "continent": "Asia",
    "population": "551,737",
    "border": "It borders Saudi Arabia, Yemen, United Arab Emirates, and Iran.",
    "capital": "Muscat"
  },
  {
    "name": "Palau",
    "colors": [
      [
        "Blue",
        84,
        "#0090ff"
      ],
      [
        "Yellow",
        16,
        "#ffff00"
      ]
    ],
    "continent": "Oceania",
    "population": "9,638",
    "border": "It borders Federated States of Micronesia, Indonesia, and Philippines.",
    "capital": "Ngerulmud"
  },
  {
    "name": "Panama",
    "colors": [
      [
        "White",
        45,
        "#ffffff"
      ],
      [
        "Red",
        26,
        "#d81818"
      ],
      [
        "Blue",
        26,
        "#001860"
      ],
      [
        "Yellow",
        1,
        "#f09090"
      ],
      [
        "Gray",
        2,
        "#7890a8"
      ]
    ],
    "continent": "North America",
    "population": "860,000",
    "border": "It borders Costa Rica, Colombia, and United States.",
    "capital": "Panama City"
  },
  {
    "name": "Papua New Guinea",
    "colors": [
      [
        "Black",
        51,
        "#000000"
      ],
      [
        "Red",
        46,
        "#c01830"
      ],
      [
        "Yellow",
        3,
        "#ffd800"
      ]
    ],
    "continent": "Oceania",
    "population": "2.0 million",
    "border": "It borders Indonesia, Australia, Federated States of Micronesia, and Solomon Islands.",
    "capital": "Port Moresby"
  },
  {
    "name": "Paraguay",
    "colors": [
      [
        "White",
        40,
        "#ffffff"
      ],
      [
        "Blue",
        30,
        "#0030a8"
      ],
      [
        "Red",
        28,
        "#d81830"
      ],
      [
        "Yellow",
        2,
        "#f07890"
      ]
    ],
    "continent": "South America",
    "population": "1.9 million",
    "border": "It borders Argentina, Bolivia, and Brazil.",
    "capital": "Asunción"
  },
  {
    "name": "Qatar",
    "colors": [
      [
        "Brown",
        67,
        "#901830"
      ],
      [
        "White",
        33,
        "#ffffff"
      ]
    ],
    "continent": "Asia",
    "population": "2.8 million",
    "border": "It borders Saudi Arabia and Iran.",
    "capital": "Doha"
  },
  {
    "name": "Romania",
    "colors": [
      [
        "Blue",
        33,
        "#003078"
      ],
      [
        "Red",
        33,
        "#d81830"
      ],
      [
        "Yellow",
        32,
        "#ffd818"
      ],
      [
        "Gray",
        1,
        "#909048"
      ],
      [
        "Orange",
        1,
        "#f07818"
      ]
    ],
    "continent": "Europe",
    "population": "18.4 million",
    "border": "It borders Ukraine, Hungary, Serbia, Bulgaria, Moldova, European Union, Czechoslovakia, Socialist Federal Republic of Yugoslavia, Soviet Union, Poland, Serbia and Montenegro, and Yugoslavia.",
    "capital": "Bucharest"
  },
  {
    "name": "Russia",
    "colors": [
      [
        "Red",
        34,
        "#d83018"
      ],
      [
        "White",
        33,
        "#ffffff"
      ],
      [
        "Blue",
        33,
        "#0030a8"
      ]
    ],
    "continent": "Europe",
    "population": "101.4 million",
    "border": "It borders Azerbaijan, Belarus, People's Republic of China, Estonia, Finland, Georgia, Kazakhstan, Latvia, Lithuania, North Korea, Norway, Republic of Abkhazia, Japan, United States, Ukraine, Mongolia, Poland, South Ossetia, Luhansk People's Republic, Donetsk People's Republic, European Union, Sweden, and Kherson Oblast.",
    "capital": "Moscow"
  },
  {
    "name": "Rwanda",
    "colors": [
      [
        "Blue",
        48,
        "#00a8d8"
      ],
      [
        "Yellow",
        25,
        "#f0d800"
      ],
      [
        "Green",
        24,
        "#186048"
      ],
      [
        "Gray",
        1,
        "#78c078"
      ],
      [
        "Brown",
        2,
        "#487830"
      ]
    ],
    "continent": "Africa",
    "population": "2.9 million",
    "border": "It borders Uganda, Tanzania, Burundi, and Democratic Republic of the Congo.",
    "capital": "Kigali"
  },
  {
    "name": "Saint Kitts and Nevis",
    "colors": [
      [
        "Red",
        29,
        "#c01830"
      ],
      [
        "Green",
        29,
        "#009030"
      ],
      [
        "Black",
        29,
        "#000000"
      ],
      [
        "Yellow",
        10,
        "#ffd800"
      ],
      [
        "White",
        3,
        "#ffffff"
      ]
    ],
    "continent": "North America",
    "population": "51,197",
    "border": "It borders Venezuela and United Kingdom.",
    "capital": "Basseterre"
  },
  {
    "name": "Saint Lucia",
    "colors": [
      [
        "Blue",
        90,
        "#60d8ff"
      ],
      [
        "Yellow",
        7,
        "#ffd818"
      ],
      [
        "Black",
        2,
        "#000000"
      ],
      [
        "White",
        1,
        "#ffffff"
      ]
    ],
    "continent": "North America",
    "population": "89,901",
    "border": "It borders Venezuela.",
    "capital": "Castries"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "colors": [
      [
        "Yellow",
        44,
        "#ffd818"
      ],
      [
        "Green",
        30,
        "#007830"
      ],
      [
        "Blue",
        26,
        "#003078"
      ]
    ],
    "continent": "North America",
    "population": "80,948",
    "border": "It borders Venezuela.",
    "capital": "Kingstown"
  },
  {
    "name": "Samoa",
    "colors": [
      [
        "Red",
        77,
        "#d81830"
      ],
      [
        "Blue",
        23,
        "#003078"
      ]
    ],
    "continent": "Oceania",
    "population": "108,645",
    "border": "It borders United States.",
    "capital": "Apia"
  },
  {
    "name": "San Marino",
    "colors": [
      [
        "White",
        49,
        "#ffffff"
      ],
      [
        "Blue",
        49,
        "#60c0f0"
      ],
      [
        "Gray",
        2,
        "#486048"
      ]
    ],
    "continent": "Europe",
    "population": "15,393",
    "border": "It borders Italy and European Union.",
    "capital": "San Marino"
  },
  {
    "name": "São Tomé and Príncipe",
    "colors": [
      [
        "Green",
        53,
        "#009030"
      ],
      [
        "Yellow",
        32,
        "#ffd800"
      ],
      [
        "Red",
        12,
        "#f03048"
      ],
      [
        "Black",
        2,
        "#000000"
      ],
      [
        "Brown",
        1,
        "#786048"
      ]
    ],
    "continent": "Africa",
    "population": "64,255",
    "border": "It borders Gabon, Equatorial Guinea, and Nigeria.",
    "capital": "São Tomé"
  },
  {
    "name": "Saudi Arabia",
    "colors": [
      [
        "Green",
        93,
        "#006030"
      ],
      [
        "Gray",
        5,
        "#78a890"
      ],
      [
        "Black",
        1,
        "#004830"
      ],
      [
        "White",
        1,
        "#d8d8d8"
      ]
    ],
    "continent": "Asia",
    "population": "4.1 million",
    "border": "It borders Jordan, Kuwait, Qatar, Bahrain, United Arab Emirates, Oman, Yemen, Iraq, Egypt, and Iran.",
    "capital": "Riyadh"
  },
  {
    "name": "Senegal",
    "colors": [
      [
        "Green",
        35,
        "#009048"
      ],
      [
        "Red",
        33,
        "#d81818"
      ],
      [
        "Yellow",
        32,
        "#fff048"
      ]
    ],
    "continent": "Africa",
    "population": "3.2 million",
    "border": "It borders Mauritania, Mali, Guinea, Guinea-Bissau, The Gambia, and League of Arab States.",
    "capital": "Dakar"
  },
  {
    "name": "Serbia",
    "colors": [
      [
        "White",
        38,
        "#ffffff"
      ],
      [
        "Red",
        34,
        "#c03048"
      ],
      [
        "Blue",
        26,
        "#184878"
      ],
      [
        "Gray",
        2,
        "#484860"
      ]
    ],
    "continent": "Europe",
    "population": "6.6 million",
    "border": "It borders Hungary, Romania, Bulgaria, North Macedonia, Montenegro, Bosnia and Herzegovina, Croatia, Albania, Kosovo, European Union, and Liberland.",
    "capital": "Belgrade"
  },
  {
    "name": "Seychelles",
    "colors": [
      [
        "Red",
        34,
        "#d83030"
      ],
      [
        "Blue",
        17,
        "#003078"
      ],
      [
        "Green",
        16,
        "#007830"
      ],
      [
        "Yellow",
        16,
        "#ffd848"
      ],
      [
        "White",
        17,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "93,419",
    "border": "It borders France, Comoros, Tanzania, Madagascar, and Mauritius.",
    "capital": "Victoria"
  },
  {
    "name": "Sierra Leone",
    "colors": [
      [
        "Blue",
        36,
        "#0078c0"
      ],
      [
        "Green",
        33,
        "#18c030"
      ],
      [
        "White",
        31,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "2.2 million",
    "border": "It borders Guinea and Liberia.",
    "capital": "Freetown"
  },
  {
    "name": "Singapore",
    "colors": [
      [
        "White",
        52,
        "#ffffff"
      ],
      [
        "Red",
        46,
        "#f03030"
      ],
      [
        "Gray",
        2,
        "#f090a8"
      ]
    ],
    "continent": "Asia",
    "population": "5.4 million",
    "border": "It borders Malaysia, Indonesia, United States of Indonesia, and Johor.",
    "capital": "Singapore"
  },
  {
    "name": "Slovakia",
    "colors": [
      [
        "Red",
        39,
        "#f01830"
      ],
      [
        "White",
        34,
        "#ffffff"
      ],
      [
        "Blue",
        25,
        "#3048a8"
      ],
      [
        "Gray",
        2,
        "#6078c0"
      ]
    ],
    "continent": "Europe",
    "population": "5.4 million",
    "border": "It borders Poland, Ukraine, Hungary, Austria, and Czech Republic.",
    "capital": "Bratislava"
  },
  {
    "name": "Slovenia",
    "colors": [
      [
        "Red",
        35,
        "#ff0000"
      ],
      [
        "Blue",
        34,
        "#0000ff"
      ],
      [
        "White",
        31,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "2.1 million",
    "border": "It borders Italy, Austria, Croatia, Hungary, and European Union.",
    "capital": "Ljubljana"
  },
  {
    "name": "Solomon Islands",
    "colors": [
      [
        "Green",
        48,
        "#186030"
      ],
      [
        "Blue",
        43,
        "#0048c0"
      ],
      [
        "Yellow",
        9,
        "#ffd818"
      ]
    ],
    "continent": "Oceania",
    "population": "117,869",
    "border": "It borders Fiji, Papua New Guinea, Vanuatu, Australia, and France.",
    "capital": "Honiara"
  },
  {
    "name": "Somalia",
    "colors": [
      [
        "Blue",
        97,
        "#4890d8"
      ],
      [
        "White",
        3,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "2.8 million",
    "border": "It borders Djibouti, Ethiopia, and Kenya.",
    "capital": "Mogadishu"
  },
  {
    "name": "South Sudan",
    "colors": [
      [
        "Black",
        27,
        "#000000"
      ],
      [
        "Green",
        27,
        "#009048"
      ],
      [
        "Blue",
        20,
        "#00c0f0"
      ],
      [
        "Red",
        18,
        "#d81830"
      ],
      [
        "White",
        7,
        "#ffffff"
      ],
      [
        "Yellow",
        1,
        "#f09090"
      ]
    ],
    "continent": "Africa",
    "population": "12.3 million",
    "border": "It borders Sudan, Ethiopia, Kenya, Uganda, Democratic Republic of the Congo, Central African Republic, and League of Arab States.",
    "capital": "Juba"
  },
  {
    "name": "Sri Lanka",
    "colors": [
      [
        "Yellow",
        45,
        "#ffc030"
      ],
      [
        "Brown",
        33,
        "#901830"
      ],
      [
        "Blue",
        11,
        "#004848"
      ],
      [
        "Orange",
        11,
        "#f07800"
      ]
    ],
    "continent": "Asia",
    "population": "20.3 million",
    "border": "It borders India.",
    "capital": "Sri Jayawardenepura Kotte"
  },
  {
    "name": "Sudan",
    "colors": [
      [
        "Black",
        28,
        "#000000"
      ],
      [
        "Red",
        28,
        "#d81830"
      ],
      [
        "White",
        23,
        "#ffffff"
      ],
      [
        "Green",
        16,
        "#007830"
      ],
      [
        "Gray",
        5,
        "#606060"
      ]
    ],
    "continent": "Africa",
    "population": "40.2 million",
    "border": "It borders South Sudan, Chad, Central African Republic, Ethiopia, Eritrea, Egypt, Libya, Kenya, Uganda, Democratic Republic of the Congo, Bir Tawil, and Middle East.",
    "capital": "Khartoum"
  },
  {
    "name": "Suriname",
    "colors": [
      [
        "Green",
        38,
        "#307848"
      ],
      [
        "Red",
        37,
        "#c00030"
      ],
      [
        "White",
        19,
        "#ffffff"
      ],
      [
        "Blue",
        3,
        "#90c0a8"
      ],
      [
        "Yellow",
        2,
        "#f0c018"
      ],
      [
        "Gray",
        1,
        "#487848"
      ]
    ],
    "continent": "South America",
    "population": "290,137",
    "border": "It borders France, Guyana, Brazil, European Union, and French Guiana.",
    "capital": "Paramaribo"
  },
  {
    "name": "Syria",
    "colors": [
      [
        "Red",
        35,
        "#d81830"
      ],
      [
        "Black",
        34,
        "#000000"
      ],
      [
        "White",
        30,
        "#ffffff"
      ],
      [
        "Blue",
        1,
        "#c0c0c0"
      ]
    ],
    "continent": "Asia",
    "population": "4.6 million",
    "border": "It borders Turkey, Israel, Iraq, Jordan, and Lebanon.",
    "capital": "Damascus"
  },
  {
    "name": "Tajikistan",
    "colors": [
      [
        "White",
        43,
        "#ffffff"
      ],
      [
        "Red",
        28,
        "#d81818"
      ],
      [
        "Green",
        29,
        "#187830"
      ]
    ],
    "continent": "Asia",
    "population": "8.6 million",
    "border": "It borders Uzbekistan, Kyrgyzstan, People's Republic of China, and Afghanistan.",
    "capital": "Dushanbe"
  },
  {
    "name": "Tanzania",
    "colors": [
      [
        "Black",
        31,
        "#000000"
      ],
      [
        "Blue",
        30,
        "#00a8d8"
      ],
      [
        "Green",
        30,
        "#18c030"
      ],
      [
        "Yellow",
        9,
        "#ffd818"
      ]
    ],
    "continent": "Africa",
    "population": "10.1 million",
    "border": "It borders Kenya, Uganda, Rwanda, Burundi, Democratic Republic of the Congo, Zambia, Malawi, Mozambique, Lake Victoria, and Seychelles.",
    "capital": "Dodoma"
  },
  {
    "name": "Timor-Leste",
    "colors": [
      [
        "Red",
        77,
        "#d83018"
      ],
      [
        "Black",
        13,
        "#000000"
      ],
      [
        "Yellow",
        8,
        "#ffc030"
      ],
      [
        "White",
        1,
        "#ffffff"
      ],
      [
        "Orange",
        1,
        "#f06018"
      ]
    ],
    "continent": "Asia",
    "population": "499,681",
    "border": "It borders Indonesia and Australia.",
    "capital": "Dili"
  },
  {
    "name": "Togo",
    "colors": [
      [
        "Green",
        99,
        "#006048"
      ],
      [
        "White",
        1,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "1.6 million",
    "border": "It borders Burkina Faso, Ghana, Benin, and Hohoe.",
    "capital": "Lomé"
  },
  {
    "name": "Tonga",
    "colors": [
      [
        "Red",
        83,
        "#c00000"
      ],
      [
        "White",
        16,
        "#ffffff"
      ],
      [
        "Yellow",
        1,
        "#f0a8a8"
      ]
    ],
    "continent": "Oceania",
    "population": "61,600",
    "border": "It borders United States.",
    "capital": "Nuku'alofa"
  },
  {
    "name": "Trinidad and Tobago",
    "colors": [
      [
        "Red",
        72,
        "#d81830"
      ],
      [
        "Black",
        20,
        "#000000"
      ],
      [
        "White",
        8,
        "#ffffff"
      ]
    ],
    "continent": "North America",
    "population": "848,481",
    "border": "It borders Venezuela.",
    "capital": "Port of Spain"
  },
  {
    "name": "Tunisia",
    "colors": [
      [
        "Red",
        93,
        "#f00018"
      ],
      [
        "White",
        7,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "11.3 million",
    "border": "It borders Libya and Algeria.",
    "capital": "Tunis"
  },
  {
    "name": "Turkmenistan",
    "colors": [
      [
        "Green",
        92,
        "#009048"
      ],
      [
        "Red",
        4,
        "#d83030"
      ],
      [
        "Brown",
        2,
        "#c06030"
      ],
      [
        "Yellow",
        1,
        "#c07830"
      ],
      [
        "Orange",
        1,
        "#d86030"
      ]
    ],
    "continent": "Asia",
    "population": "5.1 million",
    "border": "It borders Kazakhstan, Uzbekistan, Afghanistan, and Iran.",
    "capital": "Ashgabat"
  },
  {
    "name": "Tuvalu",
    "colors": [
      [
        "Blue",
        88,
        "#00a8d8"
      ],
      [
        "Red",
        8,
        "#c01830"
      ],
      [
        "White",
        4,
        "#ffffff"
      ]
    ],
    "continent": "Oceania",
    "population": "6,104",
    "border": "It has no land borders.",
    "capital": "Funafuti"
  },
  {
    "name": "Uganda",
    "colors": [
      [
        "Yellow",
        35,
        "#ffd800"
      ],
      [
        "Black",
        32,
        "#000000"
      ],
      [
        "Red",
        31,
        "#d80000"
      ],
      [
        "White",
        2,
        "#ffffff"
      ]
    ],
    "continent": "Africa",
    "population": "6.8 million",
    "border": "It borders Kenya, South Sudan, Democratic Republic of the Congo, Rwanda, Tanzania, Sudan, and Lake Victoria.",
    "capital": "Kampala"
  },
  {
    "name": "United Arab Emirates",
    "colors": [
      [
        "Red",
        25,
        "#c01830"
      ],
      [
        "Green",
        24,
        "#009048"
      ],
      [
        "White",
        24,
        "#ffffff"
      ],
      [
        "Black",
        24,
        "#000000"
      ],
      [
        "Gray",
        3,
        "#48a878"
      ]
    ],
    "continent": "Asia",
    "population": "89,608",
    "border": "It borders Oman, Saudi Arabia, and Iran.",
    "capital": "Abu Dhabi"
  },
  {
    "name": "Uruguay",
    "colors": [
      [
        "White",
        60,
        "#ffffff"
      ],
      [
        "Blue",
        35,
        "#0030a8"
      ],
      [
        "Gray",
        5,
        "#4878c0"
      ]
    ],
    "continent": "South America",
    "population": "2.5 million",
    "border": "It borders Brazil and Argentina.",
    "capital": "Montevideo"
  },
  {
    "name": "Uzbekistan",
    "colors": [
      [
        "Green",
        33,
        "#309030"
      ],
      [
        "White",
        33,
        "#ffffff"
      ],
      [
        "Blue",
        31,
        "#3078f0"
      ],
      [
        "Red",
        3,
        "#f03048"
      ]
    ],
    "continent": "Asia",
    "population": "31.6 million",
    "border": "It borders Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, and Turkmenistan.",
    "capital": "Tashkent"
  },
  {
    "name": "Vanuatu",
    "colors": [
      [
        "Green",
        34,
        "#009048"
      ],
      [
        "Red",
        33,
        "#d81830"
      ],
      [
        "Black",
        24,
        "#000000"
      ],
      [
        "Yellow",
        7,
        "#ffd818"
      ],
      [
        "Brown",
        2,
        "#907800"
      ]
    ],
    "continent": "Oceania",
    "population": "63,701",
    "border": "It borders Australia and Solomon Islands.",
    "capital": "Port Vila"
  },
  {
    "name": "Vatican City",
    "colors": [
      [
        "Yellow",
        56,
        "#fff000"
      ],
      [
        "White",
        44,
        "#ffffff"
      ]
    ],
    "continent": "Europe",
    "population": "1,000",
    "border": "It borders Italy and European Union.",
    "capital": "Vatican City"
  },
  {
    "name": "Venezuela",
    "colors": [
      [
        "Red",
        34,
        "#d81830"
      ],
      [
        "Yellow",
        33,
        "#ffd800"
      ],
      [
        "Blue",
        31,
        "#003078"
      ],
      [
        "Gray",
        2,
        "#486060"
      ]
    ],
    "continent": "South America",
    "population": "28.9 million",
    "border": "It borders Colombia, Brazil, Guyana, Dominican Republic, Trinidad and Tobago, Saint Kitts and Nevis, Dominica, Saint Lucia, Saint Vincent and the Grenadines, Grenada, Kingdom of the Netherlands, United States, France, United Kingdom, Puerto Carreño, and realm of the United Kingdom.",
    "capital": "Caracas"
  },
  {
    "name": "Vietnam",
    "colors": [
      [
        "Red",
        94,
        "#d83018"
      ],
      [
        "Yellow",
        6,
        "#ffff00"
      ]
    ],
    "continent": "Asia",
    "population": "91.7 million",
    "border": "It borders People's Republic of China, Cambodia, and Laos.",
    "capital": "Hanoi"
  },
  {
    "name": "Yemen",
    "colors": [
      [
        "Red",
        33,
        "#d81830"
      ],
      [
        "Black",
        33,
        "#000000"
      ],
      [
        "White",
        32,
        "#ffffff"
      ],
      [
        "Blue",
        2,
        "#c0c0c0"
      ]
    ],
    "continent": "Asia",
    "population": "19.7 million",
    "border": "It borders Saudi Arabia and Oman.",
    "capital": "Sana'a"
  },
  {
    "name": "Zambia",
    "colors": [
      [
        "Green",
        77,
        "#187860"
      ],
      [
        "Orange",
        9,
        "#f09018"
      ],
      [
        "Red",
        7,
        "#d80030"
      ],
      [
        "Black",
        7,
        "#000000"
      ]
    ],
    "continent": "Africa",
    "population": "14.3 million",
    "border": "It borders Zimbabwe, Tanzania, Democratic Republic of the Congo, Malawi, Mozambique, Namibia, Angola, and Botswana.",
    "capital": "Lusaka"
  },
  {
    "name": "Zimbabwe",
    "colors": [
      [
        "Green",
        30,
        "#006000"
      ],
      [
        "Yellow",
        26,
        "#ffd800"
      ],
      [
        "Red",
        23,
        "#d80000"
      ],
      [
        "White",
        12,
        "#ffffff"
      ],
      [
        "Black",
        9,
        "#000000"
      ]
    ],
    "continent": "Africa",
    "population": "3.8 million",
    "border": "It borders Zambia, Mozambique, South Africa, and Botswana.",
    "capital": "Harare"
  }
];

if (typeof module !== 'undefined') module.exports = countries;