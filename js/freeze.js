class FreezeDom {
    appData ;
    constructor() {
        window.addEventListener('click', this.freezeDom.bind(this), true);
    }
    
    freezeDom(event) {
       this.appData = Helpers.getStorageDetails(Helpers.APP_KEY);
       
       this.preventWebAction(true, event); 
    }

    preventWebAction(shouldPrevent, event) {
        if(shouldPrevent) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

}

new FreezeDom();