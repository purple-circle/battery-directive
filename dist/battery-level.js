
/*
 * angular-material-icons v0.4.0
 * (c) 2014 Klar Systems
 * License: MIT
 * Modified by Juha Tauriainen 2015
 */

(function() {
  'use strict';
  angular.module('materialBatteryIcon', []).directive('batteryIcon', function() {
    var shapes;
    shapes = {
      'battery_20': '<path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z"/><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"/>',
      'battery_30': '<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"/><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"/>',
      'battery_50': '<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"/><path d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z"/>',
      'battery_60': '<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"/><path d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"/>',
      'battery_80': '<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"/><path d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"/>',
      'battery_90': '<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"/><path d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"/>',
      'battery_alert': '<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"/>',
      'battery_charging_20': '<path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"/>',
      'battery_charging_30': '<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z"/>',
      'battery_charging_50': '<path d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"/>',
      'battery_charging_60': '<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z"/>',
      'battery_charging_80': '<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z"/>',
      'battery_charging_90': '<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z"/>',
      'battery_charging_full': '<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>',
      'battery_full': '<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>',
      'battery_std': '<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>',
      'battery_unknown': '<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z"/>'
    };
    return {
      restrict: 'E',
      link: function(scope, element, attr) {
        var icon, render, replace, resize, size;
        icon = void 0;
        size = void 0;
        render = function() {
          var ss;
          if (attr.icon !== void 0) {
            icon = attr.icon;
            ss = icon.match(/ic_(.*)_([0-9]+)px.svg/m);
            if (ss != null) {
              icon = ss[1];
              size = ss[2];
            }
          } else {
            icon = 'help';
          }
          if (shapes[icon] === void 0) {
            icon = 'help';
          }
          if (attr.size != null) {
            size = attr.size;
          } else if (size !== null) {
            size = 24;
          }
          return element.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' + size + '" height="' + size + '">' + shapes[icon] + '</svg>');
        };
        replace = function(newicon) {
          var error;
          if (shapes[newicon] === void 0) {
            newicon = 'help';
          }
          if (newicon === icon) {
            return;
          }
          try {
            element.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' + size + '" height="' + size + '"><g id="' + newicon + '" style="display:none">' + shapes[newicon] + '</g><g id="' + icon + '" style="display:none">' + shapes[icon] + '</g></svg>');
            new SVGMorpheus(element.children()[0]).to(newicon, JSON.parse(attr.options || null));
          } catch (_error) {
            error = _error;
            element.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' + size + '" height="' + size + '">' + shapes[newicon] + '</svg>');
          }
          return icon = newicon;
        };
        resize = function(newsize) {
          var children;
          if (newsize === size) {
            return;
          }
          children = element.children()[0];
          children.setAttribute('width', newsize);
          children.setAttribute('height', newsize);
          return size = newsize;
        };
        render();
        if (attr.icon !== void 0) {
          attr.$observe('icon', replace);
        }
        if (attr.size !== void 0) {
          return attr.$observe('size', resize);
        }
      }
    };
  });

}).call(this);

(function() {
  var module;

  module = angular.module('batteryLevel', ['batteryTemplates', 'materialBatteryIcon']);

  module.directive('batteryLevel', ["$timeout", "$interval", function($timeout, $interval) {
    return {
      templateUrl: "battery-level.html",
      restrict: 'E',
      scope: {
        level: "@",
        charging: "="
      },
      link: function($scope) {
        var alertsGiven, batteryAlertInterval, isManual, processBatteryLevel;
        if (!navigator.getBattery) {
          return;
        }
        alertsGiven = 0;
        batteryAlertInterval = null;
        processBatteryLevel = function(battery) {
          var batteryLevel, charging, isCharging, level;
          if (typeof $scope.charging !== "undefined") {
            isCharging = $scope.charging;
          } else {
            isCharging = battery.charging;
          }
          batteryLevel = "unknown";
          charging = '';
          if (isCharging) {
            charging = "_charging";
          }
          if (battery.level == null) {
            return $scope.batteryLevel = "battery_unknown";
          } else if (battery.level < 0.1 && !isCharging) {
            batteryLevel = alertsGiven % 2 === 0 ? 'alert' : 20;
            $interval.cancel(batteryAlertInterval);
            batteryAlertInterval = $interval(function() {
              alertsGiven++;
              batteryLevel = alertsGiven % 2 === 0 ? 'alert' : 20;
              return $scope.batteryLevel = "battery_" + batteryLevel;
            }, 3000);
            return $scope.batteryLevel = "battery_" + batteryLevel;
          } else {
            level = battery.level * 100;
            if (level <= 30) {
              batteryLevel = 20;
            }
            if (level >= 30) {
              batteryLevel = 30;
            }
            if (level >= 50) {
              batteryLevel = 50;
            }
            if (level >= 60) {
              batteryLevel = 60;
            }
            if (level >= 80) {
              batteryLevel = 80;
            }
            if (level >= 90) {
              batteryLevel = 90;
            }
            if (level >= 100) {
              batteryLevel = "full";
            }
            return $scope.batteryLevel = "battery" + charging + "_" + batteryLevel;
          }
        };
        isManual = function() {
          return typeof $scope.level !== "undefined" && $scope.level !== "";
        };
        return $scope.$watch("level", function() {
          var battery;
          if (isManual()) {
            battery = {
              level: Number($scope.level) / 100,
              charging: $scope.charging
            };
            return processBatteryLevel(battery);
          } else {
            return navigator.getBattery().then(function(battery) {
              battery.onlevelchange = function() {
                return $timeout(function() {
                  if (!isManual()) {
                    return processBatteryLevel(battery);
                  }
                });
              };
              battery.onchargingchange = function() {
                return $timeout(function() {
                  if (!isManual()) {
                    return processBatteryLevel(battery);
                  }
                });
              };
              return $timeout(function() {
                if (!isManual()) {
                  return processBatteryLevel(battery);
                }
              });
            });
          }
        });
      }
    };
  }]);

}).call(this);

angular.module("batteryTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("battery-level.html","<battery-icon icon=\"{{batteryLevel}}\" ng-if=\"batteryLevel\"></battery-icon>");}]);