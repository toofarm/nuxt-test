<template>
    <form>
        <label>Search for movies to add to your list</label>
        <input v-model="state.query" />
        <button 
            :disabled="state.query.length < 1"
            @click="submit">
            Search
        </button>
        <ul v-if="movies.length > 0">
            <li 
                v-for="movie in movies"
                :key="movie.title">
                {{ movie.title }}
            </li>
        </ul>
    </form> 
</template>

<script lang="ts">
    import { reactive, defineComponent } from 'vue'
    import searchMovies from '~/lib/searchMovies'

    export default defineComponent({
        name: 'SearchForm',
        setup() {
            const state = reactive({ 
                query: ''
            })

            let movies: TMovieItem[] = reactive([])

            const submit = async () => {
                const res = await searchMovies(state.query)
                movies = res
            }

            return {
                state,
                movies,
                submit
            }
        }
    })
</script>

<style>
    form label,
    form button {
        display: block;
        margin: 0.5em 0;
    }
</style>