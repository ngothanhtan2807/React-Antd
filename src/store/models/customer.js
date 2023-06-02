export const customer={
state:{
    listCustomer:[],
    selecedCustomer:[],

},
reducers: {
    setListCustomer(state, listCustomer){
        return {
            ...state, listCustomer
        }
    },
    setSelectedCustomer(state, selecedCustomer){
        return{
            ...state, selecedCustomer
        }
    }
},
effects:(dispatch)=>({
    async fetchCustomers(payload, rootState){
        const data = await fetch('https://fakestoreapi.com/users')
        .then(responsive => responsive.json());
        this.setListCustomer(data)
    }
})
}