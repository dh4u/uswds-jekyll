function hideTimelineDetail(){
    // this wasn't working - went with awful hardcode
    //document.getElementsByClassName("timeline-week").style['display'] =  "none";

    ['timeline-week0', 'timeline-week1', 'timeline-week2', 'timeline-week3', 'timeline-week4', 'timeline-week5', 'timeline-week6', 'timeline-week7', 'timeline-week8', 'timeline-week9', 'timeline-week10', 'timeline-week11'].forEach(
        (item, index) => {
            document.getElementById(item).style.display =  "none";
        }
    )
}

function showTimelineDetail(id){
    document.getElementById(id).style.display =  "block";
}

showTimelineDetail('timeline-week0');