sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/app/project1/test/integration/FirstJourney',
		'com/app/project1/test/integration/pages/studentList',
		'com/app/project1/test/integration/pages/studentObjectPage',
		'com/app/project1/test/integration/pages/AddressObjectPage'
    ],
    function(JourneyRunner, opaJourney, studentList, studentObjectPage, AddressObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/app/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestudentList: studentList,
					onThestudentObjectPage: studentObjectPage,
					onTheAddressObjectPage: AddressObjectPage
                }
            },
            opaJourney.run
        );
    }
);