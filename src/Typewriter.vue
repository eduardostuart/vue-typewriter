<template>
    <span class="typewriter">
        <slot></slot>
        <span class="typewriter-msg" :class='{"typewriter-selected":isFullErasing}'>
          {{ writing }}
        </span>
        <span class="typewriter-cursor" v-if="cursor">
            {{ cursorSymbol }}
        </span>
    </span>
</template>
<style lang="sass">
    .typewriter-selected{
      background-color: rgba(0,0,0,.1);
    }
    .typewriter-cursor{
        opacity: 1;
        animation: blink 0.7s infinite;
        position: relative;
        top:-3px;
        left:-12px;
    }
    @keyframes blink{
        0% { opacity:1; }
        50% { opacity:0; }
        100% { opacity:1; }
    }
</style>
<script>
var $writeInterval = null;
var $letterTimeout = null;

export default {
    props:{
        words:{
            type:Array,
            default(){
                return []
            }
        },
        interval:{
          type:Number,
          default:200
        },
        speed:{
          type:Number,
          default:300
        },
        cursor:{
            type:Boolean,
            default:true
        },
        cursorSymbol:{
            type:String,
            default:'|'
        },
        fullErase:{
          type:Boolean,
          default:false
        }
    },
    data(){
        return {
            pos:0,
            isWriting:false,
            isWaiting:false,
            currentWordPos:null,
            currentWord:null,
            writing:null,
            isFullErasing:false
        }
    },
    computed:{
        isErasing(){
            return !this.isWriting;
        },
        hasFinishedWriting(){

            if(!this.hasStarted) return false;

            if(this.writing === null) return false;

            return this.isWriting && this.writing.length >= this.currentWord.length;
        },
        hasStarted(){
            return this.currentWord !== null;
        },
        hasFinishedErasing(){

            if(!this.hasStarted) return false;

            if(this.isErasing && this.writing === null) return true;

            return this.isErasing && this.writing.length <= 0;
        },
        isLastWord(){
            return this.hasStarted && this.currentWordPos >= ( this.words.length - 1 );
        }
    },
    ready(){
        this.write();
    },
    methods:{
        next(){

            if(! this.canContinue()) return;

            if(!this.hasStarted){
                this.currentWordPos = 0;
            }else{
                if(this.isLastWord){
                    this.currentWordPos = 0;
                }else{
                    this.currentWordPos++;
                }
            }

            this.isWaiting = true;

            $letterTimeout = setTimeout(() => {

                clearTimeout($letterTimeout);

                this.isWaiting = false;

                this.currentWord = this.words[this.currentWordPos];
                this.pos = this.isWriting ? this.currentWord.length : 0;
                this.isWriting = !this.isWriting;

            }, this.interval );
        },
        canContinue(){

            if(this.isWaiting) return false;

            if(this.isWriting && !this.hasFinishedWriting && this.hasStarted){
                return false;
            }

            if(this.isErasing && !this.hasFinishedErasing && this.hasStarted){
                return false;
            }

            if(this.isWriting && this.hasFinishedWriting){
                this.isWriting = !this.isWriting;
                this.prepareFullErase();
                return false;
            }

            return true;
        },
        prepareFullErase(){
            if(this.fullErase && !this.isFullErasing){

              this.isFullErasing = true;
              this.isWaiting = true;

              setTimeout(() => {
                this.isWaiting = false;
                this.writing = null;
                this.pos = 0;
                this.isFullErasing = false;
              },300);
            }
        },
        write(){

            if($writeInterval !== null){
                clearInterval($writeInterval);
            }

            $writeInterval = setInterval(() => {

                this.next();

                if(this.hasStarted && !this.isWaiting) {
                    if(this.isWriting){
                        this.pos++;
                        this.writing = this.currentWord.substr(0,this.pos);
                    }else{
                        this.pos--;
                        this.writing = this.currentWord.substr(0,this.pos);
                    }
                }

            },this.speed);
        }
    }
}
</script>
