import IMask from 'imask';
export default new class PhoneMask {
    constructor() {
        this.phone = '[data-phone="true"]'
        this.init()
    }
    init() {
        document.querySelectorAll(this.phone).forEach(phone => {
            let phoneMask = IMask(phone, {
                mask: '+{7} (000) 000-00-00',
                // lazy: false,  // make placeholder always visible
                placeholderChar: '_'     // defaults to '_'
            })
            phone.addEventListener('focus', () => {
                phoneMask.updateOptions({
                    lazy: false
                })
            })
            phone.addEventListener('blur', () => {
                if(phoneMask.unmaskedValue === '7') {
                    phoneMask.updateOptions({
                        lazy: true
                    })
                }
            })
        })
    }
}