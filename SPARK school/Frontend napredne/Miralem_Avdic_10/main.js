class Video{
    constructor(title, uploader, seconds){
        this._title = title;
        this._uploader = uploader;
        this._seconds = seconds;
    }
    get seconds(){
        return this._seconds;
    }
    get title(){
        return this._title;
    }
    watch(seconds = this.seconds){
        (seconds > this.seconds) ?  //u slucaju da se kao parametar posalje vrijeme vece od duzine trajanja klipa
            console.log('Video watched') : 
        console.log(`You have watched ${seconds}/${this.seconds} seconds of '${this.title}'`)
    }
}


const video = new Video('Fireplace 10 hours full HD', 'Fireplace 10 hours', 36000);
video.watch(33);
const noviVideo = new Video('Turkish man yelling "meow" at an egg', 'Cristoffer Bader', 2);
noviVideo.watch();

const videoArray = [];
for(let i = 0; i < 5; i++){
    videoArray.push(new Video(`Generic video #${i+1}`, `Uploader #${i+1}`, 10));
}
videoArray[0].watch(99);

console.log(videoArray);


