const navbar = [
    { name: 'Home', id: 'home'},
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
    { name: 'Women clothes', id: 'p1',path:"womenclothing"},
    { name: "kid clothes", id: 'p2',path:"kidsclothing"},
    { name: "Men clothes", id: 'p3',path:"menclothing"},
    ] },
    { name: 'Contact Us', id: 'contact'},
];


export default navbar;