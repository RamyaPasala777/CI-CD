sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.app.project1',
            componentId: 'studentList',
            contextPath: '/student'
        },
        CustomPageDefinitions
    );
});