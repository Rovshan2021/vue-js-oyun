new Vue({
    el: "#oyun",
    data: {
        xal: 100,
        XalArtir: 0,
        rndm: "",
    },
    methods: {
        rn: function() {
             this.xal -= Math.floor(Math.random() * 10)
        },
    },
})