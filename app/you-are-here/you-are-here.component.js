angular.module('youAreHereModule')
    .component('xtremeYouAreHereTimeline', {
        template: require('./you-are-here.component.html') ,
        bindings: {
            timelineData: '<timelineData'
        },
        controller: YouAreHereCtrl
    });

function YouAreHereCtrl() {
    var $ctrl = this;
	
	$ctrl.metadata = {};
	$ctrl.milestones = {};
	
	$ctrl.timelineData.then(
		_timelineLoaded,
		_timelineLoadFailed);
		
	function _timelineLoaded(data) {
		$ctrl.metadata = data.metadata;
		$ctrl.milestones = data.mileStone;
	}
	
	function _timelineLoadFailed(error) {
	}
}