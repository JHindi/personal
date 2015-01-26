function CompanyStore() {

    this.Companies = new Array();
    try {
        
        var parsedCompanies = JSON.parse(window.localStorage.getItem("Companies"));
        if (parsedCompanies != null)
            for (var i = 0; i < parsedCompanies.length; i++) {
                this.Companies[i] = $.extend(new Company(), parsedCompanies[i]);
            }
    }
    catch (e) {
    }

    
}

CompanyStore.prototype = {
    _tmr: null

    , Save: function () {
        window.localStorage.setItem("Companies", JSON.stringify(this.Companies));
        this._tmr = null;
    }

    , Serialize: function () {
        window.localStorage.setItem("Companies", JSON.stringify(this.Companies));
        this._tmr = null;
    }
    , GetCompany: function (companyName) {
        if (this.Companies == null || this.Companies.length == 0) return null;

        for (var i = 0; i < this.Companies.length; i++) {
            if (this.Companies[i].CompanyName == companyName) {
                return this.Companies[i];
            }
        }
        return null;
    }
    , DeleteCompany: function (companyName) {
        if (this.Companies == null || this.Companies.length == 0) return null;

        for (var i = 0; i < this.Companies.length; i++) {
            if (this.Companies[i].CompanyName == companyName) {
                this.Companies.splice(i, 1);
                break;
            }
        }        
    }
    , CreateNewCompany: function (companyName, questionnaire) {        
        var newCompany = new Company(companyName, questionnaire);
        this.Companies.push(newCompany);        
        this.Save();
        return newCompany;
    }
}
