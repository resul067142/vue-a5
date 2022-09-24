<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Başlık</td>
                    <td>Açıklama</td>
                </tr>
            </thead>
            <tbody>

                <tr v-for="item in dataPostList" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.body}}</td>
                </tr>


            </tbody>
        </table>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    data() {
        return {
            dataPostList: [],
        }
    },
    created() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                this.dataPostList = response.data;
            })
    }
}
</script>