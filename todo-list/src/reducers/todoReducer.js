export const todos = [
    {
        item: 'study code',
        completed: true,
        id: 0
    },
    {
        item: 'eat dinner ',
        completed: false,
        id: 1
    },
    {
        item: 'work out',
        completed: false,
        id: 2
    }]

    export const todoReducer = (state, action) => {
        switch (action.type){
            case 'ADD_TODO':

                    state.push({item: action.payload,
                    completed: false,
                    id: Date.now()}) 
                
                console.log(state)
            default:
            return state;
        }
    }