export default new class BackButton {
    constructor() {
        this.backButton = '[data-button="back"]'
        this.href = document.location.href
        this.init()
    }
    init() {
        document.querySelectorAll(this.backButton).forEach(button => {
            button.addEventListener('click', () => {
                console.log(history)
                history.pushState(null, null, this.strParse(this.href))
                window.location.reload()
            })
        })
    }
    strParse(str) {
        let newStr = str.replace(/[^\/]*$/, "")
        let lastSymbol = newStr.slice(-1)
        
        if(lastSymbol == '/' ) {
            newStr = newStr.substring(0, str.length - 1)
            newStr = newStr.replace(/[^\/]*$/, "")
        }
        if(newStr.split('/').length == 5) {
            newStr = newStr + '#main-menu'
        }
        return newStr
    }
}