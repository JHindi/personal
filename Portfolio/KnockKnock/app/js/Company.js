
function Company(companyName, questionnaire) {
    if (!companyName && !questionnaire) {
        return;
    }
    this.CompanyName = companyName;
    this.QuestionnaireVersion = questionnaire.Version;
    this.CreatedOn = new Date().toLocaleDateString();
    this.LastModified = new Date().toLocaleDateString();

    this.Categories = new Array();
    for (var i = 0 ; i < questionnaire.Categories.length; i++) {
        this.Categories[i] = new Object();
        this.Categories[i].CategoryId = questionnaire.Categories[i].Id;
        this.Categories[i].SubCategories = new Array();

        for (var y = 0; y < questionnaire.Categories[i].SubCategories.length; y++) {
            this.Categories[i].SubCategories[y] = new Object();
            this.Categories[i].SubCategories[y].SubCategoryId = questionnaire.Categories[i].SubCategories[y].Id;
            this.Categories[i].SubCategories[y].Questions = new Array();

            for (var z = 0; z < questionnaire.Categories[i].SubCategories[y].Questions.length; z++) {
                this.Categories[i].SubCategories[y].Questions[z] = new Object();
                this.Categories[i].SubCategories[y].Questions[z].QuestionId = questionnaire.Categories[i].SubCategories[y].Questions[z].Id;
                this.Categories[i].SubCategories[y].Questions[z].Answer = 3;
            }

        }
    }
    //this.Categories = questionnaire.Categories;
    //for (var c = 0 ; Questionnaire.Categories.length; c++) {
    //    //this.Categories.push()

    //}
}
Company.prototype = {
    QuestionnaireVersion: 1.0
    , CompanyName: ""
    , Description: ""
    , CreatedOn: null
    , LastModified: null
    , Categories: null

    , _init: function () {

    }
    , GetQuestion: function (categoryId, subCategoryId, questionId) {
        for (var i = 0; i < this.Categories.length; i++) {
            if (this.Categories[i].CategoryId == categoryId) {
                for (var y = 0; y < this.Categories[i].SubCategories.length; y++) {
                    if (this.Categories[i].SubCategories[y].SubCategoryId == subCategoryId) {
                        for (var z = 0; z < this.Categories[i].SubCategories[y].Questions.length; z++) {
                            if (this.Categories[i].SubCategories[y].Questions[z].QuestionId == questionId) {
                                return this.Categories[i].SubCategories[y].Questions[z];
                            }
                        }
                    }
                }
            }
        }
        return null;
    }
    , SetQuestion: function (categoryId, subCategoryId, questionId, answer) {
        for (var i = 0; i < this.Categories.length; i++) {
            if (this.Categories[i].CategoryId == categoryId) {
                for (var y = 0; y < this.Categories[i].SubCategories.length; y++) {
                    if (this.Categories[i].SubCategories[y].SubCategoryId == subCategoryId) {
                        for (var z = 0; z < this.Categories[i].SubCategories[y].Questions.length; z++) {
                            if (this.Categories[i].SubCategories[y].Questions[z].QuestionId == questionId) {
                                this.Categories[i].SubCategories[y].Questions[z].Answer = answer;
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
    , GetSubCategoryAverage: function (subCategoryId) {
        var sum = 0;
        for (var i = 0; i < this.Categories.length; i++) {
            for (var y = 0; y < this.Categories[i].SubCategories.length; y++) {
                if (this.Categories[i].SubCategories[y].SubCategoryId == subCategoryId) {
                    for (var z = 0; z < this.Categories[i].SubCategories[y].Questions.length; z++) {
                        sum = sum + parseFloat(this.Categories[i].SubCategories[y].Questions[z].Answer);
                    }
                    return sum / this.Categories[i].SubCategories[y].Questions.length;
                }
            }
        }
        return 0;
    }
    , GetCategoryAverage: function (categoryId) {
        var sum = 0;
        for (var i = 0; i < this.Categories.length; i++) {
            if (this.Categories[i].CategoryId == categoryId) {
                for (var y = 0; y < this.Categories[i].SubCategories.length; y++) {
                    sum = sum + this.GetSubCategoryAverage(this.Categories[i].SubCategories[y].SubCategoryId);
                }
                return sum / this.Categories[i].SubCategories.length;
            }
        }
        return 0;
    }
}
