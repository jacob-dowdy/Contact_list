var friends = {};
    friends.bill = {
        firstName: "Bill",
        lastName: "Gates",
        number: "(919) 555-5555",
        address: ['120 Zoo St', 'Wilmington', 'NC', '11102']};
        
    friends.steve = {
        firstName: "Steve",
        lastName: "Kerr",
        number: "(910) 555-5555",
        address: ['100 Park St', 'Wilmington', 'NC', '11102']};
        
        
var list = function (friends) {
    for (var key in friends) {
        console.log(key);
    }
};

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}
