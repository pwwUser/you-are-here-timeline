angular.module('youAreHereModule')
    .component('xtremeYouAreHereTimeline', {
        template: require('./you-are-here.component.html') ,
        bindings: {
            isIbesVersion: '<isIbesVersion',
            idalinkData: '<idalinkData', // only used in idalink
            ibesProgramId: '<ibesProgramId', // only used in ibes
            noticeUrl: '<noticeUrl'
        },
        controller: YouAreHereCtrl
    });

function YouAreHereCtrl() {
    var $ctrl = this;
}