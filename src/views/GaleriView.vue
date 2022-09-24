<template>
    <div>
        <h1>GALERİ</h1>

        <div class="selected-image">
            <img :src="selectedImage" />
        </div>

        <span class="link" v-for="image in images" :key="image.id" @click="imageSelect(image.imgSrc)">
            <img :src="image.imgSrc" alt="" class="galResim">
        </span>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedImage: "",
            images: [{
                id: 1,
                imgSrc: require("@/assets/img/beyaz3.jpg")
            },
            {
                id: 2,
                imgSrc: require("@/assets/img/beyaz2.jpeg")
            },
            {
                id: 3,
                imgSrc: require("@/assets/img/a (6).jpg")
            },
            {
                id: 4,
                imgSrc: require("@/assets/img/beyaz.jpg")
            },
            {
                id: 5,
                imgSrc: require("@/assets/img/a (1).jpg")
            },
            {
                id: 6,
                imgSrc: require("@/assets/img/a (2).jpg")
            },
            {
                id: 7,
                imgSrc: require("@/assets/img/a (3).jpg")
            },
            {
                id: 8,
                imgSrc: require("@/assets/img/a (4).jpg")
            }
            ]
        };
    },
    created() {
        this.selectedImage = this.images[0].imgSrc
    },
    methods: {
        imageSelect(image) {
            this.selectedImage = image;
        }
    }
}
</script>

<style lang="scss">
.selected-image {
    margin: 1rem 0;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
    }
}
</style>