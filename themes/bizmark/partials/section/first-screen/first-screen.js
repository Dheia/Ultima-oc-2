import SwipeListener from 'swipe-listener';

export default new class FirstScreen {
    constructor() {
        this.sections = document.querySelectorAll('.section-scroller .section')

        this.animationPlayed = false
        this.location = window.location

        this.init()
    }

    init() {
        document.querySelector('.section.first-section').addEventListener('click', () => {
            if(!this.animationPlayed) {
                this.nextSection()
            }
        })
        
        document.querySelector('.section.second-section .small-logo-warpper ').addEventListener('click', () => {
            if(!this.animationPlayed) {
                this.prevSection()
            }
        })

        if(window.innerWidth < 992) {
            document.querySelectorAll('.column-wrapper[animation-forward="animate__fadeInDown"]').forEach(item => {
                item.setAttribute('animation-forward', 'animate__fadeInRight')
                item.setAttribute('animation-back', 'animate__fadeOutRight')
            })
        }


        if(this.location.hash == '') {
            this.sections.forEach(section => {
                section.classList.remove('active')

            })
            this.sections[0].classList.add('active')
        } else {
            this.sections.forEach(section => {
                let anchor = '#' + section.getAttribute('anchor')
                console.log(this.location.hash)
                console.log(anchor)
                if(this.location.hash == anchor) {
                    section.classList.add('active')
                } else {
                    section.classList.remove('active')
                }
            })
        }
        this.scrollEventInit()
        this.swipeEventInit()
    }
    
    prevSection() {
        let activeSection = document.querySelector('.section-scroller .section.active')
        let prevSection = activeSection.previousElementSibling
        if(prevSection) {
            this.prevSectionAnimation(activeSection, prevSection)
        }
    }
    prevSectionAnimation(oldSection, newSection) {
        const _self = this

        this.animationPlayed = true

        let oldSectionAnimations = oldSection.querySelectorAll('[animation]')
        let oldSectionAnimationsCounter = 0

        let newSectionAnimations = newSection.querySelectorAll('[animation]')
        let newSectionAnimationsCounter = 0
        
        let anchor = newSection.getAttribute('anchor')

        
        oldSectionAnimations.forEach(oldAnim => {
            let animationForward = oldAnim.getAttribute('animation-forward')
            let animationBack = oldAnim.getAttribute('animation-back')

            oldAnim.classList.add(animationBack)
            oldAnim.classList.remove(animationForward)

            setTimeout(() => {
                newSectionAnimations.forEach(newAnim => {
                    let animationForwardNew = newAnim.getAttribute('animation-forward')
                    let animationBackNew = newAnim.getAttribute('animation-back')
    
                    newAnim.classList.add(animationBackNew)
                    newAnim.classList.remove(animationForwardNew)

                    oldSection.classList.remove('active')
                    newSection.classList.add('active')
                    window.location.href = '#' + anchor


                    newAnim.addEventListener('animationend', () => {
                        newSectionAnimationsCounter++
                        if(newSectionAnimationsCounter == newSectionAnimations.length) {
                            _self.animationPlayed = false
                        }
                    })
                })
            }, 2000)
        })
    }
    nextSection() {
        let activeSection = document.querySelector('.section-scroller .section.active')
        let nextSection = activeSection.nextElementSibling
        if(nextSection) {
            this.nextSectionAnimation(activeSection, nextSection)
        }
    }
    nextSectionAnimation(oldSection, newSection) {
        const _self = this

        this.animationPlayed = true

        let oldSectionAnimations = oldSection.querySelectorAll('[animation]')
        let oldSectionAnimationsCounter = 0

        let newSectionAnimations = newSection.querySelectorAll('[animation]')
        let newSectionAnimationsCounter = 0

        let anchor = newSection.getAttribute('anchor')
        

        oldSectionAnimations.forEach(oldAnim => {
            let animationForward = oldAnim.getAttribute('animation-forward')
            let animationBack = oldAnim.getAttribute('animation-back')

            oldAnim.classList.add(animationForward)
            oldAnim.classList.remove(animationBack)
            setTimeout(() => {
                newSectionAnimations.forEach(newAnim => {
                    let animationForwardNew = newAnim.getAttribute('animation-forward')
                    let animationBackNew = newAnim.getAttribute('animation-back')
    
                    newAnim.classList.add(animationForwardNew)
                    newAnim.classList.remove(animationBackNew)
    
                    oldSection.classList.remove('active')
                    newSection.classList.add('active')
                    window.location.href = '#' + anchor
    
                    newAnim.addEventListener('animationend', () => {
                        newSectionAnimationsCounter++
                        if(newSectionAnimationsCounter == newSectionAnimations.length) {
                            _self.animationPlayed = false
                        }
                    })
                })
            }, 500)
        })
    }

    scrollEventInit() {
        const _self = this
        window.addEventListener('wheel', (evt) => {
            let deltaY =  Math.sign(evt.deltaY)
            if(deltaY == 1) {
                console.log('scroll down')
                if(!_self.animationPlayed) {
                    this.nextSection()
                }
            } else {
                console.log('scroll up')
                if(!_self.animationPlayed) {
                    this.prevSection()
                }
            }
        })
    }

    swipeEventInit() {
        let _self = this

        let container = window;
        SwipeListener(container);
        container.addEventListener('swipe', (e) => {
            let direction = e.detail.directions
            console.log(direction)

            if (direction.top) {
                if(!_self.animationPlayed) {
                    this.nextSection()
                }
            }
            
            if (direction.bottom) {
                if(!_self.animationPlayed) {
                    this.prevSection()
                }
            }
        })
    }
}