export default new class AsideMenu {
    constructor() {
        this.menu = document.querySelector('.aside-menu')
        this.openBtn = document.querySelector('.open-aside-menu')
        this.closeBtn = document.querySelector('.close-aside-menu')
        this.phoneBtn = document.querySelector('.aside-menu .phone-btn')
        this.panel = document.querySelector('.panel')
        this.init()
    }
    init() {
        const _self = this

        if(this.openBtn) {
            this.openBtn.addEventListener('click', (e) => {
                this.menu.classList.add('show')
                this.menu.style.visibility = 'visible'
                this.panel.classList.add('hidden')
                document.querySelector('body').style.overflow = 'hidden'
            })
        }
        if(this.closeBtn) {
            this.closeBtn.addEventListener('click', (e) => {
                this.menu.classList.remove('show')
                this.menu.style.visibility = 'hidden'
                this.panel.classList.remove('hidden')
                document.querySelector('body').style.overflow = ''
            })
        }
        if(this.phoneBtn) {
            this.phoneBtn.addEventListener('click', (e) => {
                this.phoneBtn.querySelector('.preview').style.display = 'none'
                this.phoneBtn.querySelector('.view').style.display = 'flex'
            })
        }
        document.addEventListener('click', (e) => {
            let clickInside = _self.menu.contains(e.target) || _self.openBtn.contains(e.target)
            if(!clickInside) {
                _self.menu.classList.remove('show')
                this.menu.style.visibility = 'hidden'
                this.panel.classList.remove('hidden')
                document.querySelector('body').style.overflow = ''
            }
        })
    }
}