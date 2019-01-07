function stick_them () {
  var _sticked_elements = document.querySelectorAll("._sticked_");;
  var _sticky_elements = document.querySelectorAll("._sticky_element_");
  var _sticky_elements_collection = [];
  var _sticky_top_margin = 0;
  var _sticky_top_padding = 0;


  var body_margin = 0;

  this.init = function () {
    var height = 0;
    for (var i = 0; i < _sticked_elements.length; i++) {
      height += Number(_sticked_elements[i].offsetHeight);
    }
    this.body_margin = height;
    document.body.style.marginTop = this.body_margin + "px";

    for (var i = 0; i < _sticky_elements.length; i++) {
      var el_offset_top = Number(_sticky_elements[i].offsetTop);
      var el_fixed_top_position = function () {
        var top_position = 0;
        for (var j = 0; j < i; j++) {
          if ( _sticky_elements[j].classList.contains('_inline_sticky_') && ( _sticky_elements[j].offsetWidth + _sticky_elements[i].offsetWidth <= _sticky_elements[j].parentElement.offsetWidth) ) {
            top_position = top_position;
          } else {
            top_position += _sticky_elements[j].offsetHeight;
          }
        }
        return top_position;
      }
      _sticky_elements_collection.push({
        initial_offset_top: el_offset_top,
        fixed_top_position: el_fixed_top_position() + this._sticky_top_margin,
        fixed_left_position: _sticky_elements[i].getBoundingClientRect().left,
        width: _sticky_elements[i].offsetWidth,
        sticky_position: _sticky_elements[i].classList.contains('_inline_sticky_') ? "inline" : "block",
        element: _sticky_elements[i]
      });
    }
  }

  this.goSticky = function () {
    for (var i = 0; i < _sticky_elements_collection.length; i++) {

      if (document.documentElement.scrollTop > (_sticky_elements_collection[i].initial_offset_top - _sticky_elements_collection[i].fixed_top_position - (this._sticky_top_padding * (i+1)))) {
        _sticky_elements_collection[i].element.style.position = "fixed";
        _sticky_elements_collection[i].element.style.top = _sticky_elements_collection[i].fixed_top_position + "px";
        _sticky_elements_collection[i].element.style.left = _sticky_elements_collection[i].fixed_left_position + "px";
        _sticky_elements_collection[i].element.style.width = _sticky_elements_collection[i].width + "px";
        _sticky_elements_collection[i].element.classList.add("_sticked_");
      } else {
        _sticky_elements_collection[i].element.style.position = "initial";
        _sticky_elements_collection[i].element.classList.remove("_sticked_");
      }
    }
  }

}