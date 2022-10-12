<template>
  <div>
    <SearchForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchForm from '~/components/SearchForm.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { SearchForm }
})
</script>
