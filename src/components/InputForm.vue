<template>
    <div>
        <span>
            <button @click="openIncomeForm">Add Income</button>
            or
            <button @click="openExpensesForm">Add Expenses</button>
        </span>
        <br>
        <span>
            <td v-if="buttonNum === 1">
                Detail :
                <input type="text" v-model="form.detail">
                {{ text }} :
                <input type="text" v-model="form.income">
                <input type="date" v-model="form.date">
                <button @click="AddInformation">OK</button>
                <button @click="clearForm">Clear</button>
            </td>
            <td v-if="buttonNum === 2">
                Detail :
                <input type="text" v-model="form.detail">
                {{ text }} :
                <input type="text" v-model="form.expenses">
                <input type="date" v-model="form.date">
                <button @click="AddInformation">OK</button>
                <button @click="clearForm">Clear</button>
            </td>
        </span>
    </div>
</template>

<script>
import InformationStore from '@/store/InformationStore'

export default {
    data(){
        return{
            buttonNum: 0,
            text: "",

            form:{
                detail: '',
                income: 0,
                expenses: 0,
                date: '',
            }
        }
    },
    methods:{
        async fetchInformation(){
            await InformationStore.dispatch('fetchInformation')
            this.Informations = InformationStore.getters.Informations
        },
        openIncomeForm(){
            this.buttonNum = 1,
            this.text = "Enter your income"
            this.form.expenses = 0
        },
        openExpensesForm(){
            this.buttonNum = 2
            this.text = "Enter your Expenses"
            this.form.income = 0
        },
        clearForm(){
            this.buttonNum = 0,
            this.text = ""

            this.form={
                detail: '',
                income: 0,
                expenses: 0,
                date: '',
            }
        },
        AddInformation(){
            let payload = {
                detail: this.form.detail,
                income: parseInt(this.form.income),
                expenses: parseInt(this.form.expenses),
                date: this.form.date
            }
            InformationStore.dispatch('AddInformation', payload)
            this.$root.$refs.CalTotal.CalTotal()
            this.clearForm()
        }
    }
}
</script>

<style scoped>
    input{
        margin: 5px;
    }
    button{
        margin: 5px;
    }
</style>