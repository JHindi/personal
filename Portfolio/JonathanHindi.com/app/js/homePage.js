
function HomePage() {
}

HomePage.prototype = {
    _DisplayCompanies: function (companies) {
        //Get Companies UI List
        var ulCompanies = $('#ulCompanies:first');
        ulCompanies.empty();
        if (companies == null || companies.length == 0) return;
        var divCompanyTemplate = $('#tabHome .CompanyReport, MasterTemplate').clone();
        for (var i = 0; i < companies.length; i++) {
            //Get company template
            var divCompany = divCompanyTemplate.clone();

            var divCompany = $(divCompany);

            divCompany.attr('data-id', companies[i].CompanyName);

            divCompany.bind('taphold', function () {
                if (confirm('are you sure you want to delete this?'))
                    currentContext.CompanyStore.DeleteCompany($(this).data('id'));
                currentContext.homePage.LoadSavedCompanies();
            });
            divCompany.bind('vclick', function () { currentContext.homePage.SelectCompany($(this).data('id')); });

            divCompany.find('.CategoryNumber')[0].innerHTML = i + 1;
            divCompany.find('.CompanyName')[0].innerHTML = companies[i].CompanyName;
            divCompany.find('.CompanyCreatedOn')[0].innerHTML = companies[i].CreatedOn;
            divCompany.find('.CompanyLastModified')[0].innerHTML = companies[i].LastModified;
            divCompany.find('.CompanyDescription')[0].innerHTML = companies[i].Description;

            //Add to companies UI list
            ulCompanies.append(divCompany);
            divCompany.removeClass('MasterTemplate');
            divCompany.show();
        }
    }
    , LoadSavedCompanies: function () {
        //Get dummy data
        var companies = currentContext.CompanyStore.Companies;

        //Display companies in home page
        this._DisplayCompanies(companies);
    }
    , CreateNewCompany: function (companyName) {
        //Validate company name
        if (companyName == '') {
            alert('Company name should not be empty.');
            return;
        }

        //Validate company name
        if (companyName.substring(0, 1) == ' ') {
            alert('Company name should not start with an empty space.');
            return;
        }

        // Validate if company already exist
        for (var i = 0; i < currentContext.CompanyStore.Companies.length; i++) {
            if (companyName == currentContext.CompanyStore.Companies[i].CompanyName) {
                alert('There is already a company with the specified name, please select another name.');
                return;
            }
        }

        //Create the company
        currentContext.CurrentCompany = currentContext.CompanyStore.CreateNewCompany(companyName, currentContext.CurrentQuestionnaire);

        this.SelectCompany(currentContext.CurrentCompany.CompanyName);
    }
    , SelectCompany: function (companyName) {
        //show spinner

        $.mobile.showPageLoadingMsg("a", "loading...");
        setTimeout(function () {
            currentContext.questionnairePage.LoadCompanyQuestionnaire(companyName);
            showTab($('#liQuestions:first')[1], 'tabQuestions');
            $.mobile.hidePageLoadingMsg();
        }, 100);
    }
}

