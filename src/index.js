module.exports = function toReadable(number) {

    let numOnes = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let numTens = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety', 'hundred'];

    if (number >= 0 && number < 20) {
        return numOnes[number];
    }

    if (number > 19 && number < 91 && number % 10 == 0) {
        return numTens[number / 10];
    }


    if (number > 99 && number < 999 && number % 100 == 0) {
        number = number / 100;
        return numOnes[number] + ' ' + numTens[10];
    } else {
        let str = String(number);
        if (str.length == 2) return numTens[str[0]] + ' ' + numOnes[str[1]];
        if (str[1] == 1) return numOnes[str[0]] + ' ' + numTens[10] + ' ' + numOnes[[str[1]] + str[2]];
        else return numOnes[str[0]] + ' ' + numTens[10] + ((str[1] == 0) ? '' : ' ' + numTens[str[1]]) + ((str[2] == 0) ? '' : ' ' + numOnes[str[2]]);
    }

};

