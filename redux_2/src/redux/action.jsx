export const ADD='ADD'

export const DELETE='DELETE'

export const EDIT='EDIT'

export const add = (item) =>({
    type:'ADD',
    payload:item
})

export const deletedata = (id) =>({
    type:'DELETE',
    payload:id
})

export const edit = (item) =>({
    type:'EDIT',
    payload:item
})