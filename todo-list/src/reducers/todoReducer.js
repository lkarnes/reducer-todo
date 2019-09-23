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
            return [
                    ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ] 
            case 'TOGGLE_COMPLETE' : 
            return state.map(item => {
                if(item.id === action.payload.id){
                    return {
                        ...action.payload,
                        completed: !action.payload.completed
                    }
                }else{
                    return item
                }
            })
        case 'DELETE_COMPLETED' : 
        return state.filter(todo => todo.completed === false)
        
            default:
            return state;
        }
    }