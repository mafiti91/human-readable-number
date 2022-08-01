module.exports = function toReadable (number) {
    const arr0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arr10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr20_99 = ['!!!', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arr100_999 = ' hundred ';
    let arr = String(number).split('')

    if (number === 0) return arr0_9[0]; 
    if(arr.length === 1) return arr0_9[number];
    if(arr.length === 2) {
        if(number < 20) return arr10_19[arr[1]];
        if(arr[1] == 0) return arr20_99[arr[0]]
        else return arr20_99[arr[0]] + ' ' + arr0_9[arr[1]];
    };
    if(arr.length === 3) {
        if(arr[1] == 0 && arr[2] == 0) return arr0_9[arr[0]] + arr100_999.slice(0,-1);
        if(arr[1] == 0) return arr0_9[arr[0]] + arr100_999 + arr0_9[arr[2]];
        if(arr[1] == 1) return arr0_9[arr[0]] + arr100_999 + arr10_19[arr[2]];
        if(arr[2] == 0) return arr0_9[arr[0]] + arr100_999 + arr20_99[arr[1]];
        else return arr0_9[arr[0]] + arr100_999 + arr20_99[arr[1]] + ' ' + arr0_9[arr[2]]
    };
};
