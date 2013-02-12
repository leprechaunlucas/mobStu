var LocalStorageStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = JSON.parse(window.localStorage.getItem("employees"));
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, results);
    }

    this.findById = function(id, callback) {
        var employees = JSON.parse(window.localStorage.getItem("employees"));
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    var employees = [
            {"id": 1, "firstName": "Richard", "lastName": "Lin", "title":"mastermind", "managerId": 0, "city":"inception", "cellPhone":"9999999999", "officePhone":"9999999999", "email":"sup@a.com"},
            {"id": 2, "firstName": "Abhi", "lastName": "Kumar", "title":"silent but deadly", "managerId": 1, "city":"east", "cellPhone":"2222222222", "officePhone":"2222222222", "email":"why@a.com"},
            {"id": 3, "firstName": "Caleb", "lastName": "Nelson", "title":"ninja", "managerId": 2, "city":"can't be found", "cellPhone":"000", "officePhone":"000", "email":"unknown.com"},
            {"id": 4, "firstName": "Isaac", "lastName": "Lam", "title":"jumper", "managerId": 2, "city":"skytown", "cellPhone":"999", "officePhone":"999", "email":"sohigh.com"},
            {"id": 5, "firstName": "Justin", "lastName": "Lu", "title":"inception", "managerId": 2, "city":"ur mind", "cellPhone":"555", "officePhone":"555", "email":"brain.com"},
			{"id": 6, "firstName": "James", "lastName": "Garbagnati", "title":"Human", "managerId": 1, "city":"funkytown", "cellPhone":"5555", "officePhone":"777777", "email":"irule.com"}
        ];

    window.localStorage.setItem("employees", JSON.stringify(employees));

    callLater(successCallback);

}