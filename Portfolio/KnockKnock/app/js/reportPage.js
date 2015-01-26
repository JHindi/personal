function ReportPage() {

    //this._questionnaire = Questionnaire;
    //this._tab = $('#tabReports:first');
}

ReportPage.prototype = {

    Formula_Industry_Assessment: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subIndustry_Assessment');
        return value;
    },

    Formula_Macro_Environmental_Assessment: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subMacro_Environmental_Assessment');
        return value;
    },

    Formula_ETL_Assessment: function () {
        var value = (this.Formula_Industry_Assessment() + this.Formula_Macro_Environmental_Assessment()) / 2;
        return value;
    },

    Formula_Innovation_Aggressivness: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subINNOVATION_AGGRESSIVENESS');
        return value;
    },

    Formual_Innovation_Aggressivness_GAP: function () {
        var value = Math.abs((this.Formula_ETL_Assessment() - this.Formula_Innovation_Aggressivness()));
        return value;
    },

    Formula_Marketing_Aggressivness: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subMARKETING_AGGRESSIVENESS');
        return value;
    },

    Formual_Marketing_Aggressivness_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Marketing_Aggressivness());
        return value;
    },

    Formula_Firms_Aggressivness: function () {
        var value = (this.Formula_Innovation_Aggressivness() + this.Formula_Marketing_Aggressivness()) / 2;
        return value;
    },

    Formual_Strategic_Aggressivness_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Firms_Aggressivness());
        return value;
    },

    Formula_Managers: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subGENERAL_MANAGERS');
        return value;
    },

    Formula_Managers_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Managers());
        return value;
    },

    Formula_Culture: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subCULTURE');
        return value;
    },

    Formula_Culture_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Culture());
        return value;
    },

    Formula_Structure: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subSTRUCTURE');
        return value;
    },

    Formula_Structure_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Structure());
        return value;
    },

    Formula_Systems: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subSYSTEMS');
        return value;
    },

    Formula_Systems_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Systems());
        return value;
    },

    Formula_Technology: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subMANAGEMENT_TECHNOLOGY');
        return value;
    },

    Formula_Technology_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Technology());
        return value;
    },

    Formula_Capacity: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subMANAGEMENT_CAPACITY');
        return value;
    },

    Formula_Capacity_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Capacity());
        return value;
    },

    Formula_Effective_Capacity_Investment: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subEFFECTIVE_CAPACITY_INVESTMENT_RELATIVE_TO_MARKET_LEADER');
        return value;
    },

    Formula_Strategic_Investment: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subSTRATEGIC_INVESTMENT_RELATIVE_TO_MARKET_LEADER');
        return value;
    },

    Formula_Future_Competitive_Position: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subFuture_Competitive_Position');
        return value;
    },

    Formula_Future_Industry_Prospects: function () {
        var value = currentContext.CurrentCompany.GetSubCategoryAverage('subFuture_Prospects_of_the_Industry');
        return value;
    },

    Formula_Capacity_Investment_Coefficient: function () {
        var value = this.Formula_Effective_Capacity_Investment() / 5;
        return value;
    },

    Formula_Strategic_Investment_Coefficient: function () {
        var value = this.Formula_Strategic_Investment() / 5;
        return value;
    },

    Formula_Firm_Capability_Responsivness: function () {
        var value = (this.Formula_Managers() + this.Formula_Culture() + this.Formula_Structure() + this.Formula_Systems() + this.Formula_Technology() + this.Formula_Capacity()) / 6;
        return value;
    },

    Formula_Capability_Responsivness_GAP: function () {
        var value = Math.abs(this.Formula_ETL_Assessment() - this.Formula_Firm_Capability_Responsivness());
        return value;
    },

    Formula_Strategic_Budget: function () {
        var value = 5 * this.Formula_Capacity_Investment_Coefficient() * this.Formula_Strategic_Investment_Coefficient();
        return value;
    },
    Formula_Strategic_Posture: function () {
        var x = this.Formual_Strategic_Aggressivness_GAP();
        var y = this.Formula_Capability_Responsivness_GAP();

        var xFactor = 0;
        var yFactor = 0;
        if (x >= 0 && x <= 0.049) {
            xFactor = 1.00;
        }
        else if (x >= 0.050 && x <= 0.100) {
            xFactor = 0.95;
        }
        else if (x >= 0.101 && x <= 0.250) {
            xFactor = 0.90;
        }
        else if (x >= 0.251 && x <= 0.350) {
            xFactor = 0.85;
        }
        else if (x >= 0.351 && x <= 0.500) {
            xFactor = 0.80;
        }
        else if (x >= 0.501 && x <= 0.750) {
            xFactor = 0.70;
        }
        else if (x >= 0.751 && x <= 1.000) {
            xFactor = 0.60;
        }
        else if (x >= 1.001 && x <= 1.250) {
            xFactor = 0.50;
        }
        else if (x >= 1.251 && x <= 1.750) {
            xFactor = 0.40;
        }
        else if (x >= 1.751) {
            xFactor = 0.30;
        }

        if (y >= 0 && y <= 0.049) {
            yFactor = 1.00;
        }
        else if (y >= 0.050 && y <= 0.100) {
            yFactor = 0.95;
        }
        else if (y >= 0.101 && y <= 0.250) {
            yFactor = 0.90;
        }
        else if (y >= 0.251 && y <= 0.350) {
            yFactor = 0.85;
        }
        else if (y >= 0.351 && y <= 0.500) {
            yFactor = 0.80;
        }
        else if (y >= 0.501 && y <= 0.750) {
            yFactor = 0.70;
        }
        else if (y >= 0.751 && y <= 1.000) {
            yFactor = 0.60;
        }
        else if (y >= 1.001 && y <= 1.250) {
            yFactor = 0.50;
        }
        else if (y >= 1.251 && y <= 1.750) {
            yFactor = 0.40;
        }
        else if (y >= 1.751) {
            yFactor = 0.30;
        }

        var result = Math.abs(5 * xFactor * yFactor);
        return result;
    },

    GeneratePDF: function () {
        var doc = new jsPDF();
        doc.setFontType("bold");
        doc.setTextColor(255, 0, 0);
        doc.text(80, 20, currentContext.CurrentCompany.CompanyName + ' Assessment Report');

        doc.setTextColor(0, 0, 0);
        doc.setFontType("bold");
        doc.text(20, 40, 'Components Gap and Closing Costs');
        doc.line(20, 43, 190, 42);

        doc.setFontType("normal");
        doc.text(20, 50, 'Environmental Turbelance Level');
        doc.text(160, 50, this.Formula_ETL_Assessment().toFixed(2));

        doc.text(20, 60, '');
        doc.setFontType("bold");
        doc.text(20, 70, 'Strategic Components');
        doc.text(140, 70, 'Component Gaps');
        doc.line(20, 73, 190, 73);

        doc.setFontType("normal");
        doc.text(20, 80, 'Innovation Aggressivness');
        doc.text(120, 80, this.Formula_Innovation_Aggressivness().toFixed(2));
        doc.text(160, 80, this.Formual_Innovation_Aggressivness_GAP().toFixed(2));
        this.DrawGapIndicator(180, 80, this.Formual_Innovation_Aggressivness_GAP().toFixed(2), doc);

        doc.text(20, 90, 'Marketing Aggressivness');
        doc.text(120, 90, this.Formula_Marketing_Aggressivness().toFixed(2));
        doc.text(160, 90, this.Formual_Marketing_Aggressivness_GAP().toFixed(2));
        this.DrawGapIndicator(180, 90, this.Formual_Marketing_Aggressivness_GAP().toFixed(2), doc);

        doc.text(20, 100, 'Firms Aggressivness Level');
        doc.text(120, 100, this.Formula_Firms_Aggressivness().toFixed(2));

        doc.text(20, 110, 'Strategic Aggressivness Gap');
        doc.text(160, 110, this.Formual_Strategic_Aggressivness_GAP().toFixed(2));
        this.DrawGapIndicator(180, 110, this.Formual_Strategic_Aggressivness_GAP().toFixed(2), doc);


        doc.text(20, 120, '');
        doc.setFontType("bold");
        doc.text(20, 130, 'General Management Capability');
        doc.text(140, 130, 'Component Gaps');
        doc.line(20, 133, 190, 132);

        doc.setFontType("normal");
        doc.text(20, 140, 'Managers');
        doc.text(120, 140, this.Formula_Managers().toFixed(2));
        doc.text(160, 140, this.Formula_Managers_GAP().toFixed(2));
        this.DrawGapIndicator(180, 140, this.Formula_Managers_GAP().toFixed(2), doc);

        doc.text(20, 150, 'Culture');
        doc.text(120, 150, this.Formula_Culture().toFixed(2));
        doc.text(160, 150, this.Formula_Culture_GAP().toFixed(2));
        this.DrawGapIndicator(180, 150, this.Formula_Culture_GAP().toFixed(2), doc);

        doc.text(20, 160, 'Structure');
        doc.text(120, 160, this.Formula_Structure().toFixed(2));
        doc.text(160, 160, this.Formula_Structure_GAP().toFixed(2));
        this.DrawGapIndicator(180, 160, this.Formula_Structure_GAP().toFixed(2), doc);

        doc.text(20, 170, 'Systems');
        doc.text(120, 170, this.Formula_Systems().toFixed(2));
        doc.text(160, 170, this.Formula_Systems_GAP().toFixed(2));
        this.DrawGapIndicator(180, 170, this.Formula_Systems_GAP().toFixed(2), doc);

        doc.text(20, 180, 'Technology');
        doc.text(120, 180, this.Formula_Technology().toFixed(2));
        doc.text(160, 180, this.Formula_Technology_GAP().toFixed(2));
        this.DrawGapIndicator(180, 180, this.Formula_Technology_GAP().toFixed(2), doc);

        doc.text(20, 190, 'Capacity');
        doc.text(120, 190, this.Formula_Capacity().toFixed(2));
        doc.text(160, 190, this.Formula_Capacity_GAP().toFixed(2));
        this.DrawGapIndicator(180, 190, this.Formula_Capacity_GAP().toFixed(2), doc);

        doc.text(20, 200, 'Firm Capability Responsivness');
        doc.text(120, 200, this.Formula_Firm_Capability_Responsivness().toFixed(2));

        doc.text(20, 210, 'Capability Responsivness Gap');
        doc.text(160, 210, this.Formula_Capability_Responsivness_GAP().toFixed(2));
        this.DrawGapIndicator(180, 210, this.Formula_Capability_Responsivness_GAP().toFixed(2), doc);

        doc.text(20, 220, '');

        doc.text(20, 230, 'Strategic Posture');
        doc.text(120, 230, this.Formula_Strategic_Posture().toFixed(2));
        doc.line(20, 233, 190, 233);

        doc.text(20, 240, 'Strategic Budget');
        doc.text(120, 240, this.Formula_Strategic_Budget().toFixed(2));

        var currentdate = new Date();
        var datetime = (currentdate.getMonth() + 1) + "/"
                        + currentdate.getDate() + "/"
                        + currentdate.getFullYear() + "  "
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes() + ":"
                        + currentdate.getSeconds();

        doc.setFontSize(10);
        doc.text(138, 290, 'Generated at ' + datetime);
        //doc.output('datauri');


        var fileName = currentContext.CurrentCompany.CompanyName + '.pdf';
        //doc.save(fileName);

        return fileName;



        /*
        var out = doc.output();
@@ -318,8 +329,17 @@ ReportPage.prototype = {
        var ref = window.open(url, '_blank', 'location=yes');
        */
        //navigator.app.loadUrl(url, { openExternal: true });
        //doc.save(fileName);
        //$('.EmailPDF').attr('href', 'data:application/pdf;base64,' + Base64.encode(out));
        //$('.EmailPDF').attr('target', '_blank');

        //return fileName;

        //html2canvas($('#tabReport .reportSummary:First'), {
        //    onrendered: function (canvas) {
        //        var img = canvas.toDataURL();
        //        //window.open(img);
        //        window.open(img, '_blank', 'location=yes');
        //    }
        //});

        //var out = doc.output();
        //var url = 'data:application/pdf;base64,' + Base64.encode(out);        
        //var ref = window.open(url, '_blank', 'location=yes');
        //$('.EmailPDF').attr('href', 'data:application/pdf;base64,' + Base64.encode(out));
        //$('.EmailPDF').attr('target', '_blank');

        //navigator.app.loadUrl(url, { openExternal: true });
    },
    DrawGapIndicator: function (x, y, value, doc) {
        if (value < 0.5) {
            doc.setFillColor(255, 0, 0);
        }
        else {
            doc.setFillColor(0, 255, 0);
        }
        doc.circle(x, y - 2, 3, 'FD');
    },
    Initialize: function () {
        var tabReport = $('#tabReport:first');
        tabReport.find('.ReportTitle > h1').html(currentContext.CurrentCompany.CompanyName + ' Assessment');

        tabReport.find('.subMacro_Environmental_Assessment > .AVG:First').html(this.Formula_ETL_Assessment().toFixed(2));

        tabReport.find('.subINNOVATION_AGGRESSIVENESS:First > .AVG:First').html(this.Formula_Innovation_Aggressivness().toFixed(2));
        tabReport.find('.subINNOVATION_AGGRESSIVENESS:First > .GAP:First').html(this.Formual_Innovation_Aggressivness_GAP().toFixed(2));

        tabReport.find('.subMARKETING_AGGRESSIVENESS:First > .AVG:First').html(this.Formula_Marketing_Aggressivness().toFixed(2));
        tabReport.find('.subMARKETING_AGGRESSIVENESS:First > .GAP:First').html(this.Formual_Marketing_Aggressivness_GAP().toFixed(2));

        tabReport.find('.frmFirmsAggressivness:First > .AVG:First').html(this.Formula_Firms_Aggressivness().toFixed(2));

        tabReport.find('.frmStrategicAggressivness:First > .GAP:First').html(this.Formual_Strategic_Aggressivness_GAP().toFixed(2));

        tabReport.find('.subGENERAL_MANAGERS:First > .AVG:First').html(this.Formula_Managers().toFixed(2));
        tabReport.find('.subGENERAL_MANAGERS:First > .GAP:First').html(this.Formula_Managers_GAP().toFixed(2));

        tabReport.find('.subCULTURE > .AVG:First').html(this.Formula_Culture().toFixed(2));
        tabReport.find('.subCULTURE > .GAP:First').html(this.Formula_Culture_GAP().toFixed(2));

        tabReport.find('.subSTRUCTURE > .AVG:First').html(this.Formula_Structure().toFixed(2));
        tabReport.find('.subSTRUCTURE > .GAP:First').html(this.Formula_Structure_GAP().toFixed(2));

        tabReport.find('.subSYSTEMS:First > .AVG:First').html(this.Formula_Systems().toFixed(2));
        tabReport.find('.subSYSTEMS:First > .GAP:First').html(this.Formula_Systems_GAP().toFixed(2));

        tabReport.find('.subMANAGEMENT_TECHNOLOGY > .AVG:First').html(this.Formula_Technology().toFixed(2));
        tabReport.find('.subMANAGEMENT_TECHNOLOGY > .GAP:First').html(this.Formula_Technology_GAP().toFixed(2));

        tabReport.find('.subMANAGEMENT_CAPACITY > .AVG:First').html(this.Formula_Capacity().toFixed(2));
        tabReport.find('.subMANAGEMENT_CAPACITY > .GAP:First').html(this.Formula_Capacity_GAP().toFixed(2));

        tabReport.find('.frmFirmCapabilityResponsivness:First > .AVG:First').html(this.Formula_Firm_Capability_Responsivness().toFixed(2));
        tabReport.find('.frmCapabilityResponsivnessGap:First > .GAP:First').html(this.Formula_Capability_Responsivness_GAP().toFixed(2));

        tabReport.find('.frmStrategicPosture > .AVG:First').html(this.Formula_Strategic_Posture().toFixed(2));
        tabReport.find('.frmStrategicBudget > .AVG:First').html(this.Formula_Strategic_Budget().toFixed(2));
        tabReport.find('.frmFutureCompetitivePosition > .AVG:First').html(this.Formula_Future_Competitive_Position().toFixed(2));
        tabReport.find('.frmFutureIndustryProspects > .AVG:First').html(this.Formula_Future_Industry_Prospects().toFixed(2));


        tabReport.find('.GAP').each(function (i, e) {

            try {
                var gap = parseFloat(e.innerHTML);
                if (gap != 'NaN') {
                    var icon = $(e.parentNode).find('.GapIcon:first')[0];
                    icon.className = 'GapIcon';
                    if (gap < 0.5) icon.className += ' redGapIcon';
                    else if (gap < 0.6) icon.className += ' yellowGapIcon';
                    else icon.className += ' greenGapIcon';
                }
            }
            catch (e) {
                debugger;
            }
        });

        this.drawChart();

        var reportBody = '';
        reportBody = reportBody + 'Components Gap and Closing Costs         ';
        reportBody = reportBody + '%0A--------------------------------------';
        reportBody = reportBody + '%0AEnvironmental Turbelance Level        ' + this.Formula_ETL_Assessment().toFixed(2);
        reportBody = reportBody + '%0A';

        reportBody = reportBody + '%0AStrategic Components';
        reportBody = reportBody + '%0A--------------------------------------';
        reportBody = reportBody + '%0AInnovation Aggressivness              ' + this.Formula_Innovation_Aggressivness().toFixed(2) + '        ' + this.Formual_Innovation_Aggressivness_GAP().toFixed(2);
        reportBody = reportBody + '%0AMarketing Aggressivness               ' + this.Formula_Marketing_Aggressivness().toFixed(2) + '        ' + this.Formual_Marketing_Aggressivness_GAP().toFixed(2);
        reportBody = reportBody + '%0AFirms Aggressivness Level             ' + this.Formula_Firms_Aggressivness().toFixed(2);
        reportBody = reportBody + '%0AStrategic Aggressivness Gap           ' + '        ' + this.Formual_Strategic_Aggressivness_GAP().toFixed(2);
        reportBody = reportBody + '%0A';

        reportBody = reportBody + '%0AGeneral Management Capability';
        reportBody = reportBody + '%0A--------------------------------------';
        reportBody = reportBody + '%0AManagers                              ' + this.Formula_Managers().toFixed(2) + '        ' + this.Formula_Managers_GAP().toFixed(2);
        reportBody = reportBody + '%0ACulture                               ' + this.Formula_Culture().toFixed(2) + '        ' + this.Formula_Culture_GAP().toFixed(2);
        reportBody = reportBody + '%0AStructure                             ' + this.Formula_Structure().toFixed(2) + '        ' + this.Formula_Structure_GAP().toFixed(2);
        reportBody = reportBody + '%0ASystems                               ' + this.Formula_Systems().toFixed(2) + '        ' + this.Formula_Systems_GAP().toFixed(2);
        reportBody = reportBody + '%0ATechnology                            ' + this.Formula_Technology().toFixed(2) + '        ' + this.Formula_Technology_GAP().toFixed(2);
        reportBody = reportBody + '%0ACapacity                              ' + this.Formula_Capacity().toFixed(2) + '        ' + this.Formula_Capacity_GAP().toFixed(2);
        reportBody = reportBody + '%0A';

        reportBody = reportBody + '%0AFirm Capability Responsivness         ' + this.Formula_Firm_Capability_Responsivness().toFixed(2);
        reportBody = reportBody + '%0ACapability Responsivness Gap          ' + '        ' + this.Formula_Capability_Responsivness_GAP().toFixed(2);
        reportBody = reportBody + '%0A';

        reportBody = reportBody + '%0AStrategic Posture                     ' + this.Formula_Strategic_Posture().toFixed(2);
        
        reportBody = reportBody + '%0AStrategic Budget                      ' + this.Formula_Strategic_Budget().toFixed(2);
        
        reportBody = reportBody + '%0AFuture Competitive Position           ' + this.Formula_Future_Competitive_Position().toFixed(2);
        
        reportBody = reportBody + '%0AFuture Industry Prospects             ' + this.Formula_Future_Industry_Prospects().toFixed(2);

        $('.btnGeneratePDF').attr('onclick', 'location.href=\'mailto:?subject=Assessment&body=' + reportBody + '\'');
    }
, drawChart: function () {

    if (currentContext.CurrentCompany != null) {
        var strategicPosture = parseFloat(this.Formula_Strategic_Posture().toFixed(2));
        var strategicBudget = parseFloat(this.Formula_Strategic_Budget().toFixed(2));
        var industryProspects = parseFloat(this.Formula_Future_Industry_Prospects().toFixed(2));
        var competitivePosition = parseFloat(this.Formula_Future_Competitive_Position().toFixed(2));

        var data = google.visualization.arrayToDataTable([
          ['', '', ''],
          [1, strategicPosture, null],
          [5, strategicBudget, null],
          [competitivePosition, null, 5],
          [industryProspects, null, 1],
        ]);

        var options = {
            title: 'Firms Future Competitive Position',
            width: 520,
            height: 420,
            legend: { position: 'none' },
            hAxes:
                {
                    0: { title: 'Future Industry Prospects', minValue: 1, maxValue: 5 }
                },
            vAxes:
                {
                    0: { title: 'Firms Strategic Posture', minValue: 1, maxValue: 5 },
                    1: { title: 'Strategic Budget', minValue: 1, maxValue: 5 }
                },
            series: [
                    { targetAxisIndex: 0 },
                    { targetAxisIndex: 1 },
            ]
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
}
}