class Stopwatch {

    // variables needed for stopwatch constructor function

    constructor(time, paused, started, clockRunning, watchID) {
        this.time = time,
            this.paused = paused,
            this.started = started,
            this.clockRunning = clockRunning,
            this.interval

            // primary stop watch function to increment time 

        this.count = () => {

            this.time++
            var converted = this.timeConverter(this.time)
            document.getElementById(watchID).innerText = converted;

        }

            // converts incrementing time to desired stopwatch format 

        this.timeConverter = (t) => {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }

        // start button functionality to invoke count function every second

        this.start = () => {

            if (!this.clockRunning && !this.paused) {
                this.interval = setInterval(this.count, 1000);
                this.clockRunning = true
                this.started = true
            }

        }

        // resets time back to 0

        this.reset = () => {
            this.time = 0;
            document.getElementById(watchID).innerText = "00:00";
            this.clockRunning = false
        }

        // clears interval function to pause stopwatch

        this.pause = () => {
            clearInterval(this.interval),
            this.clockRunning = false
            this.paused = true
        }

        // resumes the interval function

        this.resume = () => {
            if (this.paused && this.started) {
                this.interval = setInterval(this.count, 1000);
                this.clockRunning = true
                this.paused = false
            }
        }
    }

}




// counter variable for switch case function
var counter = 0

// check function mainly to construct different 
// instances of the stopwatch to work inpedently

function check (){
    switch(counter){
        case 0:
        watch("watchOne", "watch1", "buttons1", "stopwatch1")
        break;
        case 1:
        watch("watchTwo", "watch2", "buttons2", "stopwatch2")
        break;
        case 2:
        watch("watchThree", "watch3", "buttons3", "stopwatch3")
        break;
        case 3:
        watch("watchFour", "watch4", "buttons4", "stopwatch4")
        break;
    }
}

// HTML DOM constrcutor function to build the stopwatch

function watch(className, watchID, buttonID, domLocation){

    console.log(counter)

    // everytime function runs, increment counter to construct next instance of the stopwatch
    counter++

    //display main box on the DOM

    if(counter === 3){
        var newBox = document.getElementById("box")
        newBox.classList.add("newBox")
        newBox.removeAttribute("id")
        
    }


    if(counter > 2){
        document.getElementById(domLocation).style.display = "block"
    } else{
        document.getElementById("box").style.display = "block"
        document.getElementById(domLocation).style.display = "block"
    }

    // constrcut instance of stopwatch

    var className = new Stopwatch(0, false, false, false, watchID)

    var container = document.createElement("div");
    
    var stop1 =  document.createElement("div");
    stop1.setAttribute("id", watchID);
    stop1.innerText = "00:00";
    container.append(stop1);

    var buttonDiv = document.createElement("div");buttonDiv.setAttribute("id", buttonID);
    container.append(buttonDiv);


    var startBtn = document.createElement("button");
    startBtn.addEventListener("click", className.start);
    startBtn.innerText="Start"
    buttonDiv.append(startBtn);


    var resumeBtn = document.createElement("button");resumeBtn.addEventListener("click", className.resume);
    resumeBtn.innerText = "Resume"
    buttonDiv.append(resumeBtn)


    var pauseBtn = document.createElement("button");
    pauseBtn.addEventListener("click", className.pause);
    pauseBtn.innerText = "Pause";
    buttonDiv.append(pauseBtn)




    var resetBtn = document.createElement("button");
    resetBtn.addEventListener("click", className.reset);
    resetBtn.innerText = "Reset"
    buttonDiv.append(resetBtn)


    
 
    document.getElementById(domLocation).append(container)





}

