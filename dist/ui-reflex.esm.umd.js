!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("stimulus-use"),require("stimulus")):"function"==typeof define&&define.amd?define(["exports","stimulus-use","stimulus"],t):t(e.uiReflex={},e.stimulusUse,e.stimulus)}(this,function(e,t,o){var i=function(e){function o(){e.apply(this,arguments)}return e&&(o.__proto__=e),(o.prototype=Object.create(e&&e.prototype)).constructor=o,o.prototype.connect=function(){switch(t.useClickOutside(this),this.modeValue){case"click":break;case"hover":t.useHover(this)}},o.prototype.toggle=function(e){e.preventDefault(),e.stopImmediatePropagation(),this.expandedValue=!this.expandedValue},o.prototype.expandedValueChanged=function(){this.expandedValue?this._expand():this._collapse()},o.prototype.clickOutside=function(e){e.preventDefault(),this.expandedValue=!1},o.prototype.mouseEnter=function(){this.expandedValue=!0},o.prototype.mouseLeave=function(){this.expandedValue=!1},o.prototype._expand=function(){this.element.setAttribute("aria-expanded","true"),this.expandableTarget.classList.remove(this.hiddenClass)},o.prototype._collapse=function(){this.element.setAttribute("aria-expanded","false"),this.expandableTarget.classList.add(this.hiddenClass)},o}(o.Controller);i.classes=["hidden"],i.targets=["expandable"],i.values={expanded:Boolean,mode:String};var n=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.connect=function(){this._hideWindows()},t.prototype.windowPositionValueChanged=function(){this._hideWindows()},t.prototype.next=function(){this.windowPositionValue+=1},t.prototype.previous=function(){this.windowPositionValue-=1},t.prototype._hideWindows=function(){var e=this;this.windowsTargets.forEach(function(t){parseInt(t.dataset.position)===e.windowPositionValue?t.classList.remove(e.hiddenClass):t.classList.add(e.hiddenClass)})},t}(o.Controller);n.classes=["hidden"],n.targets=["windows"],n.values={windowPosition:Number},e.Dropdown=i,e.Pagination=n});
//# sourceMappingURL=ui-reflex.esm.umd.js.map
