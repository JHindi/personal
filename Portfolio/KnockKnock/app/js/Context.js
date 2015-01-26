
function Context()
{
    this.CurrentCompany= null;
    this.CurrentCategory= null;
    this.CurrentSubCategory = null;
    this.reportPage = new ReportPage();
    this.homePage= new HomePage();
    this.questionnairePage = new QuestionnairePage();
    
    this.CompanyStore = new CompanyStore();
    this.CurrentQuestionnaire = Questionnaire;
}
Context.prototype = {    
    reset: function () {
        CurrentCompany = CurrentCategory = CurrentSubCategory = null;
    }    
}

