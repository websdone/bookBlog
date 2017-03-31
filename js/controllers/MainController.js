
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [ 
      { 
        name: 'The Book of Trees',
        price: 19, 
        pubdate: new Date('2014', '03', '08'), 
        cover: 'img/the-book-of-trees.jpg',
        likes: 0,
        dislikes: 0
      }, 
      { 
        name: 'Program or be Programmed', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
      },
      { 
        name: 'The Power of Now', 
        price: 8, 
        pubdate: new Date('2014', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
      }, 
      { 
        name: 'The Secret', 
        price: 8, 
        pubdate: new Date('2014', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
      } 
    ],
  $scope.plusOne = function(index) {
      $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
      $scope.products[index].dislikes += 1;
  };
}]);

app.controller('ExampleController', ['$scope', function($scope) {
      $scope.user = {};

      $scope.update = function(user) {
        $scope.user = $scope.user;
      };

    }]);

app.controller('personCtrl', function($scope) {
    $scope.firstName = "";
    $scope.comment = "";
    $scope.comments = function() {
        return $scope.firstName + " " + $scope.comment;
    }
});
 