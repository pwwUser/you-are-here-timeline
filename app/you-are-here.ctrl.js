angular.module('youAreHereModule')
    .controller('youAreHereCtrl', ['$scope', '$http', '$q', '$log',
function($scope, $http, $q, $log) {
	
	var _deferred = $q.defer();
	$scope.timelineData = _deferred.promise;
	
	function _loadTimelineData() {
		$scope.errorMessage = null;
		$http.get('http://localhost:9001/db')
			.then(
				function success(response) {
					_deferred.resolve(response.data);
				},
				function error(response) {
					//_deferred.reject(response.data);
					$log.error('Failed to return timeline data from back-end. Using mock data for now.');
					_deferred.resolve(_mockResponseData);
				});
	}
	_loadTimelineData();

	

	var _mockResponseData =
			{
				metadata: {
					currentDate: "2017-6-27",
					programStatus: "Active",
					programStatusSupportText: "Active 2018",
					programId: "9036",
					category: "B1",
					assetName: "IBES"
				},
				mileStone: [
					{
						name: "THIS-IS-MOCK-DATA",
						type: "FIXED",
						description: "Health Coverage Re-evaluation Process Begins",
						supportText: "",
						date: "2017-08-01",
						documentId: null,
						typeDefinition: null
					},
					{
						name: "OE-BEGIN",
						type: "FIXED",
						description: "Open Enrollment Begins",
						supportText: "",
						date: "2017-11-01",
						documentId: null,
						typeDefinition: null
					},
					{
						name: "OE-END",
						type: "FIXED",
						description: "Open Enrollment Ends",
						supportText: "",
						date: "2017-12-15",
						documentId: null,
						typeDefinition: null
					},
					{
						name: "2099-SENT",
						type: "DHW-ACTION",
						description: "Request to Report 2018 Information Sent to You (HW2099)",
						supportText: "",
						date: "2017-09-06",
						documentId: null,
						typeDefinition: null
					},
					{
						name: "ELIGIBILITY-STATUS",
						type: "STATUS",
						description: "Your re-evaluation for Health Coverage Assistance is complete",
						supportText: "Please review your approval notice here. If there are any changes or corrections to the information used to complete your re-evaluation, please contact the Department.",
						date: "2017-10-30",
						documentId: null,
						typeDefinition: "POSITIVE"
					}
				]
			};
}]);