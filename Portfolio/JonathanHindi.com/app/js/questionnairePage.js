//---- The questionnaire page object
function QuestionnairePage() {

    this._questionnaire = Questionnaire;
    this._tab = $('#tabQuestions:first');
    this.CurrentCompany = null;
}

QuestionnairePage.prototype = {
    LoadNewQuestionnaire: function (companyName) {
        this.CurrentCompany = new Company();
        this.CurrentCompany.CompanyName = companyName;
        this.CurrentCompany.QuestionnaireVersion = this._questionnaire.Version;
        this.LoadCategories(this._questionnaire);
    }
    , LoadCompanyQuestionnaire: function (companyName) {
        try {
            //Lets get the company object related to it
            currentContext.CurrentCompany = this.CurrentCompany = currentContext.CompanyStore.GetCompany(companyName);
            this.LoadCategories(currentContext.CurrentCompany);
        }
        catch (e) {
            debugger;
            alert('An error occurred while loading this company profile');
        }
    }
    , LoadCategories: function (company) {
        var companyName = $('.Categories:first').find('.CompanyName:first');
        companyName.html(company.CompanyName);
        

        //insert categories related to this company in the ulCategories
        var ulCategories = $('#ulCategories:first');

        //Empty the Categories list
        ulCategories.empty();

        //Get the categories from the Questionnaire Object
        var categories = currentContext.CurrentQuestionnaire.Categories;

        var SubCategoryTemplate = $('#tabQuestions .Category, MasterTemplate:first');

        for (var i = 0; i < categories.length; i++) {

            //Get current category
            var category = categories[i];

            //Get category SubCategoryTemplate
            var jCategory = SubCategoryTemplate.clone();
            jCategory.removeClass("MasterTemplate");

            //Fill category data                        
            jCategory.attr('CategoryIndex', i);
            jCategory.bind('vclick', function () { currentContext.questionnairePage.SelectCategory(parseInt($(this).attr('CategoryIndex'))); });

            jCategory.find('.CategoryNumber:first').html(i + 1);
            jCategory.find('.CategoryTitle:first').html(category.Title);
            jCategory.find('.CategoryDescription:first').html(category.Description);

            //Add to categories UI list
            ulCategories.append(jCategory);

            jCategory.show();
        }

        //Refresh categories UI list
        //ulCategories.listview('refresh');

        //Select first category by default
        currentContext.questionnairePage.SelectCategory(0);
        
    }
    , SelectCategory: function (categoryIndex) {
        
        $.mobile.showPageLoadingMsg('div','loading...');
        var t = this;
        setTimeout(function () {
            try {
                t._SelectCategory(categoryIndex);
            }
            catch (e) {
                alert(e);
                debugger;
            }
            setTimeout($.mobile.hidePageLoadingMsg,300);
        }, 300);
    }
    , SaveCurrentCompanyAnswers: function () {
        //Save the current category question values to the local storage        
        var currentSubCategoryLists = $('#tabQuestions #ulSubCategories .QuestionsList');
        for (var i = 0; i < currentSubCategoryLists.length; i++) {
            for (var j = 0; j < currentSubCategoryLists[i].children.length; j++) {

                var subCategoryItem = $(currentSubCategoryLists[i].children[j]);
                var questionId = subCategoryItem.find('.QuestionSlider:first').attr('id');
                var subCategoryId = subCategoryItem.find('.QuestionSlider:first').attr('subCategoryId');
                var answer = subCategoryItem.find('.QuestionSlider:first')[0].value;
                currentContext.CurrentCompany.SetQuestion(currentContext.CurrentCategory.Id, subCategoryId, questionId, answer);
            }
        }
        currentContext.CompanyStore.Save();
    }
    , _SelectCategory: function (categoryIndex) {

        if (categoryIndex == null || categoryIndex < 0) return;

        //Save current company answers
        this.SaveCurrentCompanyAnswers();

        //Get the new selected category
        var category = currentContext.CurrentQuestionnaire.Categories[categoryIndex];

        //Set the new current category
        currentContext.CurrentCategory = category;

        // get sub category list
        var ulSubCategories = $('#tabQuestions #ulSubCategories:first');
        ulSubCategories.empty();

        //Get SubCategoryTemplate        
        var SubCategoryTemplate = $('#tabQuestions .SubCategory:first, MasterTemplate:first');
        var QuestionTemplate = $('#tabQuestions .Question, MasterTemplate');
        var firstSubCategory = true;
        for (var y = 0; y < category.SubCategories.length; y++) {

            //Get current sub category
            var subCategory = category.SubCategories[y];

            //Get Sub Category SubCategoryTemplate
            var divSubCategory = SubCategoryTemplate.clone();
            
            //Fill the SubCategoryTemplate with sub category data
            divSubCategory.find('.SubCategoryTitle').html(subCategory.Title);

            //Get Questions from Questionnaire
            var questions = subCategory.Questions;

            //Get questions UI list
            var ulQuestions = divSubCategory.find('.QuestionsList:first');
            ulQuestions.removeClass("MasterTemplate");
            ulQuestions.empty();

            for (var z = 0; z < subCategory.Questions.length; z++) {

                //Get current question
                var question = subCategory.Questions[z];

                var divQuestion = QuestionTemplate.clone();
                divQuestion.removeClass("MasterTemplate");
                

                //Fill question data
                var questionItem = $(divQuestion);
                questionItem.find('.QuestionText:first').html(question.Text);
                questionItem.find('.QuestionSlider:first').attr('id', question.Id);
                questionItem.find('.QuestionSlider:first').attr('subCategoryId', subCategory.Id);
                questionItem.find('.QuestionSlider:first')[0].value = this.CurrentCompany.GetQuestion(category.Id, subCategory.Id, question.Id).Answer;

                var uiChoices = questionItem.find('.AnswerOption');

                for (var a = 0; a < question.Choices.length; a++) {
                    uiChoices[a].innerHTML = question.Choices[a].Text;
                    var d = createDelegate({ e: uiChoices[a], value: a + 1 }, function () { setQValue(this.e, this.value) });
                    $(uiChoices[a]).bind('vclick', d);
                }

                //Add to questions UI list
                ulQuestions.append(divQuestion);

            }
            if (firstSubCategory) {
                if (category.SubCategories.length == 1) ulQuestions.show();
                firstSubCategory = false;
            }
            divSubCategory.appendTo(".ui-page").trigger("create");
            divSubCategory.removeClass("MasterTemplate");
            //divSubCategory.show();

            //Its a hack !!!! I am removing the duplicate after it happens, I am removing the non-working slider which created by jquery mobile
            ulQuestions.find(".ui-slider").each(function (index, element) {
                if (index % 2 == 0) {
                    //First remove the extra slider
                    $($(element).find("div[role='application']")[1]).remove();

                    //Replace the outer ui-slider with its content which is the inner slider ;)
                    $(element).replaceWith($(element).contents());
                }
            });

            //Add to sub categories UI list
            ulSubCategories.append(divSubCategory);
            
            
        }
        
        // do this last
        divSubCategory.removeClass("MasterTemplate");        
    }
    , Clear: function () {
        this._questionnaire = null;
        this._tab.find('.Categories:first').find('ul:first').find('.Category').remove();
        this._tab.find('.Questions:first').find('ul:first').find('.Question').remove();
    }
    , Save: function () {
        alert('save current company');
    }
}

