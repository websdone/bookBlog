/*

add new posts, add comments, and like posts.

*/

(function(){
  var app = angular.module('myApp',[]);
  
  app.controller('BlogController', ['$http', function($http){
    
    var blog = this;
    blog.title = "AngularJS Blog App";
    
    blog.posts = {};
      $http.get('http://chillaxing.online/websdone/work/posts_1.json').success(function(data){
        blog.posts = data;
      });
      
      blog.tab = 'blog';
      
      blog.selectTab = function(setTab){
        blog.tab = setTab;
        console.log(blog.tab)
      };
      
      blog.isSelected = function(checkTab){
        return blog.tab === checkTab;
      };
      
      blog.post = {};
      blog.addPost = function(){
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post ={};
      };   
  }]);
  
  app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
      this.comment.createdOn = Date.now();
      post.comments.push(this.comment);
      this.comment ={};
    };
  });
 
})();