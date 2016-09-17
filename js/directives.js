/**
 * Created by sujeet on 9/17/16.
 */
angular.module('adminlte.directives',[])
//.directive('alInfoBox',function(){
//    return {
//        scope:{
//            bgClass:'=bgClass',
//            iconClass:'=iconClass',
//            metricText:'=metricText',
//            number:'=number',
//            smallSuffix:'=smallSuffix'
//        },
//        restrict:'E',
//        template:'<p>Hello</p>\
//                <div class="info-box"> \
//                    <span class="info-box-icon {{ bgClass }}"><i class="{{ iconClass }}"></i></span> \
//                    <div class="info-box-content"> \
//                        <span class="info-box-text">{{ metricText }}</span> \
//                        <span class="info-box-number">{{ number }}<small>{{ smallSuffix }}</small></span> \
//                    </div> \
//                    <!-- /.info-box-content --> \
//                </div>'
//    }
//})
.directive('alInfoBox',function(){
    return {
        scope:{
            bgClass:'=',
            iconBgClass:'=',
            iconClass:'=iconClass',
            metricText:'=metricText',
            number:'=number',
            smallSuffix:'=smallSuffix',
            progress:'=progress',
            subText:'='
        },
        restrict:'E',
        template:'<div class="info-box {{bgClass}}"> \
                    <span class="info-box-icon {{iconBgClass}}"><i class="{{ iconClass }}"></i></span> \
                    <div class="info-box-content" \
                    <span class="info-box-text">{{ metricText }}</span>\
                    <span class="info-box-number">{{number}} <small>{{smallSuffix}}</small></span>\
                    <div class="progress" ng-show="progress">\
                    <div class="progress-bar" style="width: {{progress}}%"></div>\
                    </div>\
                    <span class="progress-description">\
                    {{ subText }} \
                    </span>\
                    </div>\
                        <!-- /.info-box-content -->\
                    </div>'
    }
})
.directive('alSmallBox',function(){
    return {
        scope:{
            bgClass:'=',
            iconClass:'=iconClass',
            metricText:'=metricText',
            number:'=number',
            superSuffix:'=',
            linkText:'=',
            footerLink:'='
        },
        restrict:'E',
        template:'<div class="small-box {{ bgClass }}">\
        <div class="inner">\
        <h3>{{ number }}<sup style="font-size: 20px">{{superSuffix}}</sup></h3>\
\
        <p>{{ metricText }}</p>\
        </div>\
        <div class="icon">\
        <i class="{{ iconClass }}"></i>\
        </div>\
        <a href="{{ footerLink }}" class="small-box-footer" ng-show="footerLink && linkText">\
        {{ linkText }} <i class="fa fa-arrow-circle-right"></i>\
        </a>     \
        </div>'
   }
})