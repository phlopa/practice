

export const login = {
    data: function() {
        return {
            //прибираю img поки не використовуємо методи
            //img: 1,
            hs: 0,
            parent: ""
        }
    },
    mounted: function() {
        //this.img = this.randomIntFromInterval(1, 7);
        this.parent = this.$parent.$parent;
    },
    methods: {
        // методи для авторизації
    },
    template: `
        <div class="flex">
            gdfgdfgdfgdf
        </div>
    `
};