let images = new Vue ({
    el: "#root",
    data: {
        counter : 0,
        url: ["https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
        "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"]
    },
    methods: {
        next (){
            if (this.counter === (this.url.length - 1)){
                this.counter = 0;
            }else{
                this.counter++;

            }
        },
        prev (){
            if (this.counter === 0){
                this.counter = this.url.length - 1;
            }else{
                this.counter--;
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.next();
        }, 3000);
    }
})