const insiatlstate={
    prices:[
        {id:1,prices:500,value:0},
        {id:2,prices:1000,value:0},
        {id:3,prices:1500,value:0}
    ]
}

export const INCREMENT='INCREMENT'

export const DECREMENT='DECREMENT'

export const increment= (id) =>({
    type:INCREMENT,
    payload:id
})

export const decrement= (id) =>({
    type:DECREMENT,
    payload:id
})

export default insiatlstate