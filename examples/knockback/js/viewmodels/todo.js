// Generated by CoffeeScript 1.7.1
(function() {
  window.TodoViewModel = function(model) {
    var ENTER_KEY, ESCAPE_KEY;
    ENTER_KEY = 13;
    ESCAPE_KEY = 27;
    this.editing = ko.observable(false);
    this.completed = kb.observable(model, {
      key: 'completed',
      read: (function() {
        return model.completed();
      }),
      write: (function(completed) {
        return model.completed(completed);
      })
    }, this);
    this.title = kb.observable(model, {
      key: 'title',
      write: ((function(_this) {
        return function(title) {
          if ($.trim(title)) {
            model.save({
              title: $.trim(title)
            });
          } else {
            _.defer(function() {
              return model.destroy();
            });
          }
          return _this.editing(false);
        };
      })(this))
    }, this);
    this.onDestroyTodo = (function(_this) {
      return function() {
        return model.destroy();
      };
    })(this);
    this.onCheckEditBegin = (function(_this) {
      return function() {
        if (!_this.editing()) {
          _this.editing(true);
          return $('.todo-input').focus();
        }
      };
    })(this);
    this.onCheckEditEnd = (function(_this) {
      return function(view_model, event) {
        if (event.keyCode === ESCAPE_KEY) {
          _this.editing(false);
        }
        if ((event.keyCode === ENTER_KEY) || (event.type === 'blur')) {
          $('.todo-input').blur();
          return _this.editing(false);
        }
      };
    })(this);
  };

}).call(this);
