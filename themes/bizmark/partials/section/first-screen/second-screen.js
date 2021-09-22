import baffle from 'baffle';
// import UAParser from "ua-parser-js"

export default new class SecondScreen {
    constructor() {
        this.width = window.innerWidth
        this.init()
    }
    init() {
        if(this.width >= 1200) {
            document.querySelectorAll('.encrypted').forEach(item => {
                let description = item.querySelector('.description')
                let descriptionText = description.getAttribute('data-text')
                let descriptionSecretText = description.getAttribute('data-secret-text')
                let baffleDescription = baffle(description, {
                    characters: descriptionSecretText.replace(/\s/g, '')
                })

                let lookHere = item.querySelector('.look-here')
                let lookHereText = lookHere.getAttribute('data-text')
                let lookHereSecretText = lookHere.getAttribute('data-secret-text')
                let baffleLookHere = baffle(lookHere, {
                    characters: lookHereSecretText.replace(/\s/g, '')
                })
                item.addEventListener('mouseenter', (e) => {
                    description.classList.remove('letter-spacing')
                    lookHere.classList.remove('letter-spacing')


                    baffleDescription.text(currentText => descriptionText).reveal(1000);
                    baffleDescription.set({
                        characters: descriptionSecretText.replace(/\s/g, '')
                    })
                    baffleLookHere.text(currentText => lookHereText).reveal(1000);
                    baffleLookHere.set({
                        characters: lookHereSecretText.replace(/\s/g, '')
                    })
                })
                item.addEventListener('mouseleave', (e) => {
                    description.classList.add('letter-spacing')
                    lookHere.classList.add('letter-spacing')

                    baffleDescription.text(currentText => descriptionSecretText).reveal(1000);
                    baffleDescription.set({
                        characters: descriptionText.replace(/\s/g, '')
                    })
                    baffleLookHere.text(currentText => lookHereSecretText).reveal(1000);
                    baffleLookHere.set({
                        characters: lookHereText.replace(/\s/g, '')
                    })
                })
            })
        } else {
            document.querySelectorAll('.encrypted').forEach(item => {
                let description = item.querySelector('.description')
                let descriptionText = description.getAttribute('data-text')
                let descriptionSecretText = description.getAttribute('data-secret-text')
                let baffleDescription = baffle(description, {
                    characters: descriptionSecretText.replace(/\s/g, '')
                })

                let lookHere = item.querySelector('.look-here')
                let lookHereText = lookHere.getAttribute('data-text')
                let lookHereSecretText = lookHere.getAttribute('data-secret-text')
                let baffleLookHere = baffle(lookHere, {
                    characters: lookHereSecretText.replace(/\s/g, '')
                })

                description.classList.remove('letter-spacing')
                lookHere.classList.remove('letter-spacing')

                // baffleDescription.start()
                baffleDescription.text(currentText => descriptionText).reveal(1000);

                // baffleLookHere.start()
                baffleLookHere.text(currentText => lookHereText).reveal(1000);
            })
        }
    }
}