# Galactic Age Calculator

Super Galactic Age Calculator

#### Brief description of application, Date of current version

Determines age on other planets - 06/26/2020

#### By Cody Fritz

## Description

Tells the user how old they would be on various planets such as Mercury, Venus, Mars, Jupiter, and tells them their expected lifespan on that planet by using the US average.

## Specifications (Specs)

User inputs age (Will use 25 for testing purposes, all rounded to nearest whole number)

1. On Earth you are age / 1.00
2. On Mars you are age / 1.88
3. On Venus you are age / 0.62
4. On Jupiter you are age / 11.86
5. On Mercury you are age / .24
6. When steps 1-5 are complete, also shows your expected lifespan on that planet (Based off made up lifespan of 10000)
7. When step 6 is complete, shows difference between current lifespan and expected lifespan

**Example**
|Behavior|Input|Output|Difference|
|---|---|---|---|
|Determines users Age on Mars|25, 10000|13, 5319|5306|
|Calculates the users life Expectancy on Mars based on their Age and Life Expectancy|Age 25, Expectancy 10,000|Age 13, Expectancy 5319|5306 (Expectancy-Age) to go|
|Determines users Age on Venus|25000, 10000|40323, 16129|-24194|
|Calculates users life Expectancy on Venus using a greater than expectancy input|Age 25,000, Expectancy 10,000|Age 40323, Expectancy 16129| Expectancy -24194, returns message stating they have exceeded their lifespan by 24194 years.|

**U.S average life expectancy is 78.6, will use 10000 as expectancy as we are estimating the life of space elves**

If user inputs their age, they will also get their life expectancy returned (on Earth, age 41, life expectancy 79, estimated remainder 38)

If user age is superior to life expectancy they will get a message detailing that (user inputs 90, life expectancy 79, congratulations you've been a cut above the rest for the past 11 years)

## Setup/Installation Requirements

1. From github ( https://github.com/Zentraxius ) navigate to "Repositories"
2. Select project from list ( https://github.com/Zentraxius/Week5Project This one!)
3. Click "Clone or download v" Download Zip
4. Open .zip with program of choice (Winrar/7zip confirmed working)
5. Extract folder to location of choice(such as desktop)
6. Open with Visual Studio Code, and open terminal
7. Run "npm install" without quotes, and then "npm build" without quotes, when npm install has finished.
8. Run index.html with browser of choice, confirmed working on Firefox and Chrome.

## Known Bugs

UI and Index not fully implemented or supported due to known bug regarding dev-server with webpack, resulting in being unable to test any of the code or functions outside of business logic.

## Support and contact details

For support please contact clanalia55@gmail.com

## Technologies Used

HTML | CSS | JavaScript
Bootstrap | jQuery
VisualStudioCode |
jsFiddle | Firefox Dev Tools
Jest | NPM | Lint

### License

MIT

Copyright (c) 2020 **Cody Fritz**
