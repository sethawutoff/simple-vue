<template>
    <div>
        <br>
        <span>
             Total amount :{{ total }}
        </span>
    </div>
</template>

<script>
import InformationStore from '@/store/InformationStore'

export default {
    data(){
        return{
            Informations: [],

            total: 0
        }
    },
    created(){
        this.fetchInformation()
        this.$root.$refs.CalTotal = this
    },
    methods: {
        async fetchInformation(){
            await InformationStore.dispatch('fetchInformation')
            this.Informations = InformationStore.getters.Informations

            this.CalTotal()
        },
        CalTotal(){
            InformationStore.dispatch('CalTotal', this.Informations)
            this.total = InformationStore.getters.total
        }
    }
}
</script>

<style scoped>

</style>