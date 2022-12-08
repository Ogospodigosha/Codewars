const capitals = (word) =>{
    return word.split('').map(el => el.toUpperCase()===el ? word.indexOf(el) :el).filter(s => typeof s === 'number')
}
