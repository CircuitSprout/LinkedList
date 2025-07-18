class song{
    constructor(title, artist, duration){
        this.title = title;
        this.artist = artist;
        this.duration = duration; //duration in seconds
        this.next = null; // pointer to the next song
    }
}
class musicPlayer{
    constructor(){
        this.head = null; // first song
        this.current = null; // current song
    }

addSong(title, artist, duration) {
    const newSong = new song(title, artist, duration);
    if (!this.head) {
        this.head = newSong;
        this.current = this.head;
    } else {
        let temp = this.head;
        while(temp.next) {
            temp = temp.next;
        }
        temp.next = newSong;
    }
}

playCurrent() {
    if(this.current) {
        console.log('Now playing: ' + this.current.title + ' by ' + this.current.artist);
        } else {
            console.log('No song is currently playing.');
        }
}

nextSong() {
    if(this.current && this.current.next) {
        this.current = this.current.next;
        this.playCurrent();
    } else {
        console.log('No next song available.');
    }
}

restart () {
    this.current = this.head;
    this.playCurrent();
    }
}