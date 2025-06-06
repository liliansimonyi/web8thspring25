function shake() {
    flip()
    var fortune = get_a_fortune()
    display_fortune(fortune)
}
function flip() {

}
function get_a_fortune() {
    let fortunes =["yes", "no", "maybe", "ask again"]
    let random_index= randInt(fortunes.length)
    return fortunes[random_index]
}
function randInt(length) {
    let r=Math.random()
    let br=r *length
    let index=Math.floor(br)
    return index
}
function display_fortune(fortune) {
    alert(fortune)
}