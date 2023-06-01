// const data = [
//     {
//         key: '1',
//         firstName: 'John',
//         lastName: 'Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         firstName: 'Jim',
//         lastName: 'Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         firstName: 'Joe',
//         lastName: 'Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];

export const users = {
    state: {
        listUser:[],
        selectedUser: {},
    },
    reducers:{
        setListUser(state, listUser){
            return {
                ...state, listUser
            }
        },
        setSelectedUser(state, selectedUser){
            return {
                ...state, selectedUser
            }
        }
    },
    effects: (dispatch)=>({
        async fetchUsers (payload, rootState){
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(responsive => responsive.json());
            this.setListUser(data);
        }

    })
}