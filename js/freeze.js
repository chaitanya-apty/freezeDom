class FreezeDom {
    appData ;
    constructor() {
        window.addEventListener('click', this.freezeDom.bind(this), true);
    }
    
    freezeDom(event) {
       this.appData = Helpers.getStorageDetails(Helpers.APP_KEY);
       const shouldPrevent = domHelpers.isFreezedType(this.appData, event.target.nodeName);
       this.preventWebAction(shouldPrevent, event); 
    }

    preventWebAction(shouldPrevent, event) {
        if(shouldPrevent) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

}

new FreezeDom();