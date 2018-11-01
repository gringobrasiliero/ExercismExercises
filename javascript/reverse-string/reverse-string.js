module.exports = function(chars) {
    var reversed = '';
    for(var i = chars.length-1; 0 <= i; i--) {
        reversed += chars[i];
    }
    return reversed;
};
