class FreezeDom {
    constructor() {
        window.addEventListener('click', this.freezeDom.bind(this), true);
    }
    
    freezeDom(event) {
      
      
    }

    preventWebAction(shouldPrevent, event) {
        if(shouldPrevent) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

}

new FreezeDom();