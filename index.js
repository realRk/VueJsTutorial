var app = new Vue({
    el:'#main',
    data:{
        count:0,
        title:'Hello world',
        name:"hey there i'm rk",
        link:"http://google.com",
        htmlRender:"<a href = 'http://google.com'>v-html link</a>",
        cX:0,
        cY:0,
        twb:"Rakesh"
    },
    methods:{
        changePara:function(event){
            console.log("1");
            this.name = event.target.value;
        },
        increaseCount:function(){
            console.log("2");
            this.count++;
        },
        decreaseCount:function(){
            console.log("3");
            this.count--;
        },
        getCoordinates:function(event){
            console.log("4");
            this.cX = event.clientX;
            this.cy = event.clientY;
        },
        passingEventAlongArg:function(step,event){
            // alert(typeof(step,event.target.value))
            console.log("5");
            this.count+= Number(step)+Number(event.target.value);
        },
        twbc:function(){
            console.log("twbc");
            return "Hello nmnmnmn";
        },
        gbgb:function(){
            console.log("gbgb")
        }
    }
})