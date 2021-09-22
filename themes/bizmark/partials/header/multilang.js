export default new class MultiLang {
    constructor() {
        this.langBtn = '[data-button="lang"]'
        this.init()
    }
    init() {
        let currentLang = this.getCurrentLangCode(document.location.pathname)
        document.querySelectorAll(this.langBtn).forEach(button => {
            let langCode = button.getAttribute('lang-code')
            if(currentLang == langCode) {
                document.querySelector('.site-lang form').removeChild(button)
            } else {
                button.setAttribute('type', 'submit')

                let input = document.createElement('input')
                input.setAttribute('type', 'hidden')
                input.setAttribute('name', 'locale')
                input.setAttribute('value', langCode)
                document.querySelector('.site-lang form').appendChild(input)
            }
        })
        
    }
    getCurrentLangCode(str) {
        return str.split('/')[1]
    }
}