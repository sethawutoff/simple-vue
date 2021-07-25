<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>List of income and expenses</h2>
    <input-form></input-form>
    <br>
    <information-table></information-table>
    <cal-total></cal-total>
  </div>
</template>

<script>
import InformationTable from '@/components/InformationTable.vue'
import InputForm from '@/components/InputForm.vue'
import CalTotal from '@/components/CalTotal.vue'
export default {
  components: {
    InformationTable, InputForm, CalTotal
  },
}
</script>

<style scoped>

</style>