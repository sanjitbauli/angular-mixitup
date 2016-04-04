    'use strict';
    myApp
        .directive('mixitup',function(){
          var linker = function(scope,element,attr) {

            scope.$watch('entities', function(newVal, oldVal){
                if (element.mixItUp('isLoaded')) {
                  element.mixItUp('destroy');
                  element.mixItUp();
                } else {
                  element.mixItUp();
                }
            },true);
          };
          return {
            link: linker,
            scope:{entities:'='}
          }
        })
