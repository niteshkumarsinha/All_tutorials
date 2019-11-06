//Using References (Normalisation) --> Consistency
let author = {
    name: 'Nitesh',

}

let course = {
    author: 'id',
    // authors: ['id1', 'id2']

}

//Using Embedded Documents (DeNormalisation) --> Performance
let course = {
    author: {
        name: "Nitesh"
    }
}


//Hybrid

let author = {
    name: "Mosh",
    // 50 other properties
}

let course = {
    author: {
        id: "ref",
        name: "Nitesh"
    }
}