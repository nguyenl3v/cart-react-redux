var initiaState =[
    {
        id:'1',
        name:'iphone 7',
        image:'https://www.viaero.com/images/default-source/products/apple/iphone7-plus-silver.jpg?sfvrsn=0',
        description:'san pham do apple san pham',
        price:500,
        inventory:15
    },
    {
        id:'2',
        name:'iphone 8',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtgijQyj8CgR9ok_Z5DtuW6Jv0OTTazvR_Qb_lUgQfwN8VMiVBg',
        description:'san pham do apple san pham',
        price:400,
        inventory:14
    },
    {
        id:'3',
        name:'iphone 9',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDbmcPSfjqsVK7NYjgSDkp22leYwiB4tnYW6jE7K62ZXy_oRdow',
        description:'san pham do apple san pham',
        price:300,
        inventory:13
    },
    {
        id:'41',
        name:'iphone 10',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlqQjVT0B813KOckjTLAj_9I84ZA5zs4hmmYGQea1qFssNZXfXg',
        description:'san pham do apple san pham',
        price:200,
        inventory:12
    }
];
const product = (state = initiaState,action) =>{
    switch (action.type) {
        default: return [...state];
    }
}
export default product;