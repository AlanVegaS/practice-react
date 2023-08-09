export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Falta incluir action ABC')

        default:
            return initialState
    }
}