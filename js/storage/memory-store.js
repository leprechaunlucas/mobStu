var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
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

    this.employees = [
            {"id": 1, "firstName": "Richard", "lastName": "Lin", "title":"mastermind", "managerId": 0, "city":"inception", "cellPhone":"999-999-9999", "officePhone":"999-999-9999", "email":"sup@a.com"},
            {"id": 2, "firstName": "Abhi", "lastName": "Kumar", "title":"silent but deadly", "managerId": 1, "city":"east", "cellPhone":"212-999-8888", "officePhone":"212-999-8888", "email":"why@a.com"},
            {"id": 3, "firstName": "Caleb", "lastName": "Nelson", "title":"ninja", "managerId": 2, "city":"can't be found", "cellPhone":"212-999-8888", "officePhone":"212-999-8888", "email":"unknown.com"},
            {"id": 4, "firstName": "Isaac", "lastName": "Lam", "title":"jumper", "managerId": 2, "city":"skytown", "cellPhone":"212-999-8888", "officePhone":"212-999-8888", "email":"sohigh.com"},
            {"id": 5, "firstName": "Justin", "lastName": "Lu", "title":"inception", "managerId": 2, "city":"ur mind", "cellPhone":"212-999-8888", "officePhone":"212-999-8888", "email":"brain.com"},
			{"id": 6, "firstName": "James", "lastName": "Garbagnati", "title":"Human", "managerId": 1, "city":"funkytown", "cellPhone":"212-999-8888", "officePhone":"212-999-8888", "email":"irule.com"},
			{"id": 7, "firstName": "Kevin", "lastName": "Malone", "title":"Accountant", "managerId": 6, "city":"Scranton, PA", "cellPhone":"570-777-9696", "officePhone":"570-111-2525", "email":"kmalone@dundermifflin.com"}
        ];

    callLater(successCallback);

}