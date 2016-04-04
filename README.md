# angular-mixitup
mixItUp with angularjs
You need to include mixitup library to your bower.
bower install --save mixitup

then download my directive and include it. 

directive sould call like this:

 <div id="grid" mixitup='mixitup' class="row portfolio show-all" entities='fullList'
       defaultorder="{{defaultFilter}}"  >
    <div class="mix portfolio-item grid-item" isotope-item="isotope-item" ng-class="className($index,fullList)"  data-myorder="{{$index}}"
         ng-repeat="drawing in fullList">
      <a href="#"><img class="img-responsive" ng-src="./resources/images/{{drawing.image}}" alt="" /></a>
      <div class="detail">
        <div class="pname">
          {{drawing.name}}
        </div>
        <div class="category"><span ng-repeat="cat in drawing.category">{{cat}}{{$last ? '' : ', '}}</span></div>
      </div>
    </div>
  </div>
  
  in above code, fullList is the scope where all your data stored.
