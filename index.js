/* global $ document console */

$( document ).ready( () => {
  $('form').on('submit', handleSubmit)
})

const handleSubmit = e => {
    e.preventDefault()
    const totalPrice = $('input#price').val()
    const wingCount = $('input#count').val()
    const wingCalc = new WingCalculator(totalPrice, wingCount)

    console.log(`Price per wing: ${wingCalc.pricePerWing()}`)
}


class WingCalculator {
  constructor(totalPrice, wingCount) {
    this.totalPrice = totalPrice
    this.wingCount = wingCount
  }

  pricePerWing() {
    return (+this.totalPrice / +this.wingCount)
  }
}
