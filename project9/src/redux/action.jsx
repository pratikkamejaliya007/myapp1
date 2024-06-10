export const ADD='ADD'

export const DELETE='DELETE'

export const EDIT='EDIT'

export const add = (data) =>({
    type:ADD,
    payload:data
})

export const deletedata = (id) =>({
    type:DELETE,
    payload:id
})

export const edit = (item) =>({
    type:EDIT,
    payload:item
})