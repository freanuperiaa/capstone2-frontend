<template>
    <div id="post">
        <h3>{{ title }}</h3>
        <h5>{{ date }}</h5>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: {
        title: String,
        content: String,
        date: String,
    },
    components: {

    },
    beforeMount() {
        this.date = this.date.slice(0, this.date.indexOf("T"));
    }
}
</script>

<style scoped>

#post {
    border: 1px solid black;
    border-radius: 30px;
    margin: 40px 20px;
}

</style>