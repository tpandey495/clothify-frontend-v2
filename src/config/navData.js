const navbar = [
    { name: 'Home', id: 'home'},
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
    { name: 'Women clothes', id: 'p1'},
    { name: "kid clothes", id: 'p2' },
    { name: "Men clothes", id: 'p3'},
    ] },
    { name: 'Contact Us', id: 'contact'},
];


export default navbar;