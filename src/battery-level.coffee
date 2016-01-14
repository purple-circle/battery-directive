module = angular.module('batteryLevel', ['batteryTemplates', 'materialBatteryIcon'])
module.directive 'batteryLevel', ($timeout, $interval) ->
  templateUrl: 'battery-level.html'
  restrict: 'E'
  scope:
    level: '@'
    charging: '='
  link: ($scope) ->
    if not navigator.getBattery
      return

    alertsGiven = 0
    batteryAlertInterval = null

    # These levels are based on icons from
    # https://github.com/klarsys/angular-material-icons
    # levels =
    #   battery_20
    #   battery_30
    #   battery_50
    #   battery_60
    #   battery_80
    #   battery_90
    #   battery_alert
    #   battery_charging_20
    #   battery_charging_30
    #   battery_charging_50
    #   battery_charging_60
    #   battery_charging_80
    #   battery_charging_90
    #   battery_charging_full
    #   battery_full
    #   battery_unknown

    processBatteryLevel = (battery) ->
      isCharging =
        if $scope.charging?
          $scope.charging
        else
          battery.charging

      batteryLevel = 'unknown'
      charging = ''

      if isCharging
        charging = '_charging'

      if not battery.level?
        $scope.batteryLevel = 'battery_unknown'

      # If battery level drops under 10%, change between alert and 20% icon
      else if battery.level < 0.1 and not isCharging
        batteryLevel = if alertsGiven % 2 is 0 then 'alert' else 20

        $interval.cancel(batteryAlertInterval)

        batteryAlertInterval = $interval ->
          alertsGiven++
          batteryLevel = if alertsGiven % 2 is 0 then 'alert' else 20
          $scope.batteryLevel = "battery_#{batteryLevel}"
        , 3000

        $scope.batteryLevel = "battery_#{batteryLevel}"

      else
        level = battery.level * 100

        if level <= 30
          batteryLevel = 20
        if level >= 30
          batteryLevel = 30
        if level >= 50
          batteryLevel = 50
        if level >= 60
          batteryLevel = 60
        if level >= 80
          batteryLevel = 80
        if level >= 90
          batteryLevel = 90
        if level >= 100
          batteryLevel = 'full'

        $scope.batteryLevel = "battery#{charging}_#{batteryLevel}"


    isManual = ->
      $scope.level isnt undefined and $scope.level isnt ''


    # This watch is for testing
    $scope.$watch 'level', ->
      if isManual()
        battery =
          level: Number($scope.level) / 100
          charging: $scope.charging

        processBatteryLevel(battery)
      else
        navigator
          .getBattery()
          .then (battery) ->
              battery.onlevelchange = ->
                $timeout ->
                  if not isManual()
                    processBatteryLevel(battery)

              battery.onchargingchange = ->
                $timeout ->
                  if not isManual()
                    processBatteryLevel(battery)

              $timeout ->
                if not isManual()
                  processBatteryLevel(battery)
