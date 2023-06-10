export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        alert('你好啊')
    }
}

export const test = {
    data() {
        return {
            x: 100,
            y: 200,
        }
    }
}