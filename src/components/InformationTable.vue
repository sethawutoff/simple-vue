<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Detail
                    </th>
                    <th>
                        Income
                    </th>
                    <th>
                        Expenses
                    </th>
                    <th>
                        Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(info, index) in Informations" v-bind:key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ info.detail }}</td>
                    <td>{{ info.income }}</td>
                    <td>{{ info.expenses }}</td>
                    <td>{{ info.date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import InformationStore from '@/store/InformationStore'

export default {
    data(){
        return{
            Informations: [],
        }
    },
    created(){
        this.fetchInformation()
    },
    methods: {
        async fetchInformation(){
            await InformationStore.dispatch('fetchInformation')
            this.Informations = InformationStore.getters.Informations
        }
    }
}
</script>

<style>
    table, th, td {
        border: 1px solid black;
    }
    table{
        width: 100%;
    }
</style>