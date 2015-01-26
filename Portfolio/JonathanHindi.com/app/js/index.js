/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function resize() {
    var height;
    //height= $(window).height();
    height = 768;
    $('body:first').height(height);
    $('.ui-page:first').height(height);
    
    $('#Page:first').height(height).css({ "max-height": height });
    $('#ToolBar').height(height);
    $('.FakePage').height(height).css({ "max-height": height });

    $('#ulCompanies:first').height(height - $('#CompanyHeader:first').height() - 100);


    var tabQuestions = $('#tabQuestions:first');
    tabQuestions.find('#ulCategories:first').height(height - $('#CompanyName:first').height() - 83);
    tabQuestions.find('#ulSubCategories').height(tabQuestions.height()-20);

    //tab squares
    var tHeight = $('.tab').width();
    $('.tab').css('height', tHeight + 'px');


}

function showTab(e, tab) {
    $('.FakePage').hide();
    $('#ToolBar:first').find('li').removeClass('sel');
    $(e).addClass('sel');

    if (currentContext.CurrentCompany != null) {
        currentContext.questionnairePage.SaveCurrentCompanyAnswers();
    }

    if (tab == 'tabHome') {
        currentContext.homePage.LoadSavedCompanies();
    }
    if (tab == 'tabReport') {        
        currentContext.reportPage.Initialize();
    }

    if (tab) {
        $('#' + tab).show();
    }


}

function JQMOptimization() {
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
    $.mobile.buttonMarkup.hoverDelay = 0;    
}

function bindToolbar() {
    var container = $('#ToolBar > .nav');
    if (container.length == 0) alert('Cant find toolbar');
    container.find('#liHome:first').bind('vclick', function () { showTab(this, 'tabHome'); currentContext.reset(); });
    container.find('#liQuestions:first').bind('vclick', function () { if (currentContext.CurrentCompany == null) alert('select a company first'); else showTab(this, 'tabQuestions'); });
    container.find('#liReport:first').bind('vclick', function () { if (currentContext.CurrentCompany == null) alert('select a company first'); else showTab(this, 'tabReport') });
    container.find('#liAbout:first').bind('vclick', function () { showTab(this, 'tabAbout') });

    $('#btnNewCompany:first').bind('vclick', function () {
        currentContext.homePage.CreateNewCompany($('#txtCompanyName:first').val());
        $('#popupNewCompany:first').popup("close");
    });

    $('#btnGeneratePDF:first').bind('vclick', function () {
        currentContext.reportPage.GeneratePDF();
    });
}

function init() {
    currentContext = new Context();    
    resize();
    showTab($('div#ToolBar:first').find('li')[0], 'tabHome');
    currentContext.homePage.LoadSavedCompanies();
    bindToolbar();
    JQMOptimization();
    
}

var currentContext;
$(document).ready(init);
