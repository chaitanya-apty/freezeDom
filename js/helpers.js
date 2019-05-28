var Helpers = {
    getStorageDetails: (key) => {
        data = window.localStorage.getItem(key);
        return JSON.parse(data || null);
    },
    storeValue: (key, storeDetails) => {
            const data = typeof storeDetails === 'string' ? storeDetails : JSON.stringify(storeDetails);
            localStorage.setItem(key, data);
    },
    APP_KEY: 'FREEZE_OPTIONS',
    mapOptionsKey: (key) => {
        switch (key) {
          case 'button': return 'buttons';
          case 'a': return 'anchored';
          case 'img': return 'image';
        }
    }
}

var domHelpers = {
    isFreezedElement: (selectors, targetElement) => {
     if(!selectors || selectors.length === 0) {
         return false
     }
     try {
         return selectors.some((selector) => document.querySelector(selector) === targetElement);
     } catch(e) {
         console.warn('Invalid Format Selectors Passed to Disable Option');
         return false;
     }
    },
    isFreezedType = (options, elementTag) => {
        const tagBasedOptions = options[Helpers.mapOptionsKey(elementTag.toLowerCase())];
        return tagBasedOptions;
    }
       
}