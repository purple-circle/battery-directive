describe('Check battery levels, not charging, development version', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000/test/pages/not-charging-build-min.html');
  });

  it('should have battery-level element', function() {
    expect(element(by.tagName('battery-level')).isPresent()).toBe(true);
  });

  it('should have battery-icon element', function() {
    expect(element(by.tagName('battery-icon')).isPresent()).toBe(true);
  });

  /*
   Levels to test
    alert
    20, 30, 50, 60, 80, 90
    full
   */

  it('should have alert icon', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    for(var i = -2; i < 10; i++) {
      input.clear();
      input.sendKeys(i);
      expect(icon.getAttribute('icon')).toEqual('battery_alert');
    }
  });

  it('should have 20% charge', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    for(var i = 10; i < 30; i++) {
      input.clear();
      input.sendKeys(i);
      expect(icon.getAttribute('icon')).toEqual('battery_20');
    }
  });

  it('should have 30% charge', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    for(var i = 30; i < 50; i++) {
      input.clear();
      input.sendKeys(i);
      expect(icon.getAttribute('icon')).toEqual('battery_30');
    }
  });

  it('should have 50% charge', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    for(var i = 50; i < 60; i++) {
      input.clear();
      input.sendKeys(i);
      expect(icon.getAttribute('icon')).toEqual('battery_50');
    }
  });

  it('should have 60% charge', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    for(var i = 60; i < 80; i++) {
      input.clear();
      input.sendKeys(i);
      expect(icon.getAttribute('icon')).toEqual('battery_60');
    }
  });

  it('should have 80% charge', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    for(var i = 80; i < 90; i++) {
      input.clear();
      input.sendKeys(i);
      expect(icon.getAttribute('icon')).toEqual('battery_80');
    }
  });

  it('should have 90% charge', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    for(var i = 90; i < 100; i++) {
      input.clear();
      input.sendKeys(i);
      expect(icon.getAttribute('icon')).toEqual('battery_90');
    }
  });

  it('should have full charge', function() {
    var levelElement = element(by.tagName('battery-level'));
    var icon = element(by.tagName('battery-icon'));
    var input = element(by.model('level'));

    input.clear();
    input.sendKeys(100);
    expect(icon.getAttribute('icon')).toEqual('battery_full');

    input.clear();
    input.sendKeys(120);
    expect(icon.getAttribute('icon')).toEqual('battery_full');
  });

});
