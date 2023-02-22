class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.start = min
        this.end = max
    }

    guess() {
        this.middle = Math.ceil((this.start + this.end) / 2)
        return this.middle
    }

    lower() {
        return this.end = this.middle
    }

    greater() {
        return this.start = this.middle
    }
}

module.exports = GuessingGame;
