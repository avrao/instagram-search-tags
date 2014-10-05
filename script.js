angular.module('JSONtag', []).
controller('tagCtrl', function($scope, $http, $timeout){
	$scope.searchTag = function(tagname){
		var url = "https://api.instagram.com/v1/tags/" + tagname + "/media/recent";
        var request = {
        	access_token: "206055318.1fb234f.e13f0b84507444f087ddc97777125528",
            client_id: "718e282f61474d43a0c2e51f0b1de1cf",
            tagname: tagname,
            outputMode: 'json',
            showSourceText: '1',
            callback: "JSON_CALLBACK"
        };

        $http({
            method: 'JSONP',
            url: url,
            params: request
        }).
        success(function(data) {
            var results = data.data;
            $scope.results = results;
            $scope.tagname = tagname;

        }).
        error(function(e) {
            alert('error ' + e	);
        });
	};
	$scope.reset = function(){
		$scope.tagword = '';
	};
	$scope.showresult = false;
	$scope.showmessage = false;
	$scope.showdiv = function(){
		$scope.showresult = false;
		$scope.showmessage = true;
		$timeout(function() {$scope.showmessage = false;}, 500);
		$timeout(function() {$scope.showresult = true;}, 500);
	};
	
});
